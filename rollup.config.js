import url from "@rollup/plugin-url";

export default {
  input: "src/app.jsx", // ajuste conforme o ponto de entrada do seu app
  output: {
    dir: "dist",
    format: "esm",
  },
  plugins: [
    url({
      include: ["**/*.svg", "**/*.png", "**/*.jpg", "**/*.gif"],
      limit: 0, // Emite todos os arquivos como estáticos
      emitFiles: true,
      fileName: "[name][extname]", // Mantém o nome original do arquivo
    }),
  ],
};
