import type { Message } from '../../core';

export const adminProducts = {
  // Product list (src/pages/admin/products/index.astro).
  'adminProducts.list.title': 'Products',
  'adminProducts.list.newProduct': 'New product',
  'adminProducts.list.searchPlaceholder': 'Product name',
  'adminProducts.list.visibility': 'Visibility',
  'adminProducts.list.allProducts': 'All products',
  'adminProducts.list.stock': 'Stock',
  'adminProducts.list.anyStock': 'Any stock',
  // For FilterBar's result count, once it takes a translated label (it now
  // pluralizes `noun` by appending "s").
  'adminProducts.list.matchCount': { one: '{count} product', other: '{count} products' },
  'adminProducts.list.colProduct': 'Product',
  'adminProducts.list.colPrice': 'Price',
  'adminProducts.list.colStock': 'Stock',
  'adminProducts.list.colSold': 'Sold',
  'adminProducts.list.colActive': 'Active',
  'adminProducts.list.colActions': 'Actions',
  'adminProducts.list.yes': 'Yes',
  'adminProducts.list.no': 'No',
  'adminProducts.list.view': 'View',
  'adminProducts.list.edit': 'Edit',
  'adminProducts.list.delete': 'Delete',
  'adminProducts.list.confirmDelete': 'Delete this product?',
  'adminProducts.list.confirmDeleteLinked':
    'This product is linked from your navigation. Deleting it hides that link on the storefront. Continue?',
  'adminProducts.list.noMatches': 'No products match these filters.',
  'adminProducts.list.empty': 'No products yet.',

  // List filters (src/features/products/filter.ts).
  'adminProducts.filter.active': 'Active',
  'adminProducts.filter.hidden': 'Hidden',
  'adminProducts.filter.inStock': 'In stock',
  'adminProducts.filter.lowStock': 'Low stock (≤ {max})',
  'adminProducts.filter.outOfStock': 'Out of stock',

  // New product (src/pages/admin/products/new.astro).
  'adminProducts.new.title': 'New product',
  'adminProducts.new.back': 'Back to products',
  'adminProducts.new.submit': 'Create product',

  // Product form (src/features/products/ProductForm.astro).
  'adminProducts.form.name': 'Name',
  'adminProducts.form.slug': 'Slug',
  'adminProducts.form.slugHint': '(URL — blank to auto-generate from name)',
  'adminProducts.form.slugPlaceholder': 'auto-from-name',
  'adminProducts.form.description': 'Description',
  'adminProducts.form.descriptionHelp':
    'Plain text or Markdown — paragraphs, lists, links, and <code>/images/…</code> media render on the product page.',
  'adminProducts.form.price': 'Price ({currency})',
  'adminProducts.form.stock': 'Stock',
  'adminProducts.form.shipping': 'Shipping',
  'adminProducts.form.requiresShipping': 'Requires shipping',
  'adminProducts.form.requiresShippingHelp':
    'Uncheck for digital goods (ebooks, gift cards). They are excluded from shipment weight and never block checkout for a missing weight.',
  'adminProducts.form.weight': 'Weight ({unit})',
  'adminProducts.form.weightHelpRequired':
    'Packed item weight, excluding the shared packaging allowance set in Shipping. Required: every shipping zone prices by weight, so this product cannot be sold without it.',
  'adminProducts.form.weightHelpOptional':
    'Packed item weight, excluding the shared packaging allowance set in Shipping. Optional while a flat rate is available.',
  'adminProducts.form.digitalDelivery': 'Digital delivery',
  'adminProducts.form.attached': 'Attached: <strong>{name}</strong>',
  'adminProducts.form.attachedWithSize': 'Attached: <strong>{name}</strong> ({size} KB)',
  'adminProducts.form.defaultFileName': 'download',
  'adminProducts.form.replaceFile': 'Replace file',
  'adminProducts.form.attachFile': 'Attach file',
  'adminProducts.form.deliverableHelp':
    'Private download after payment. PDF, ZIP, EPUB, MP3, M4A, or TXT; 25 MB maximum. For a download-only product, uncheck <strong>Requires shipping</strong> above.',
  'adminProducts.form.removeAttachment': 'Remove attachment from future purchases',
  'adminProducts.form.image': 'Image',
  'adminProducts.form.categories': 'Categories',
  'adminProducts.form.active': 'Active (visible in storefront)',
  'adminProducts.form.cancel': 'Cancel',

  // Product form validation (src/features/products/form.ts).
  'adminProducts.validation.nameRequired': 'Name is required.',
  'adminProducts.validation.priceInvalid': 'Price must be a non-negative number.',
  'adminProducts.validation.stockInvalid': 'Stock must be a non-negative whole number.',
  'adminProducts.validation.weightRequired':
    'This product needs a shipping weight: every shipping zone prices by weight, so without one it cannot be purchased.',
  'adminProducts.validation.weightNegative': 'Weight cannot be negative.',
  'adminProducts.validation.weightPrecision': 'Weight has too many decimal places for {unit}.',
  'adminProducts.validation.weightTooHeavy': 'Weight is too heavy for parcel shipping.',
  'adminProducts.validation.weightNotNumber': 'Weight must be a number.',

  // Variant weights (src/features/products/variants.ts).
  'adminProducts.variants.weightNegative': 'Variant {n}: weight cannot be negative.',
  'adminProducts.variants.weightPrecision': 'Variant {n}: weight has too many decimal places for {unit}.',
  'adminProducts.variants.weightTooHeavy': 'Variant {n}: weight is too heavy for parcel shipping.',
  'adminProducts.variants.weightNotNumber': 'Variant {n}: weight must be a number.',

  // Digital deliverables (src/features/products/digitalFile.ts).
  'adminProducts.deliverable.empty': 'Choose a non-empty deliverable file.',
  'adminProducts.deliverable.tooLarge': 'Deliverable files must be 25 MB or smaller.',
  'adminProducts.deliverable.badType': 'Use a PDF, ZIP, EPUB, MP3, M4A, or plain-text file.',

  // Edit product (src/pages/admin/products/[id]/edit.astro).
  'adminProducts.edit.pageTitle': 'Edit {name}',
  'adminProducts.edit.back': 'Back to products',
  'adminProducts.edit.heading': 'Edit product',
  'adminProducts.edit.viewOnStore': 'View on store',
  'adminProducts.edit.save': 'Save changes',
  'adminProducts.edit.images': 'Images',
  'adminProducts.edit.autoSave': 'Changes here save automatically',
  'adminProducts.edit.addImages': 'Add images',
  'adminProducts.edit.chooseFromMedia': 'Choose from Media',
  'adminProducts.edit.moveUp': 'Move up',
  'adminProducts.edit.moveDown': 'Move down',
  'adminProducts.edit.primaryImage': 'Primary image',
  'adminProducts.edit.altPlaceholder': 'Alt text — describe the image',
  'adminProducts.edit.saveAlt': 'Save',
  'adminProducts.edit.saved': 'Saved',
  'adminProducts.edit.makePrimary': 'Make primary',
  'adminProducts.edit.deleteImage': 'Delete',
  'adminProducts.edit.confirmDeleteImage': 'Delete this image?',
  'adminProducts.edit.options': 'Variants & add-ons',
  'adminProducts.edit.optionsHelp':
    'Optional. <strong class="font-medium text-gray-700">Variants</strong> are pickable options with their own price &amp; stock (e.g. Size) — the buyer chooses one, and the variant becomes the inventory unit. <strong class="font-medium text-gray-700">Add-ons</strong> are checkbox extras that add to the line price (e.g. Gift wrap), with no stock of their own. Everything here saves together with the <strong class="font-medium text-gray-700">Save changes</strong> button at the top.',
  'adminProducts.edit.variantGroupLabel': 'Variant group label',
  'adminProducts.edit.variantGroupPlaceholder': 'e.g. Size, Color',
  'adminProducts.edit.variants': 'Variants',
  'adminProducts.edit.choosePhoto': 'Choose variant photo',
  'adminProducts.edit.addPhoto': 'Add photo',
  'adminProducts.edit.useMainPhoto': 'Use the main product photo',
  'adminProducts.edit.mainPhoto': 'Main',
  'adminProducts.edit.imageNumber': 'Image {n}',
  'adminProducts.edit.addGalleryFirst': 'Add gallery images first',
  'adminProducts.edit.label': 'Label',
  'adminProducts.edit.variantPlaceholder': 'e.g. Large',
  'adminProducts.edit.price': 'Price ({currency})',
  'adminProducts.edit.stock': 'Stock',
  'adminProducts.edit.sku': 'SKU',
  'adminProducts.edit.skuPlaceholder': 'optional',
  'adminProducts.edit.weight': 'Weight ({unit})',
  'adminProducts.edit.weightInherits': 'inherits',
  'adminProducts.edit.weightTitle': 'Blank inherits the product weight. Enter 0 for a weightless variant.',
  'adminProducts.edit.remove': 'Remove',
  'adminProducts.edit.addVariant': 'Add variant',
  'adminProducts.edit.addOns': 'Add-ons',
  'adminProducts.edit.addOnPlaceholder': 'e.g. Gift wrap',
  'adminProducts.edit.priceDelta': 'Price delta ({currency})',
  'adminProducts.edit.addAddOn': 'Add add-on',

  // Product API errors (src/pages/api/admin/products/**).
  'adminProducts.api.variantGone': 'One of the variants no longer exists — reload and try again.',
  'adminProducts.api.addOnGone': 'One of the add-ons no longer exists — reload and try again.',
  'adminProducts.api.variantPhotoGone':
    'One of the variant photos no longer exists — reload and try again.',
  'adminProducts.api.chooseImage': 'Choose an image.',
  'adminProducts.api.imageNotFound': 'Image not found.',
  'adminProducts.api.unknownAction': 'Unknown action.',

  // Category list, new, and edit (src/pages/admin/categories/**).
  'adminProducts.categories.title': 'Categories',
  'adminProducts.categories.newCategory': 'New category',
  'adminProducts.categories.colName': 'Name',
  'adminProducts.categories.colSlug': 'Slug',
  'adminProducts.categories.colProducts': 'Products',
  'adminProducts.categories.colActions': 'Actions',
  'adminProducts.categories.edit': 'Edit',
  'adminProducts.categories.delete': 'Delete',
  'adminProducts.categories.confirmDelete': 'Delete this category? Sub-categories move up to its parent.',
  'adminProducts.categories.confirmDeleteLinked':
    'This category is linked from your navigation. Deleting it hides that link on the storefront. Sub-categories move up to its parent. Continue?',
  'adminProducts.categories.empty': 'No categories yet.',
  'adminProducts.categories.newTitle': 'New category',
  'adminProducts.categories.back': 'Back to categories',
  'adminProducts.categories.create': 'Create category',
  'adminProducts.categories.editPageTitle': 'Edit {name}',
  'adminProducts.categories.editHeading': 'Edit category',
  'adminProducts.categories.save': 'Save changes',
  'adminProducts.categories.parentGone': 'That parent category no longer exists.',
  'adminProducts.categories.cycle':
    'A category cannot be moved under itself or one of its sub-categories.',

  // Category form (src/features/categories/CategoryForm.astro, form.ts).
  'adminProducts.categoryForm.name': 'Name',
  'adminProducts.categoryForm.slug': 'Slug',
  'adminProducts.categoryForm.slugHint': '(URL — blank to auto-generate from name)',
  'adminProducts.categoryForm.slugPlaceholder': 'auto-from-name',
  'adminProducts.categoryForm.parent': 'Parent category',
  'adminProducts.categoryForm.noParent': '— none (top level) —',
  'adminProducts.categoryForm.cancel': 'Cancel',
  'adminProducts.categoryForm.nameRequired': 'Name is required.',
  'adminProducts.categoryForm.invalidParent': 'Invalid parent category.',

  // Media library (src/pages/admin/media/index.astro, src/features/media/**).
  'adminProducts.media.title': 'Media',
  'adminProducts.media.summary': {
    one: '{count} file. Deleting here removes the file everywhere — it is refused while anything still uses it.',
    other:
      '{count} files. Deleting here removes the file everywhere — it is refused while anything still uses it.',
  },
  'adminProducts.media.upload': 'Upload',
  'adminProducts.media.uploadHint': 'JPEG, PNG, WebP, or GIF. Max 5 MB each.',
  'adminProducts.media.empty':
    'No files yet. Upload one above, or add a product image — every upload lands here.',
  'adminProducts.media.sizeBytes': '{size} B',
  'adminProducts.media.sizeKilobytes': '{size} KB',
  'adminProducts.media.sizeMegabytes': '{size} MB',
  'adminProducts.media.legacyImage': 'Legacy image',
  'adminProducts.media.unused': 'Unused',
  'adminProducts.media.usedBy': 'Used by {links}',
  'adminProducts.media.copyUrl': 'Copy URL',
  'adminProducts.media.copied': 'Copied',
  'adminProducts.media.delete': 'Delete',
  'adminProducts.media.editProduct': 'Edit {name}',
  'adminProducts.media.editPage': 'Edit the {title} page',
  'adminProducts.media.storeLogo': 'Store logo',
  'adminProducts.media.changeLogo': 'Change the logo in Settings',
  'adminProducts.media.usageProducts': {
    one: '{count} product ({names})',
    other: '{count} products ({names})',
  },
  'adminProducts.media.usagePages': {
    one: '{count} page ({names})',
    other: '{count} pages ({names})',
  },
  'adminProducts.media.usageLogo': 'the store logo',
  'adminProducts.media.usageAnd': '{first} and {second}',
  'adminProducts.media.stillUsed': 'Still used by {usage}. Remove it there first.',
  'adminProducts.media.chooseAtLeastOne': 'Choose at least one image.',
  'adminProducts.media.badType': 'Image must be JPEG, PNG, WebP, or GIF.',
  'adminProducts.media.tooLarge': 'Image must be 5 MB or smaller.',
  'adminProducts.media.alreadyInGallery': 'That image is already in this product’s gallery.',
  'adminProducts.media.notInLibrary': 'That image is no longer in the media library.',

  // Media picker dialog (src/features/media/MediaPicker.astro and its script).
  'adminProducts.picker.trigger': 'Choose from Media',
  'adminProducts.picker.title': 'Choose an image',
  'adminProducts.picker.close': 'Close',
  'adminProducts.picker.upload': 'Upload',
  'adminProducts.picker.loading': 'Loading…',
  'adminProducts.picker.previous': 'Previous',
  'adminProducts.picker.next': 'Next',
  'adminProducts.picker.noImages': 'No images yet.',
  'adminProducts.picker.count': '{from}–{to} of {total}',
  'adminProducts.picker.chooseFileFirst': 'Choose a file first.',
  'adminProducts.picker.uploadFailed': 'Upload failed.',
  'adminProducts.picker.loadFailed': 'Could not load media.',
  'adminProducts.picker.listFailed': 'Media list failed ({status})',

  // Semantic search reindex (src/pages/api/admin/search/reindex.ts).
  'adminProducts.reindex.searchOff': 'Semantic search is off — enable it in Settings first.',
  'adminProducts.reindex.unavailable':
    'Semantic search is unavailable — add the AI and VECTORIZE bindings first.',
  'adminProducts.reindex.done': {
    other: 'Reindexed {count} product(s) into the semantic search index.',
  },
  'adminProducts.reindex.progress': {
    other: 'Reindexed {processed} of {count} products. Continue to process the next batch.',
  },
  'adminProducts.reindex.failed': 'Reindex failed: {error}',
} satisfies Record<`adminProducts.${string}`, Message>;
