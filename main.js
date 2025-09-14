async function translate(text, from, to, options) {
    const { config, utils } = options;
    const { http } = utils;
    const { fetch } = http;

    let { requestPath: url } = config;
    let { apiKey } = config;
    let { model } = config;
    let { stream } = config;

    if (url === undefined || url.length === 0) {
        url = "https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions";
    }
    if (!url.startsWith("http")) {
        url = `https://${url}`;
    }

    if (model === undefined || model.length === 0) {
        model = "qwen-mt-turbo";
    }

    const headers = {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": 'application/json'
    };

    const body = {
        model: model,
        messages: [{ role: 'user', content: text }],
        translation_options: {
            source_lang: from,
            target_lang: to
        }
    };
    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: {
                type: "Json",
                payload: body
            }
        });

        if (res.ok) {
            const text = await res.data;
            try {
                return text.choices[0].message.content.trim();
            } catch (err) {
                throw `Translation error: ${err}`;
            }
        }
    } catch (err) {
        throw `Fetch error: ${err}`;
    }
}
