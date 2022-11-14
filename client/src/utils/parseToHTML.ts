import parse from 'html-react-parser';
import DOMPurify from 'dompurify';

export const parseToHtml = (htmlString: string) => {
    const cleanHtmlString = DOMPurify.sanitize(htmlString, { USE_PROFILES: { html: true } });
    const html = parse(cleanHtmlString);
    return html;
};
