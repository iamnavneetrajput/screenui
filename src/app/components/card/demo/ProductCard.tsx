import React, {useState} from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/packages/Card";
import { Button } from "@/packages/Button";

export function ProductCardDemo() {
  const [liked, setLiked] = useState(false);

  return (
    <div className="flex items-center justify-center p-8">
      <Card padding="none" className="max-w-sm w-full">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=400&fit=crop"
            alt="Premium Wireless Headphones"
            className="w-full h-64 object-cover"
            loading="lazy"
          />
          <button
            onClick={() => setLiked(!liked)}
            className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:scale-110 transition-transform"
            aria-label={liked ? "Unlike product" : "Like product"}
          >
            <span className={`text-2xl ${liked ? 'text-red-500' : 'text-gray-400'}`}>
              {liked ? '❤️' : '🤍'}
            </span>
          </button>
        </div>
        <div className="p-6">
          <CardHeader spacing="sm">
            <div className="flex-1">
              <CardTitle size="lg">Premium Wireless Headphones</CardTitle>
              <CardDescription>Studio-quality sound with active noise cancellation</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-3xl font-bold text-gray-900">$299</span>
              <span className="text-lg text-gray-500 line-through">$399</span>
              <span className="text-sm font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">25% OFF</span>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <span className="text-sm text-gray-600">(2,847 reviews)</span>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Free shipping on orders over $50</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>30-day money-back guarantee</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>In stock - Ships within 24 hours</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter spacing="lg" className="flex-col gap-3">
            <Button fullWidth size="lg">Add to Cart</Button>
            <Button fullWidth variant="outline">Buy Now</Button>
          </CardFooter>
        </div>
      </Card>
    </div>
  );
}