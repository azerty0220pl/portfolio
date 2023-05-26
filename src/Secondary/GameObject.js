import { Unity, useUnityContext } from "react-unity-webgl";

function GameObject() {
    const { unityProvider } = useUnityContext({
        loaderUrl: "https://cdn.jsdelivr.net/gh/azerty0220pl/portfolio/public/webgl/FlappyCube2D/Build/FlappyCube2D.loader.js",
        dataUrl: "https://cdn.jsdelivr.net/gh/azerty0220pl/portfolio/public/webgl/FlappyCube2D/Build/FlappyCube2D.data",
        frameworkUrl: "https://cdn.jsdelivr.net/gh/azerty0220pl/portfolio/public/webgl/FlappyCube2D/Build/FlappyCube2D.framework.js",
        codeUrl: "https://cdn.jsdelivr.net/gh/azerty0220pl/portfolio/public/webgl/FlappyCube2D/Build/FlappyCube2D.wasm"
    });

    return <Unity unityProvider={unityProvider} />;
}

export default GameObject;