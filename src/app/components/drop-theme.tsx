"use client";

import * as React from "react";
import { Button } from "@/app/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import { MoonIcon } from "@radix-ui/react-icons";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { useSettingsContext } from "@/lib/hooks";

export function DropTheme() {
  const { theme, setTheme } = useSettingsContext();

  return (
    <div>
      {/* Apply the selected font to this div */}

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          {/* Button with transparent background, white text, black border */}
          <Button className="bg-transparent text-white border-black border-2">
            <MoonIcon />
            Theme
            <ChevronDownIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-28 bg-gray-700 text-white border border-black">
          <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
            <DropdownMenuRadioItem
              value="space"
              className="hover:bg-gray-600 focus:bg-gray-500"
            >
              Space
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem
              value="light"
              className="hover:bg-gray-600 focus:bg-gray-500"
            >
              Light
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem
              value="dark"
              className="hover:bg-gray-600 focus:bg-gray-500"
            >
              Dark
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
