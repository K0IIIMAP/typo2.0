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
import { MagicWandIcon } from "@radix-ui/react-icons";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { useSettingsContext } from "@/lib/hooks";

export function DropSound() {
  // State to track the selected font
  const { sounds, setSounds } = useSettingsContext();

  return (
    <div>
      {/* Apply the selected font to this div */}

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          {/* Button with transparent background, white text, black border */}
          <Button className="bg-transparent text-white border-black border-2">
            <MagicWandIcon />
            SoundPacks
            <ChevronDownIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-34 bg-gray-700 text-white border border-black">
          <DropdownMenuRadioGroup value={sounds} onValueChange={setSounds}>
            <DropdownMenuRadioItem
              value="noSoundpack"
              className="hover:bg-gray-600 focus:bg-gray-500"
            >
              None
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem
              value="soundpack1"
              className="hover:bg-gray-600 focus:bg-gray-500"
            >
              Soundpack 1
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem
              value="soundpack2"
              className="hover:bg-gray-600 focus:bg-gray-500"
            >
              Soundpack 2
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
