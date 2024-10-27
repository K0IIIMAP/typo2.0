// audioHelper.ts
export const playKeySound = (
  typedChar: string,
  audioRefs: React.RefObject<(HTMLAudioElement | null)[]>,
  sounds: string
) => {
  if (audioRefs.current && sounds === "soundpack1") {
    let soundIndex = -1; // Default to no sound

    // Determine which key was pressed and map it to a sound
    if (["q", "a", "z", "w", "s", "x"].includes(typedChar)) {
      soundIndex = 0;
    } else if (["e", "d", "c", "r", "f", "v"].includes(typedChar)) {
      soundIndex = 1;
    } else if (["t", "g", "b", "y", "h", "n"].includes(typedChar)) {
      soundIndex = 2;
    } else if (["u", "j", "m"].includes(typedChar)) {
      soundIndex = 3;
    } else if (["p", "l", "o"].includes(typedChar)) {
      soundIndex = 4;
    } else if (["i", "k", ","].includes(typedChar)) {
      soundIndex = 5;
    } else if (["o", ";", "."].includes(typedChar)) {
      soundIndex = 0;
    } else if (["p", "'"].includes(typedChar)) {
      soundIndex = 1;
    } else if (typedChar === " ") {
      soundIndex = 6; // Spacebar sound
    } else if (
      ["Shift", "Enter", "Backspace", "CapsLock", "Tab", "Escape"].includes(
        typedChar
      )
    ) {
      soundIndex = 7; // Special key sound
    }

    if (soundIndex !== -1) {
      const audioElement = audioRefs.current[soundIndex];
      if (audioElement) {
        audioElement.currentTime = 0; // Reset the sound to start from the beginning
        audioElement.play().catch((error) => {
          console.error("Error playing sound:", error);
        });
      }
    }
  }

  if (audioRefs.current && sounds === "soundpack2") {
    let soundIndex = -1; // Default to no sound
    if (
      [
        "Shift",
        "Enter",
        "Backspace",
        "CapsLock",
        "Tab",
        "Escape",
        " ",
      ].includes(typedChar)
    ) {
      soundIndex = 9;
    } else {
      soundIndex = 8;
    }
    if (soundIndex !== -1) {
      const audioElement = audioRefs.current[soundIndex];
      if (audioElement) {
        audioElement.currentTime = 0; // Reset the sound to start from the beginning
        audioElement.play().catch((error) => {
          console.error("Error playing sound:", error);
        });
      }
    }
  }
};
