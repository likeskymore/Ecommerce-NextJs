import { Button } from '@/components/ui/button';
import ModeToggle from './mode-toggle';
import Link from 'next/link';
import { EllipsisVertical, ShoppingCart } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import UserButton from './user-button';

const Menu = () => {
  return (
    <div className="flex justify-end gap-3 items-center">
      {/* Desktop nav */}
      <nav className="hidden md:flex w-full max-w-xs items-center gap-2">
        <ModeToggle />
        <Button asChild variant="ghost" className="flex items-center gap-2">
          <Link href="/cart">
            <ShoppingCart className="h-4 w-4" />
            <span>Cart</span>
          </Link>
        </Button>
        <UserButton />
      </nav>

      {/* Mobile nav */}
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="p-2 rounded-md hover:bg-muted">
            <EllipsisVertical className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side="right" className="space-y-4 p-4 w-64">
            <SheetTitle className="text-lg">Menu</SheetTitle>
            <div className="flex flex-col gap-3 items-start">
              <ModeToggle />
              <Button
                asChild
                variant="ghost"
                className="flex items-center gap-2 justify-start w-full"
              >
                <Link href="/cart">
                  <ShoppingCart className="h-4 w-4" />
                  <span>Cart</span>
                </Link>
              </Button>
              <UserButton />
            </div>
            <SheetDescription className="text-sm text-muted-foreground mt-4">
              Access your cart and profile quickly.
            </SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
