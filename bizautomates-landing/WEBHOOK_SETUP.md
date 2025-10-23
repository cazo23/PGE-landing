# Webhook Setup Guide

The contact form is now configured to send submissions to a webhook URL. You can use **Make.com**, **n8n**, or any other webhook service.

## What Data is Sent

When a user submits the form, the following JSON is sent to your webhook:

```json
{
  "name": "John Doe",
  "email": "john@company.com",
  "company": "Acme SaaS",
  "mrr": "10-25k",
  "message": "Interested in automating our sales process",
  "timestamp": "2025-10-23T12:00:00.000Z",
  "source": "BizAutomates Landing Page"
}
```

## Setup Instructions

### Option 1: Make.com (Recommended)

1. **Create a new scenario** in Make.com
2. **Add a Webhook module** as the first step:
   - Click "Create a webhook"
   - Copy the webhook URL (looks like: `https://hook.us1.make.com/xxxxx`)
3. **Add actions** (examples):
   - Send email notification
   - Add to Google Sheets
   - Add to CRM (HubSpot, Salesforce, etc.)
   - Send Slack notification
4. **Copy your webhook URL**
5. **Add to your project** (see below)

### Option 2: n8n

1. **Create a new workflow** in n8n
2. **Add a Webhook node**:
   - Set method to POST
   - Set path (e.g., `/bizautomates-leads`)
   - Copy the full webhook URL
3. **Add processing nodes** (examples):
   - Email node
   - Google Sheets node
   - CRM integration
   - Slack notification
4. **Activate the workflow**
5. **Copy your webhook URL**
6. **Add to your project** (see below)

## Adding Webhook URL to Your Project

### For Local Development:

1. Open `.env.local` file in the project root
2. Add your webhook URL:
```bash
NEXT_PUBLIC_WEBHOOK_URL=https://hook.us1.make.com/your-webhook-id
```
3. Restart the dev server:
```bash
npm run dev
```

### For Production (Vercel):

1. Go to your project in Vercel dashboard
2. Navigate to **Settings > Environment Variables**
3. Add a new variable:
   - **Key**: `NEXT_PUBLIC_WEBHOOK_URL`
   - **Value**: Your webhook URL
   - **Environment**: Production (and Preview if needed)
4. Click **Save**
5. Redeploy your site

## Testing Your Webhook

1. **Start your dev server** (with webhook URL configured)
2. **Fill out the contact form** on http://localhost:3001
3. **Submit the form**
4. **Check your Make/n8n** - you should see the submission data

## Example Make.com Workflow

Here's a simple workflow you can set up in Make.com:

```
1. Webhook (Receive data)
   ↓
2. Gmail (Send email to yourself)
   - To: your@email.com
   - Subject: New Lead: {{name}} from {{company}}
   - Body:
     Name: {{name}}
     Email: {{email}}
     Company: {{company}}
     MRR: {{mrr}}
     Message: {{message}}
   ↓
3. Google Sheets (Add row)
   - Spreadsheet: Lead Tracker
   - Sheet: Leads
   - Values: {{name}}, {{email}}, {{company}}, {{mrr}}, {{message}}, {{timestamp}}
```

## Example n8n Workflow

```
1. Webhook
   ↓
2. Send Email
   - To: your@email.com
   - Subject: New BizAutomates Lead
   - Body: Form submission data
   ↓
3. Google Sheets
   - Operation: Append
   - Document: Lead Tracker
   - Data: All form fields
```

## Troubleshooting

### Form submits but webhook doesn't receive data

1. **Check the webhook URL** in `.env.local`:
   - Make sure there are no extra spaces
   - Ensure the URL starts with `https://`
   - Verify the URL is correct in Make/n8n

2. **Check browser console**:
   - Open DevTools (F12)
   - Look for any error messages
   - Check Network tab for failed requests

3. **Test the webhook directly**:
   ```bash
   curl -X POST https://your-webhook-url \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@test.com","company":"Test Co","mrr":"10-25k","message":"Test"}'
   ```

4. **Check CORS** (if using n8n):
   - Make sure your n8n webhook allows requests from your domain
   - Check webhook node settings

### Environment variable not loading

1. **Restart dev server** after changing `.env.local`
2. **Check file name**: Must be `.env.local` exactly
3. **Check variable name**: Must start with `NEXT_PUBLIC_`

### Webhook works locally but not in production

1. **Add environment variable in Vercel**
2. **Redeploy** after adding the variable
3. **Check build logs** in Vercel

## Security Notes

- Your webhook URL should be kept private
- Consider adding authentication to your webhook (Make/n8n support this)
- The `.env.local` file is in `.gitignore` and won't be committed to Git
- Never commit webhook URLs to your repository

## What Happens if No Webhook is Configured?

If `NEXT_PUBLIC_WEBHOOK_URL` is empty or not set:
- The form will still work
- User will see success message
- Data will be logged to browser console only
- No data will be sent anywhere

This allows you to develop without a webhook, but you should set it up before going live.

## Need Help?

- **Make.com docs**: https://www.make.com/en/help/webhooks
- **n8n docs**: https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/
- **Next.js env variables**: https://nextjs.org/docs/basic-features/environment-variables
