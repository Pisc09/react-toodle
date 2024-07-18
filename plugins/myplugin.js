import myplugin from "tailwindcss/plugin";

export default myplugin(function ({ addBase, theme }) {
  addBase({
    h1: {
      color: theme("colors.green.600"),
      fontSize: theme("fontSize.5xl"),
      fontWeight: theme("fontWeight.bold"),
    },
  });
});

// Voir la video TAILWIND CSS de Dyma | Chapitre 13 leçon 77. Création de plugins
