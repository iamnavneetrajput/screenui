import React from 'react'
import { Input } from '@/packages/Input';
import { Search } from 'lucide-react';

export function InputWithIcon() {
    
    return (
        <div className="space-y-12">
            <div className="space-y-6">

                <Input
                    label="Search"
                    placeholder="Search…"
                    leftIcon={<Search />}
                />

            </div>
        </div>
    );
}
