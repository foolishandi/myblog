import React, {useState, useEffect} from "react";
import CodeBlock from "@theme/CodeBlock";
import axios from "axios";
/*
* @prams:path:相对于主目录:static下的子目录
* @info:如果是导入任意位置的文件代码，使用这种example形式导入到CodeBlok里面去
* @example:import rowEle from "!!raw-loader!../../../src/pages/index";
* */
export default function CodeWrapper({languageType, path}) {
    const [content, setContent] = useState("");
    useEffect(() => {
        axios
            .get(path, {
                responseType: "blob",
            })
            .then((res) => {
                const content = res.data;
                console.log(content);
                const reader = new FileReader();
                reader.onload = (e) => {
                    setContent(e.target.result);
                };
                reader.readAsText(content);
            });
    }, []);

    return (<>
            <CodeBlock language={languageType} title={path}>
                {content}
            </CodeBlock>
        </>);
}
