import type { Message } from '../../core';

export const adminContent = {
  'adminContent.errors.notFound': 'Not found',

  // Pages list (admin/pages/index.astro).
  'adminContent.pages.title': 'Pages',
  'adminContent.pages.newPage': 'New page',
  'adminContent.pages.empty':
    'No pages yet. Create one for About, Shipping, Returns, or Privacy, then add it to your <a href="{href}" class="underline hover:text-brand">navigation</a> so shoppers can find it.',
  'adminContent.pages.colTitle': 'Title',
  'adminContent.pages.colUrl': 'URL',
  'adminContent.pages.colStatus': 'Status',
  'adminContent.pages.colUpdated': 'Updated',
  'adminContent.pages.colActions': 'Actions',
  'adminContent.pages.published': 'Published',
  'adminContent.pages.draft': 'Draft',
  'adminContent.pages.view': 'View',
  'adminContent.pages.edit': 'Edit',
  'adminContent.pages.delete': 'Delete',
  'adminContent.pages.deleteLinkedConfirm':
    'This page is linked from your navigation. Deleting it hides that link on the storefront. Continue?',
  'adminContent.pages.deleteConfirm': 'Delete this page?',

  // New page (admin/pages/new.astro).
  'adminContent.newPage.title': 'New page',
  'adminContent.newPage.back': 'Back to pages',
  'adminContent.newPage.fieldTitle': 'Title',
  'adminContent.newPage.fieldSlug':
    'URL slug <span class="normal-case tracking-normal text-gray-400">(optional)</span>',
  'adminContent.newPage.slugPlaceholder': 'about',
  'adminContent.newPage.slugHelp':
    'Leave blank to build it from the title. The page will live at /pages/<slug>.',
  'adminContent.newPage.createDraft': 'Create draft',

  // Page editor (admin/pages/[id]/edit.astro).
  'adminContent.editPage.title': 'Edit {title}',
  'adminContent.editPage.heading': 'Edit page',
  'adminContent.editPage.back': 'Back to pages',
  'adminContent.editPage.viewOnStore': 'View on store',
  'adminContent.editPage.saved': 'Saved.',
  'adminContent.editPage.fieldTitle': 'Title',
  'adminContent.editPage.fieldSlug': 'Slug',
  'adminContent.editPage.editorView': 'Editor view',
  'adminContent.editPage.modeMarkdown': 'Markdown',
  'adminContent.editPage.modeSplit': 'Split',
  'adminContent.editPage.modePreview': 'Preview',
  'adminContent.editPage.toolHeading': 'Heading',
  'adminContent.editPage.toolBoldLabel': 'B',
  'adminContent.editPage.toolBold': 'Bold',
  'adminContent.editPage.toolItalicLabel': 'I',
  'adminContent.editPage.toolItalic': 'Italic',
  'adminContent.editPage.toolLink': 'Link',
  'adminContent.editPage.toolListLabel': 'List',
  'adminContent.editPage.toolList': 'Bulleted list',
  'adminContent.editPage.toolNumbered': 'Numbered list',
  'adminContent.editPage.toolQuoteLabel': 'Quote',
  'adminContent.editPage.toolQuote': 'Blockquote',
  'adminContent.editPage.toolCodeLabel': 'Code',
  'adminContent.editPage.toolCode': 'Inline code',
  'adminContent.editPage.image': 'Image',
  // The empty editor's placeholder doubles as a Markdown cheat sheet: translate
  // the prose, keep the syntax characters.
  'adminContent.editPage.placeholder': `## A section heading

Write your page in Markdown. Blank lines separate paragraphs.

**bold**  _italic_  \`code\`

- a bulleted list
- another item

1. a numbered list
2. another item

> a quotation

[a link](https://example.com)

![describe the image](/images/media/photo.webp)`,
  'adminContent.editPage.previewHeading':
    'Preview <span class="normal-case tracking-normal">· click to find the source</span>',
  'adminContent.editPage.layout': 'Layout',
  'adminContent.editPage.published': 'Published',
  'adminContent.editPage.save': 'Save',
  'adminContent.editPage.publishHelp':
    'Published pages appear in the footer and sitemap. Storefront caching means a change can take up to a minute to appear.',
  // Read by the editor's client script from data-* attributes.
  'adminContent.editPage.rendering': 'Rendering…',
  'adminContent.editPage.previewFailedStatus': 'Preview failed ({status})',
  'adminContent.editPage.previewFailed': 'Preview failed.',
  'adminContent.editPage.linkText': 'link text',
  'adminContent.editPage.altPrompt': 'Describe this image for screen readers:',

  // Layout presets (features/pages/layouts.ts): one label + hint per preset.
  'adminContent.layout.standard': 'Standard',
  'adminContent.layout.standardHint':
    'Narrow column, left-aligned title. Best for policies, shipping, and returns.',
  'adminContent.layout.editorial': 'Editorial',
  'adminContent.layout.editorialHint':
    'Narrow column, centred title. Best for About and brand-story pages.',
  'adminContent.layout.wide': 'Wide',
  'adminContent.layout.wideHint':
    'Full width, left-aligned title. Best for size charts, tables, and image grids.',

  // Page form validation (features/pages/form.ts, api/admin/pages.ts).
  'adminContent.form.titleRequired': 'Title is required.',
  'adminContent.form.titleTooLong': 'Title must be {max} characters or fewer.',
  'adminContent.form.bodyTooLong': 'Page content must be {max} characters or fewer.',

  // Save outcome when media is missing (features/pages/save.ts).
  'adminContent.save.publishRefused': {
    one: 'Changes saved, but this page was not published because {count} image is missing from the media library.',
    other:
      'Changes saved, but this page was not published because {count} images are missing from the media library.',
  },
  'adminContent.save.liveBroken': {
    one: 'Changes saved and live, but {count} image is missing from the media library and will render broken.',
    other:
      'Changes saved and live, but {count} images are missing from the media library and will render broken.',
  },
  'adminContent.save.draftMissing': {
    one: 'Draft saved, but {count} image is missing from the media library.',
    other: 'Draft saved, but {count} images are missing from the media library.',
  },

  // Navigation (admin/navigation.astro, features/navigation/*).
  'adminContent.navigation.title': 'Navigation',
  'adminContent.navigation.intro':
    'Choose what appears in your header and footer. Changes appear on the storefront within a minute.',
  'adminContent.navigation.updated': 'Navigation updated.',
  'adminContent.navigation.addTitle': 'Add an item',
  'adminContent.navigation.type': 'Type',
  'adminContent.navigation.search': 'Search',
  'adminContent.navigation.filterPlaceholder': 'Filter by name',
  'adminContent.navigation.searchAll': 'Search all',
  'adminContent.navigation.noMatches': 'No matches',
  'adminContent.navigation.noMatchesTruncated': 'No matches here — try Search all',
  'adminContent.navigation.noneAvailable': 'None available',
  'adminContent.navigation.labelOptional': 'Label (optional)',
  'adminContent.navigation.defaultsTo': 'Defaults to “{name}”',
  'adminContent.navigation.defaultsToName': 'Defaults to its name',
  'adminContent.navigation.addTo': 'Add to',
  'adminContent.navigation.header': 'Header',
  'adminContent.navigation.footer': 'Footer',
  'adminContent.navigation.nothingMatches': 'Nothing matches — clear or widen your search',
  'adminContent.navigation.add': 'Add',
  'adminContent.navigation.truncatedPage': 'pages: showing {shown} of {total}',
  'adminContent.navigation.truncatedProduct': 'products: showing {shown} of {total}',
  'adminContent.navigation.truncatedCategory': 'categorys: showing {shown} of {total}',
  'adminContent.navigation.truncatedHint': 'Type to filter; press Search all to look beyond that.',
  'adminContent.navigation.headerNote':
    'Up to {max} items — the header also holds your logo, search, and cart.',
  'adminContent.navigation.footerNote': 'Up to {max} items.',
  'adminContent.navigation.bothRootLinks':
    'Home and Catalog both point at <code>/</code> right now. They will differ once you set a custom home page in Settings.',
  'adminContent.navigation.noItems': 'No items yet.',
  'adminContent.navigation.untitled': 'Untitled',
  'adminContent.navigation.editLinkText': 'Edit link text',
  'adminContent.navigation.linkText': 'Link text',
  'adminContent.navigation.save': 'Save',
  'adminContent.navigation.labelHint': 'Changes only what this menu shows.',
  'adminContent.navigation.labelHintWithName':
    'Changes only what this menu shows — leave blank to use “{name}”.',
  'adminContent.navigation.moveUp': 'Move up',
  'adminContent.navigation.moveDown': 'Move down',
  'adminContent.navigation.removeFromHeader': 'Remove {name} from the header menu?',
  'adminContent.navigation.removeFromFooter': 'Remove {name} from the footer menu?',
  'adminContent.navigation.removeUnnamedFromHeader': 'Remove this item from the header menu?',
  'adminContent.navigation.removeUnnamedFromFooter': 'Remove this item from the footer menu?',
  'adminContent.navigation.remove': 'Remove {name}',
  'adminContent.navigation.removeUnnamed': 'Remove item',
  'adminContent.navigation.typeHome': 'Home',
  'adminContent.navigation.typeCatalog': 'Catalog',
  'adminContent.navigation.typePage': 'Page',
  'adminContent.navigation.typeProduct': 'Product',
  'adminContent.navigation.typeCategory': 'Category',
  'adminContent.navigation.targetMissing': 'Target no longer exists',
  'adminContent.navigation.pageDraft': 'Draft — hidden on the storefront',
  'adminContent.navigation.productInactive': 'Inactive — hidden on the storefront',
  'adminContent.navigation.unavailable': 'Unavailable',
  // What unlabelled Home and Catalog items are called on the storefront.
  'adminContent.navigation.singletonHome': 'Home',
  'adminContent.navigation.singletonCatalog': 'Shop',
  // Flash messages from api/admin/navigation.ts.
  'adminContent.navigation.headerFull': 'The header menu is full ({max} items). Remove one first.',
  'adminContent.navigation.footerFull': 'The footer menu is full ({max} items). Remove one first.',
  'adminContent.navigation.duplicateInHeader': '{item} is already in the header menu.',
  'adminContent.navigation.duplicateInFooter': '{item} is already in the footer menu.',
  'adminContent.navigation.targetUnavailable':
    'That page, product, or category is no longer available.',
  'adminContent.navigation.chooseTarget': 'Choose a target first.',
  'adminContent.navigation.reorderMismatch': 'That reorder did not match the menu. Reloading.',
  'adminContent.navigation.unknownAction': 'Unknown action.',
  // Plain-text 400s (a stale tab or a hand-made request).
  'adminContent.navigation.invalidLocation': 'Invalid location',
  'adminContent.navigation.invalidTargetType': 'Invalid target type',
  'adminContent.navigation.invalidId': 'Invalid id',
} satisfies Record<`adminContent.${string}`, Message>;
