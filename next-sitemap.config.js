/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.natkalaclefdubienetre.fr",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
  outDir: "out",
  // Les URLs avec des ancres (fragments) ne peuvent pas être crawlées directement par les moteurs de recherche
  // mais nous les ajoutons pour les pages "virtuelles" basées sur les sections de la page d'accueil
  additionalPaths: async (config) => {
    const result = [
      { loc: "/#qui-suis-je", changefreq: "monthly", priority: 0.8 },
      { loc: "/#services", changefreq: "monthly", priority: 0.8 },
      { loc: "/#formules", changefreq: "monthly", priority: 0.7 },
      { loc: "/#pratiques", changefreq: "monthly", priority: 0.7 },
      { loc: "/#salon", changefreq: "monthly", priority: 0.6 },
      { loc: "/#horaires", changefreq: "monthly", priority: 0.6 },
      { loc: "/#contact", changefreq: "monthly", priority: 0.9 },
    ];
    return result;
  },
};
