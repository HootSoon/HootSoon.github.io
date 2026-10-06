function copyText(text, btn) {
            navigator.clipboard.writeText(text).then(() => {
                btn.innerText = 'Copied!';
                setTimeout(() => btn.innerText = 'Copy', 2000);
            });
        }

        function copyCodeBlock(btn) {
            const codeBlock = btn.nextElementSibling.querySelector('code');
            if (codeBlock) {
                copyText(codeBlock.innerText, btn);
            }
        }
