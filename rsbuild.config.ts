import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
    plugins: [pluginReact()],
    output: {
        publicPath: "/side1dum/"
    },
    server: {
        port: 6173,
        open: true
    }
});


