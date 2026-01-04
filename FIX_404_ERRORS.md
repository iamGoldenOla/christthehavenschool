# 🚀 FIX 404 ERRORS - MANUAL .htaccess UPLOAD

## Problem
You're getting 404 errors when refreshing pages because **.htaccess is missing from cPanel**.

## Solution (2 Steps)

### Step 1: Upload .htaccess via cPanel File Manager

1. **Go to cPanel**: https://lytehosting.com/cpanel
2. **Login** with your credentials
3. **Open File Manager** (under Files section)
4. **Navigate to**: `public_html/`
5. **Right-click in empty space** → "Create New File"
6. **Name it**: `.htaccess` (exactly, with the dot)
7. **Add this content**:

```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

8. **Save** and close

### Step 2: Verify It Works

1. **Visit your site**: https://christthehavenschool.com
2. **Test a route**: Click on a navigation link (e.g., About, Services)
3. **Refresh the page** (F5) - should NOT get 404 error
4. **Try another route and refresh** - confirm working

---

## Why This Fixes 404 Errors

The `.htaccess` file tells Apache to:
- ✅ Let React handle all routing
- ✅ Redirect all requests to `index.html`
- ✅ Only serve actual files/folders directly

Without it, Apache tries to find a file for each URL and returns 404 when it doesn't exist.

---

## Alternative: FTP Upload

If File Manager is slow, use FTP:

1. **Connect via FTP**: 163.61.188.6:21 (christt2 user)
2. **Navigate to**: public_html/
3. **Create .htaccess file** with content above
4. **Upload it**

---

## Future Deployments

Once the automated workflow works:
- ✅ It will automatically upload `.htaccess` (now in `public/` folder)
- ✅ No more manual steps needed
- ✅ Future pushes = automatic deployment with everything included

---

**Status**: 
- ✅ .htaccess created locally in `public/` folder
- ⏳ Needs manual upload to cPanel public_html/
- ✅ Next automated deployment will include it automatically

