import React, {useCallback} from 'react';
import {toPng} from 'html-to-image';
import {DownloadIcon} from "@heroicons/react/solid";

export default function HtmlToImage({imageRef, userName}) {

    const onButtonClick = useCallback(() => {
        if (imageRef.current === null) {
            return;
        }

        const filter = (node) => {
            const exclusionClasses = ['exclude-in-image', 'ping'];
            return !exclusionClasses.some(classname => node.classList && node.classList.contains(classname));
        };
        imageRef.current.style='transform:none;will-change:unset';
        let canvasOptions;
        if(window.matchMedia("(max-width: 425px)").matches){
            canvasOptions = {
                canvasWidth: 200,
                canvasHeight: 400
            }
        } else {
            canvasOptions = {
                canvasWidth: 500,
                canvasHeight: 200
            }
        }
        toPng(imageRef.current, {cacheBust: true, filter: filter, ...canvasOptions, pixelRatio: 10})
            .then((dataUrl) => {
                const link = document.createElement('a');
                link.download = `${userName}-twiterstats.png`;
                link.href = dataUrl;
                link.click();
            })
            .catch((err) => {
                console.log(err)
            })
    }, [imageRef, userName]);

    return (
        <button onClick={onButtonClick} className="md:mr-6 mr-2">
            <DownloadIcon className="h-10 text-cyan-400 hover:text-cyan-600"/>
        </button>
    );
}
