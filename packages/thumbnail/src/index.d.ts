/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-viewer.dev
 * @license https://react-pdf-viewer.dev/license
 * @copyright 2019-2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import * as React from 'react';
import type { Plugin } from '@react-pdf-viewer/core';

// Plugin
export interface CoverProps {
    getPageIndex?({ numPages }: { numPages: number }): number;
}

export interface RenderCurrentPageLabelProps {
    currentPage: number;
    numPages: number;
    pageIndex: number;
    pageLabel: string;
}

export type RenderCurrentPageLabel = (props: RenderCurrentPageLabelProps) => React.ReactElement;

export interface ThumbnailsProps {
    renderCurrentPageLabel?: RenderCurrentPageLabel;
}

export interface ThumbnailPlugin extends Plugin {
    Cover: (props: CoverProps) => React.ReactElement;
    Thumbnails: (props?: ThumbnailsProps) => React.ReactElement;
}

export function thumbnailPlugin(): ThumbnailPlugin;
