import React, { useState, useEffect } from 'react';

const config = {
  openRouter: {
    apiKey: process.env.REACT_APP_OPENROUTER_API_KEY || 'your-api-key',
    model: 'openai/gpt-3.5-turbo' // fallback to a more common model
  },
  imgFlip: {
    username: process.env.REACT_APP_IMGFLIP_USERNAME || 'your-username',
    password: process.env.REACT_APP_IMGFLIP_PASSWORD || 'your-password'
  }
};

const TrendingMemes = () => {
  const [trendingMemes, setTrendingMemes] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [topic, setTopic] = useState('');
  const [style, setStyle] = useState('funny');
  const [generatedMeme, setGeneratedMeme] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const res = await fetch('https://api.imgflip.com/get_memes');
        const data = await res.json();
        if (data.success) {
          setTrendingMemes(data.data.memes);
        } else {
          throw new Error('Failed to fetch trending memes.');
        }
      } catch (err) {
        console.error(err);
        setError('Could not load trending memes.');
      }
    };
    fetchTrending();
  }, []);

  const generateCaption = async () => {
    const prompts = {
      funny: `Write a funny meme caption about "${topic}" using internet humor.`,
      sarcastic: `Write a sarcastic meme caption about "${topic}".`,
      wholesome: `Write a wholesome meme caption about "${topic}".`,
      dark: `Write a clever dark humor caption about "${topic}". Keep it SFW.`
    };

    const prompt = prompts[style] || prompts.funny;

    try {
      const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${config.openRouter.apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: config.openRouter.model,
          messages: [
            { role: 'system', content: 'You are a meme expert.' },
            { role: 'user', content: prompt }
          ],
          max_tokens: 50
        })
      });

      const data = await res.json();
      const caption = data?.choices?.[0]?.message?.content?.trim().replace(/["]/g, '');
      return caption || 'Generated Meme';
    } catch (err) {
      console.error('Error generating caption:', err);
      throw new Error('Failed to generate meme caption.');
    }
  };

  const generateMeme = async () => {
    if (!selectedTemplate || !topic) {
      setError('Please select a meme template and enter a topic.');
      return;
    }

    setLoading(true);
    setError('');
    setGeneratedMeme(null);

    try {
      const caption = await generateCaption();

      const formData = new FormData();
      formData.append('template_id', selectedTemplate.id);
      formData.append('username', config.imgFlip.username);
      formData.append('password', config.imgFlip.password);
      formData.append('text0', caption);
      formData.append('text1', '');

      const response = await fetch('https://api.imgflip.com/caption_image', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();
      if (!data.success) throw new Error(data.error_message);

      setGeneratedMeme({
        url: data.data.url,
        caption,
        template: selectedTemplate.name
      });
    } catch (err) {
      console.error(err);
      setError(err.message || 'Meme generation failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-orange-500">Trending Meme Templates</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
        {trendingMemes.map(meme => (
          <div
            key={meme.id}
            onClick={() => setSelectedTemplate(meme)}
            className={`cursor-pointer border-4 rounded-lg p-1 ${selectedTemplate?.id === meme.id ? 'border-orange-500' : 'border-transparent'}`}
          >
            <img src={meme.url} alt={meme.name} className="w-full rounded" />
            <p className="text-sm text-center mt-1">{meme.name}</p>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-xl shadow mb-6">
        <h3 className="text-xl font-bold text-purple-700 mb-4">Generate a Meme</h3>
        <input
          type="text"
          placeholder="Enter a topic (e.g. Mondays, exams...)"
          className="w-full p-3 border rounded mb-4"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />

        <select
          value={style}
          onChange={(e) => setStyle(e.target.value)}
          className="w-full p-3 border rounded mb-4"
        >
          <option value="funny">Funny</option>
          <option value="sarcastic">Sarcastic</option>
          <option value="wholesome">Wholesome</option>
          <option value="dark">Dark</option>
        </select>

        <button
          onClick={generateMeme}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded w-full"
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Generate Meme'}
        </button>

        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>

      {generatedMeme && (
        <div className="bg-black p-4 rounded-xl shadow text-center">
          <img src={generatedMeme.url} alt="Generated Meme" className="rounded-lg mb-4 mx-auto" />
          <p className="text-white text-lg">"{generatedMeme.caption}"</p>
          <p className="text-orange-400 text-sm mt-2">Template: {generatedMeme.template}</p>
        </div>
      )}
    </div>
  );
};

export default TrendingMemes;
