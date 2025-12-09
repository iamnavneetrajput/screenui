import React from 'react'
import { Input } from '@/packages/Input';

export function PasswordInput() {
  return (
    <div className="space-y-12">
          <div className="space-y-6">
    
            <Input
              label="Password"
              type="password"
              placeholder="Enter password"
              description="Password toggle appears automatically"
              showCount
              maxLength={50}
            />
    
          </div>
        </div>
  );
}
