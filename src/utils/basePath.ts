// GitHub PagesのbasePathを取得
export const getBasePath = () => {
  // サーバーサイドでは空文字列を返す
  if (typeof window === 'undefined') {
    return '';
  }

  // Next.jsのbasePathを__NEXT_DATA__から取得
  try {
    const nextDataScript = document.getElementById('__NEXT_DATA__');
    if (nextDataScript) {
      const nextData = JSON.parse(nextDataScript.textContent || '{}');
      return nextData.assetPrefix || '';
    }
  } catch (e) {
    // フォールバック: scriptタグのsrcから推測
    const scripts = document.querySelectorAll('script[src*="/_next/"]');
    if (scripts.length > 0) {
      const src = (scripts[0] as HTMLScriptElement).src;
      const match = src.match(/^(https?:\/\/[^/]+\/[^/]+)?\/_next\//);
      if (match && match[1]) {
        return match[1].replace(/^https?:\/\/[^/]+/, '');
      }
    }
  }

  return '';
};
