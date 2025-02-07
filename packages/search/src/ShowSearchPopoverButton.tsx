/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-viewer.dev
 * @license https://react-pdf-viewer.dev/license
 * @copyright 2019-2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import * as React from 'react';
import { isMac, MinimalButton, Position, Tooltip } from '@react-pdf-viewer/core';
import type { Store, StoreHandler } from '@react-pdf-viewer/core';

import { ShowSearchPopoverDecorator } from './ShowSearchPopoverDecorator';
import type { StoreProps } from './types/StoreProps';

const TOOLTIP_OFFSET = { left: 0, top: 8 };

export const ShowSearchPopoverButton: React.FC<{
    enableShortcuts: boolean;
    store: Store<StoreProps>;
    onClick(): void;
}> = ({ enableShortcuts, store, onClick }) => {
    const ariaKeyShortcuts = enableShortcuts ? (isMac() ? 'Meta+F' : 'Ctrl+F') : '';

    const handleShortcutsPressed: StoreHandler<boolean> = (areShortcutsPressed: boolean) => {
        if (areShortcutsPressed) {
            onClick();
        }
    };

    React.useEffect(() => {
        store.subscribe('areShortcutsPressed', handleShortcutsPressed);

        return () => {
            store.unsubscribe('areShortcutsPressed', handleShortcutsPressed);
        };
    }, []);

    return (
        <ShowSearchPopoverDecorator onClick={onClick}>
            {(p) => (
                <Tooltip
                    ariaControlsSuffix="search-popover"
                    position={Position.BottomCenter}
                    target={
                        <MinimalButton ariaKeyShortcuts={ariaKeyShortcuts} ariaLabel={p.label} onClick={onClick}>
                            {p.icon}
                        </MinimalButton>
                    }
                    content={() => p.label}
                    offset={TOOLTIP_OFFSET}
                />
            )}
        </ShowSearchPopoverDecorator>
    );
};
