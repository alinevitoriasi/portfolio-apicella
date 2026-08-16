async function loadLongForm() {
  const response = await fetch('../data/videos.json');
  const videos = await response.json();

  const portfolioGrid = document.querySelector('.portfolio-grid');

  videos.forEach(video => {
    const item = document.createElement('div');

    item.className = `portfolio-item reveal ${video.featured ? 'featured' : ''
      }`;

    let embedUrl;
    let thumbnail;

    if (video.type === 'youtube') {
      embedUrl = `https://www.youtube.com/embed/${video.videoId}`;
      thumbnail = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;
    }

    if (video.type === 'spotify') {
      embedUrl = video.embedUrl;
      thumbnail = video.thumbnail;
    }

    item.setAttribute(
      'onclick',
      `openModal('${embedUrl}', '${video.type} — ${video.title}')`
    );

    item.innerHTML = `
      <img
        class="video-thumb"
        src="${thumbnail}"
        alt="${video.alt}"
      />

      <div class="portfolio-overlay">
        <div class="portfolio-cat">
          ${video.category}
        </div>

        <div class="portfolio-title">
          ${video.title}
        </div>
      </div>

      <div class="play-btn">
        <svg width="18" height="18" viewBox="0 0 25 18" fill="none">
          <polygon
            points="6,3 16,9 6,15"
            fill="#e8d5a3"
          />
        </svg>
      </div>
    `;

    portfolioGrid.appendChild(item);
    obs.observe(item);
  });
}


async function loadShortForm() {
  const response = await fetch('../data/shorts.json');
  const videos = await response.json();

  const portfolioGrid = document.querySelector('.portfolio-tiktok');

  videos.forEach(video => {
    const item = document.createElement('div');

    item.className = 'portfolio-vertical reveal vertical';

    item.setAttribute(
      'onclick',
      `openModal('${video.embedUrl}', '${video.type} - ${video.title}')`
    );

    item.innerHTML = `
      <img
        class="tiktok-thumb"
        src="${video.thumbnail}"
        alt="${video.alt}"
      />

      <div class="portfolio-overlay">
        <div class="portfolio-cat">
          ${video.category}
        </div>

        <div class="portfolio-title">
          ${video.title}
        </div>
      </div>

      <div class="play-btn">
        <svg width="18" height="18" viewBox="0 0 25 18" fill="none">
          <polygon
            points="6,3 16,9 6,15"
            fill="#e8d5a3"
          />
        </svg>
      </div>
    `;

    portfolioGrid.appendChild(item);
    obs.observe(item);
  });
}



async function loadThumbnails() {
  const response = await fetch('../data/thumbnails.json');
  const videos = await response.json();

  const portfolioGrid = document.querySelector('.thumbnails-grid');

  videos.forEach(video => {
    const item = document.createElement('div');

    item.className = `portfolio-item reveal featured ${video.featured ? 'featured' : ''
      }`;

    // let embedUrl;
    // let thumbnail;

    // if (video.type === 'youtube') {
    //   embedUrl = `https://www.youtube.com/embed/${video.videoId}`;
    //   thumbnail = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;
    // }

    // if (video.type === 'spotify') {
    //   embedUrl = video.embedUrl;
    //   thumbnail = video.thumbnail;
    // }

    item.setAttribute(
      'onclick',
      `openModal('${video.src}', '')`
    );
    console.log(video)

    item.innerHTML = `
      <img
        class="video-thumb thumbnails"
        src="${video.src}"
        alt="${video.alt}"
      />

      <div class="play-btn">
        <span class="material-symbols-outlined">
          visibility
        </span>
      </div>
    `;

    portfolioGrid.appendChild(item);
    obs.observe(item);
  });
}

loadLongForm();
loadShortForm();
loadThumbnails();