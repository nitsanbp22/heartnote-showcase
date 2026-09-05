"use client";

/**
 * Portfolio sample from the collaborative HeartNote production codebase.
 * Included to demonstrate the responsive editor pattern relevant to my
 * product, UI/UX and front-end contribution.
 */

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { EditorDesktop } from "./Desktop/EditorDesktop";
import { EditorMobile } from "./Mobile/EditorMobile";
import type { TemplateEditorProps } from "./types";

export function TemplateEditor(props: TemplateEditorProps) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return isMobile ? <EditorMobile {...props} /> : <EditorDesktop {...props} />;
}
