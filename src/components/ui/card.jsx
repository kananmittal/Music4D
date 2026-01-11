import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export const Card = ({ className, children }) => {
    return (
        <div className={cn("rounded-xl border bg-card text-card-foreground shadow", className)}>
            {children}
        </div>
    );
};

export const CardHeader = ({ className, children }) => {
    return (
        <div className={cn("flex flex-col space-y-1.5 p-6", className)}>
            {children}
        </div>
    );
};

export const CardTitle = ({ className, children }) => {
    return (
        <h3 className={cn("font-semibold leading-none tracking-tight", className)}>
            {children}
        </h3>
    );
};

export const CardDescription = ({ className, children }) => {
    return (
        <p className={cn("text-sm text-muted-foreground", className)}>
            {children}
        </p>
    );
};

export const CardContent = ({ className, children }) => {
    return (
        <div className={cn("p-6 pt-0", className)}>
            {children}
        </div>
    );
};
