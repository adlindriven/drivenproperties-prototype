import React from 'react';

export const SearchBox = ({
    placeholder = "Search properties...",
    value,
    onChange,
    onSearch,
    className = ""
}) => {
    return (
        <div className={`flex items-center bg-neutral-surface border border-neutral-border rounded-full h-12 px-4 shadow-sm w-full max-w-md ${className}`}>
            <span className="text-neutral-muted mr-3">
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-5 h-5">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                </svg>
            </span>
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange && onChange(e.target.value)}
                className="flex-1 bg-transparent text-neutral-main text-sm font-lato outline-none placeholder-neutral-muted"
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && onSearch) onSearch();
                }}
            />
            <button
                onClick={onSearch}
                className="ml-2 bg-action-primary-bg text-action-primary-text hover:bg-action-primary-hover px-4 py-1.5 rounded-full text-sm font-semibold transition-colors"
            >
                Search
            </button>
        </div>
    );
};
