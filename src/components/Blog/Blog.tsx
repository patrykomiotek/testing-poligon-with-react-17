import { useState, useEffect } from 'react';

interface BlogEntry {
  id: string;
  fields: {
    title: string;
    intro: string;
  }
}

function Blog() {
  const [posts, setPosts] = useState<BlogEntry[]>([]);
  useEffect(() => {
    // TODO: refactor to service
    fetch('https://api.airtable.com/v0/appZ3Ko6K42jAMR0H/news?view=default', {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`
      }
    })
      .then(response => response.json())
      .then(data => setPosts(data.records))
  }, []);
  return (
    <div>
      <h1>Posts</h1>
      {posts.map((elem) => (
        <div key={elem.id}>
          <h3>{elem.fields.title}</h3>
          <p>{elem.fields.intro}</p>
        </div>
      ))}
    </div>
  );
}

export { Blog };
