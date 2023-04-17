export const bannerMapper = (banners) => {
  return banners.map((banner) => ({
    img: `http://localhost:1337${banner.attributes.img.data.attributes.url}`,
    title: banner.attributes.title,
    subtitle: banner.attributes.subtitle
  }));
};

export const newsInstagramMapper = (newsInstagram) => {
  return newsInstagram.map((instagram) => ({
    title: instagram.attributes.title,
    img: `http://localhost:1337${instagram.attributes.img.data.attributes.url}`,
    description: instagram.attributes.description,
    href: instagram.attributes.href
  }));
};

export const newsGeogisMapper = (newsGeogis) => {
  return newsGeogis.map((geogis) => ({
    title: geogis.attributes.title,
    img: `http://localhost:1337${geogis.attributes.img.data.attributes.url}`,
    description: geogis.attributes.description
  }));
};
