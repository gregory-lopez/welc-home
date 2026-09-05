"use client";

import { useEffect, useState } from "react";
import styles from "./PalettePreviewSwitcher.module.scss";

const palettes = {
  calanque: {
    label: "Calanque Solaire",
    colors: {
      "--background": "#fffcf5",
      "--foreground": "#20383b",
      "--muted": "#566663",
      "--accent": "#176f6a",
      "--accent-strong": "#0d514d",
      "--accent-soft": "#d8ebe5",
      "--coral": "#a94731",
      "--coral-soft": "#f7ded4",
      "--surface": "#ffffff",
      "--border": "#80978f",
    },
  },
  pinede: {
    label: "Pinède et Terre Cuite",
    colors: {
      "--background": "#fffdf7",
      "--foreground": "#26372f",
      "--muted": "#5b675f",
      "--accent": "#3f6b55",
      "--accent-strong": "#294d3c",
      "--accent-soft": "#dfebdf",
      "--coral": "#a74733",
      "--coral-soft": "#f6dfd5",
      "--surface": "#ffffff",
      "--border": "#7d9488",
    },
  },
  faience: {
    label: "Faïence du Port",
    colors: {
      "--background": "#fffdf9",
      "--foreground": "#24363d",
      "--muted": "#58666b",
      "--accent": "#24647a",
      "--accent-strong": "#174b5d",
      "--accent-soft": "#dcecef",
      "--coral": "#aa4538",
      "--coral-soft": "#f7e0d9",
      "--surface": "#ffffff",
      "--border": "#82949a",
    },
  },
  olivier: {
    label: "Olivier & Corail",
    colors: {
      "--background": "#fff9f5",
      "--foreground": "#2e3632",
      "--muted": "#655f5a",
      "--accent": "#3f6957",
      "--accent-strong": "#2d4e40",
      "--accent-soft": "#f4ded6",
      "--coral": "#a64632",
      "--coral-soft": "#f8e4dc",
      "--surface": "#ffffff",
      "--border": "#8e8c80",
    },
  },
  tuile: {
    label: "Tuile & Eau Claire",
    colors: {
      "--background": "#fffaf7",
      "--foreground": "#303638",
      "--muted": "#665f5b",
      "--accent": "#984936",
      "--accent-strong": "#6f3226",
      "--accent-soft": "#f4e0d8",
      "--coral": "#286961",
      "--coral-soft": "#dfeee9",
      "--surface": "#ffffff",
      "--border": "#918983",
    },
  },
  bougainvillier: {
    label: "Bougainvillier Doux",
    colors: {
      "--background": "#fff9f7",
      "--foreground": "#383236",
      "--muted": "#685e62",
      "--accent": "#8b4858",
      "--accent-strong": "#65323f",
      "--accent-soft": "#f2dde1",
      "--coral": "#a64932",
      "--coral-soft": "#f7e1d8",
      "--surface": "#ffffff",
      "--border": "#95878b",
    },
  },
} as const;

type PaletteId = keyof typeof palettes;

const storageKey = "welc-home-preview-palette";

function isPaletteId(value: string | null): value is PaletteId {
  return value !== null && value in palettes;
}

export function PalettePreviewSwitcher() {
  const [selectedPalette, setSelectedPalette] =
    useState<PaletteId>("calanque");
  const isDevelopment = process.env.NODE_ENV === "development";

  useEffect(() => {
    if (!isDevelopment) {
      return;
    }

    const storedPalette = window.sessionStorage.getItem(storageKey);

    if (isPaletteId(storedPalette)) {
      setSelectedPalette(storedPalette);
    }
  }, [isDevelopment]);

  useEffect(() => {
    if (!isDevelopment) {
      return;
    }

    const root = document.documentElement;
    const palette = palettes[selectedPalette];

    Object.entries(palette.colors).forEach(([property, value]) => {
      root.style.setProperty(property, value);
    });

    window.sessionStorage.setItem(storageKey, selectedPalette);
  }, [isDevelopment, selectedPalette]);

  if (!isDevelopment) {
    return null;
  }

  return (
    <aside className={styles.switcher} aria-label="Comparaison des palettes">
      <p>Palette de test</p>
      <div className={styles.options}>
        {(Object.entries(palettes) as [PaletteId, (typeof palettes)[PaletteId]][]).map(
          ([id, palette]) => (
            <button
              className={styles.option}
              data-palette={id}
              key={id}
              type="button"
              aria-pressed={selectedPalette === id}
              onClick={() => setSelectedPalette(id)}
            >
              <span aria-hidden="true" />
              {palette.label}
            </button>
          ),
        )}
      </div>
    </aside>
  );
}
