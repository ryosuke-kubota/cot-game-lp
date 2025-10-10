'use client';

import { useEffect } from 'react';
import { getBasePath } from '@/utils/basePath';

export default function BasePathProvider() {
  useEffect(() => {
    const basePath = getBasePath();
    document.documentElement.style.setProperty('--base-path', basePath);
  }, []);

  return null;
}
