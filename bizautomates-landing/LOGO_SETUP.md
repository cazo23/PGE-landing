# How to Add Your Logo

## Quick Steps:

1. **Save your logo file** as one of these:
   - `logo.svg` (recommended - best quality at any size)
   - `logo.png` (use transparent background)
   - `logo.webp` (modern format, great compression)

2. **Place the file** in the `public` folder:
   ```
   /Users/cesarzambrano/Desktop/PGE landing/bizautomates-landing/public/logo.svg
   ```

3. **Done!** The logo will automatically appear at the top of the page.

## If Your Logo Has a Different Name:

If your logo file is named something else (e.g., `bizautomates-logo.svg`), update line 36 in `app/components/Hero.tsx`:

```tsx
<Image
  src="/bizautomates-logo.svg"  // Change this to match your filename
  alt="BizAutomates"
  width={200}
  height={50}
  priority
  className="h-12 w-auto"
/>
```

## Adjusting Logo Size:

The logo is set to `h-12` (48px height). To change the size, update the className:

**Smaller:**
```tsx
className="h-8 w-auto"   // 32px height
className="h-10 w-auto"  // 40px height
```

**Larger:**
```tsx
className="h-16 w-auto"  // 64px height
className="h-20 w-auto"  // 80px height
```

## For PNG Logos:

If using PNG, make sure it has:
- **Transparent background**
- **High resolution** (at least 400px width for retina displays)
- Saved as `logo.png` in the `public` folder

## Troubleshooting:

**Logo doesn't show up:**
1. Check file is in `public` folder (not `public/images` or elsewhere)
2. Check filename matches exactly in Hero.tsx (case-sensitive)
3. Restart dev server: `npm run dev`
4. Clear browser cache (Cmd+Shift+R / Ctrl+Shift+R)

**Logo looks blurry:**
- Use SVG format for perfect scaling
- Or use PNG with 2x the display size (e.g., 400px for 200px display)

**Logo is cut off:**
- Adjust the `width` and `height` props in the Image component
- These should match your logo's aspect ratio

## Current Setup:

- Logo location: `public/logo.svg`
- Display size: 48px height, auto width
- Format: SVG (scales perfectly at any size)
- Loads with priority (optimized for performance)
