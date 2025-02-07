/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-viewer.dev
 * @license https://react-pdf-viewer.dev/license
 * @copyright 2019-2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import type { OpenFile } from '@react-pdf-viewer/core';

export const downloadFile = (file: OpenFile, saveAs: string): void => {
    const blobUrl =
        typeof file.data === 'string' ? '' : URL.createObjectURL(new Blob([file.data], { type: 'application/pdf' }));
    const link = document.createElement('a');
    link.style.display = 'none';
    link.href = blobUrl || file.name;
    link.setAttribute('download', saveAs);

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    if (blobUrl) {
        URL.revokeObjectURL(blobUrl);
    }
};
