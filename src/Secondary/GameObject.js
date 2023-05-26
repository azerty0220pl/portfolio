import { Unity, useUnityContext } from "react-unity-webgl";

function GameObject() {
    const { unityProvider } = useUnityContext({
        loaderUrl: "%PUBLIC_URL%/wegl/FlappyCube2D/Build/FlappyCube2D.loader.js",
        dataUrl: "%PUBLIC_URL%/wegl/FlappyCube2D/Build/FlappyCube2D.data",
        frameworkUrl: "%PUBLIC_URL%/wegl/FlappyCube2D/Build/FlappyCube2D.framework.js",
        codeUrl: "%PUBLIC_URL%/wegl/FlappyCube2D/Build/FlappyCube2D.wasm",
    });

    return <Unity unityProvider={unityProvider} />;
}

export default GameObject;