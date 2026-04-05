# Manus Agent — Project Log
**User:** Bill Kaiser (wkaisercfp@gmail.com)
**Location:** 808 Creek Rd., Kennett Square, PA 19348
**Log started:** March 19, 2026

---

## Purpose of This Log

A plain-language record of everything built, configured, and accomplished using Manus. Serves as a historical reference, a troubleshooting guide, and a document of the journey of learning to use AI tools in practical, everyday life.

---

## Session 1 — March 17–18, 2026

### What We Did

**Google Sheets API Setup**
- Created a Google Cloud project: `manus-agent-490700`
- Created a service account: `manus-sheets-agent@manus-agent-490700.iam.gserviceaccount.com`
- Downloaded the service account JSON key file (stored at `/home/ubuntu/upload/pasted_file_hHOkHe_manus-agent-490700-c6d5da92821c.json`)
- Enabled Google Sheets API and Google Drive API in the project
- This setup allows Manus to read and write Google Sheets on Bill's behalf without needing a password each time

**Tree_Removal Google Sheet**
- Created a professionally formatted Google Sheet to track bids from 8 tree service companies
- Sheet URL: https://docs.google.com/spreadsheets/d/1Li6kBdj9O9nkUBrKqRLszov7u9RsXc0XW9OW9sNUG6k/edit
- Columns: Company Name, Phone, Address, Rating, Email, Priority/Notes, Date Contacted, Initial Call Notes, Follow-Up Date, Follow-Up Notes, Bid columns for 4 tree types (Dead Cherry, White Pines, Dead Ash, Other), Total Bid, Status
- 8 companies loaded: Maple Hill, Tree Huggerz, Red Oak Tree Service, The Tree Guys, AC Tree Experts, R&H Tree Service, Treemendous, Roger Summers Lawn Care
- All companies marked as contacted on 03/18/2026
- Status dropdown options: Pending, Email Sent, Called, Submitted Online, Quote Received, Selected, Awarded, Declined, No Response
- Formatting: dark forest green headers, alternating row banding, color-coded status cells, currency formatting, frozen header row
- Automated bid comparison summary section at the bottom

**Roofing Contractor Research**
- Researched 7 highly rated roofing contractors near Kennett Square, PA
- Saved to file: `/home/ubuntu/roofing_contractors.md`

**HGRAF Stock Research**
- Scraped two Reddit threads about HGRAF (HydroGraph Clean Power) stock
- Files saved: `/home/ubuntu/Emerging_Markets_Presentation_Thread.md` and `/home/ubuntu/HGRAF_Reddit_Thread.md`

**Google Calendar Events Created**
- Andy Kohn 18-month sobriety anniversary reminder: March 15, 2026
- Eastland Friends Meeting moved to: March 22, 2026
- Market volatility reminder: March 15, 2026

**AA Meeting Check-In Schedule**
- Set up a recurring quarterly reminder to send a supportive AA meeting check-in message
- Schedule: March 1, June 1, September 1, December 1 at 9:00 AM each year
- Task ID: `ao0HnFL5d5qRmYEtTor1qL`

**Spring Training Photos**
- Processed and cataloged photos from Florida spring training trip
- Events documented: Lenny's breakfast, Blue Jays game (Thursday), Orioles game (Friday)

---

## Session 2 — March 19, 2026

### What We Did

**Gmail Check for Contractor Responses**
- Searched Gmail (wkaisercfp@gmail.com) for replies from tree service companies
- Found 2 relevant email threads:
  - AC Tree Experts (actreeexpert@gmail.com): confirmed availability today, 11 AM – 2 PM window
  - Joe Starkey (tree.guys44@gmail.com): offered Tuesday March 24, 9–10 AM — subject said "Tree estimate" — confirmed this is tree work, not roofing

**Calendar Events Created (Tree Estimates)**
| Event | Date | Time | Event ID |
|---|---|---|---|
| AC Tree Experts - Tree Removal Estimate | March 19, 2026 | 11:00 AM – 2:00 PM ET | `08ro0nl60557t322g3tj8vlm80` |
| Starkey - Tree Removal Estimate | March 24, 2026 | 9:00 AM – 10:00 AM ET | `hu42p6118juj7dq17kpd3jkcvk` |
| Tree Huggerz - Tree Removal Estimate | March 19, 2026 | 2:00 PM – 4:00 PM ET | `it87g759uj5369316ni37ib6f8` |

- Tree Huggerz added after Joe (owner) called and scheduled his crew for the same afternoon
- All events include 30-minute advance reminders and address: 808 Creek Rd, Kennett Square, PA 19348

**Roger Summers — Call Notes Updated**
- Updated Roger Summers' row on the Tree_Removal sheet with the following note:
  *"Roger will rent a large crane for a half day, position it outside the garage, and use it to take down the dead cherry tree and any white pines reachable from that position. Confident he can get a significant amount of work done in a half day. Discussed the ash trees — agreed to address those separately after the main job is complete."*
- Date Contacted updated to 03/19/2026
- Status changed from Pending to Called

**Roof_Replacement Google Sheet Created**
- User created a blank Google Sheet and shared it with the service account
- Sheet URL: https://docs.google.com/spreadsheets/d/1SsH6F8Ljmh_ff4KDD6pOOCXr0mbO-HmOSVIZlRBCco8/edit
- Same professional formatting as Tree_Removal sheet
- Columns: Company Name, Phone, Address/Website, Rating, Email, Priority/Notes, Date Contacted, Initial Call Notes, Follow-Up Date, Follow-Up Notes, Bid - Roof Replacement, Bid - Additional Work, Total Bid, Status
- 9 contractors loaded (7 local + 2 Amish):

| # | Company | Phone | Type |
|---|---|---|---|
| 1 | G. Fedale Roofing & Siding | (610) 565-9999 | Local |
| 2 | Mighty Dog Roofing (Chadds Ford) | (610) 283-4148 | Local |
| 3 | A.H. Davis & Son, Inc. | (610) 918-1900 | Local |
| 4 | Impriano Roofing & Siding | (302) 766-7477 | Local |
| 5 | Class Roofing | (302) 205-4828 | Local |
| 6 | Certitude Home Improvements | (610) 924-7270 | Local |
| 7 | Jara Construction | (610) 256-6453 | Local |
| 8 | Maple Grove Exteriors | (717) 461-2885 | Amish — Atglen, PA (~10 mi) |
| 9 | Jake's Roofing LLC | (717) 529-1215 | Amish — Quarryville, PA (~15 mi) |

- Summary section at bottom auto-calculates lowest/highest/average bids as data is entered

**Amish Roofer Research**
- Researched Amish and Mennonite roofing contractors in Lancaster/Chester County area
- Found 20 contractors total; 9 top-tier recommendations identified
- Full report saved: `/home/ubuntu/Amish_Roofing_Contractors_Report.md`
- Decision: added only Maple Grove Exteriors and Jake's Roofing to the sheet; remaining names kept in report as backup

**Manus vs. Perplexity Computer Comparison**
- Researched and compared both platforms as of March 2026
- Key finding: Manus acquired by Meta for $2B+ in December 2025
- Manus strengths: browser autonomy, real-time visibility, downloadable outputs, better pricing value
- Perplexity strengths: 19-model orchestration, enterprise compliance (SOC 2), 400+ OAuth connectors
- Full report saved: `/home/ubuntu/manus_vs_perplexity_computer.md`

---

## Key Resources & Reference

### Google Sheets
| Sheet | URL | Purpose |
|---|---|---|
| Tree_Removal | https://docs.google.com/spreadsheets/d/1Li6kBdj9O9nkUBrKqRLszov7u9RsXc0XW9OW9sNUG6k/edit | Track tree removal bids from 8 companies |
| Roof_Replacement | https://docs.google.com/spreadsheets/d/1SsH6F8Ljmh_ff4KDD6pOOCXr0mbO-HmOSVIZlRBCco8/edit | Track roofing bids from 9 contractors |

### Google Cloud / API
- Project: `manus-agent-490700`
- Service account: `manus-sheets-agent@manus-agent-490700.iam.gserviceaccount.com`
- Credentials file: `/home/ubuntu/upload/pasted_file_hHOkHe_manus-agent-490700-c6d5da92821c.json`
- Note: Service account can edit shared sheets but cannot create new sheets (Drive API create permission not granted). Workaround: user creates blank sheet and shares with service account.

### Key Files
| File | Location | Contents |
|---|---|---|
| Project Log | `/home/ubuntu/manus_project_log.md` | This file |
| Amish Roofer Report | `/home/ubuntu/Amish_Roofing_Contractors_Report.md` | 20 Amish/Mennonite roofers near Kennett Square |
| Manus vs Perplexity | `/home/ubuntu/manus_vs_perplexity_computer.md` | Platform comparison report |
| HGRAF Thread 1 | `/home/ubuntu/Emerging_Markets_Presentation_Thread.md` | Reddit r/HGRAF thread |
| HGRAF Thread 2 | `/home/ubuntu/HGRAF_Reddit_Thread.md` | Reddit r/pennystocks HGRAF bull thesis |

---

## Session 2 — Afternoon Update (March 19, 2026)

### Roger Summers — Bid Received via Text
- Cherry tree alone: **$700**
- Half day with crane: **$3,300** (cherry tree + big pine + 1-2 more trees) — working estimate
- Full day with crane: **$6,500**
- Status updated to: Quote Received
- Sheet updated with bid data and crane coordination questions (see below)

### Crane Day Coordination — Key Questions (applies to any crane-based bid)
User has GC experience (built current home in 1994, has rented cranes before). Hard lesson: crane day success depends entirely on everyone being confirmed and committed in advance. Before awarding any crane-based job, get answers to:
1. Who is renting the crane — contractor or owner? Who is the operator?
2. Is the crane operator part of the tree crew or a separate hire?
3. What is the cancellation/delay policy on the crane rental?
4. What is the contingency if weather forces a postponement?
5. How far in advance must the crane be booked, and what confirms it is locked in?

---

---

## BillsMini — Primary Desktop Computer

### Hardware Specs
| Component | Spec |
|---|---|
| Device Name | BillsMini (AI Series) |
| Processor | AMD Ryzen AI 9 HX 370 w/ Radeon 890M (2.00 GHz) |
| Installed RAM | 64.0 GB (61.6 GB usable) |
| Storage | 954 GB total, 204 GB used |
| Graphics Card | AMD Radeon 890M (2 GB) |
| OS | Windows 11 Pro, Version 25H2 |
| OS Build | 26200.8037 |
| System Type | 64-bit, x64-based processor |
| Touch | Touch support with 10 touch points |
| Device ID | 4C9CE40D-C454-4850-840E-DF65472A0062 |

### Why This Machine Matters for AI
- The AMD Ryzen AI 9 HX 370 includes a dedicated **NPU (Neural Processing Unit)** — hardware specifically designed to run AI inference locally without relying on cloud services
- 64 GB RAM provides headroom to run large local language models (most require 8–32 GB)
- Windows 11 Pro with AI Series designation = built for this use case
- This machine can run local LLMs, speech-to-text, image generation, and agentic workflows entirely offline

### Local LLM Roadmap (Step-by-Step)

**Goal:** Run a capable AI assistant locally on BillsMini — reducing cloud credit dependency and building toward a hybrid setup.

**Phase 1 — Install Ollama (the easiest local LLM launcher)**
1. Go to https://ollama.com and download the Windows installer
2. Run the installer — it sets up a local server automatically
3. Open a terminal (Windows PowerShell) and type: `ollama run llama3`
4. That's it — you're talking to a local LLM with no internet required

**Phase 2 — Add a visual interface (LM Studio)**
1. Go to https://lmstudio.ai and download the Windows app
2. Browse and download models from inside the app (no command line needed)
3. Chat with models through a clean interface — good for non-technical use
4. Can run models that leverage the AMD NPU for faster inference

**Phase 3 — Connect local LLM to tools (Open WebUI)**
1. Install Open WebUI on top of Ollama
2. Adds a ChatGPT-like interface with file uploads, web search plugins, and more
3. Can be shared on a local network — usable by others in the house or office

**Phase 4 — Agentic local setup**
1. Connect local LLM to tools like Google Sheets, Calendar, and files
2. Use frameworks like n8n (visual automation) or AutoGen for multi-agent workflows
3. This is the "not needing Manus credits for routine tasks" stage

### Commercial / Teaching Potential
- Setting up local AI for small businesses (law offices, contractors, real estate agents)
- Building Google Sheets trackers with automation for clients
- Teaching non-technical people to use AI tools effectively
- These are real services people pay $500–$2,000+ for

---

---

## Master To-Do Inbox
*Items dropped here as they come up — to be broken into tasks and sub-tasks in a dedicated planning session.*

### Active Projects (in progress)
- **Tree Removal** — estimates rolling in this week (active)
- **Roof Replacement** — sheet built, contractors identified, estimates not yet scheduled

### Queued Projects (not yet started)
- **Taxes** — 3 years of October 15th extensions. Goal: get all data to CPA by April 1st and break the cycle. 2024 return going on extension.
- **1986 Mercedes 560SL Roadster** — needs sprucing up, then sell
- **Flint's Farm Bluebird Trail** — mentioned previously, not yet developed into tasks
- **Local LLM / BillsMini Setup** — install Ollama, build toward local agentic base (roadmap in BillsMini section)
- **Agent Architecture** — Nate Jones model: SQL memory + MCP server + scheduled loop. Build toward reducing Manus credit dependency.

### To Be Added
*(Drop items here as they come to mind — no organization needed)*
- **Wills and Health Directives** — long overdue. Includes will, healthcare directive/living will, power of attorney. Critical for protecting Christa and providing continuity.
- **Sell Household Items (Facebook Marketplace / local)** — develop skill for selling locally. Initial items: compact refrigerator, Honda generator (model TBD), snow blower (non-working — sell for parts). More items likely. Mercedes 560SL is a separate higher-value sale.
- **Gmail Cleanup** — bulk delete old/unneeded emails to free up storage. Manus has direct Gmail access and can do this in a dedicated session with user-defined rules.
- **Photo Organization** — locate, tag, and organize personal photo database. Photos are spread across: OneDrive, Google Photos, BillsMini hard drive, and Bill's laptop. First step: audit what's where and how much. Then consolidate and organize. Google Photos sync from local drives is the recommended path to enable Manus-assisted management.
- **Home Inventory Spreadsheet** — Google Sheet documenting all appliances, mechanical systems, vendors/service contacts, warranties, emergency info. First entry: Frigidaire Combo Oven (Model GCWD2767AFF, Serial VF50670847). Includes geothermal system and all associated vendors.

---

## People & Connections
*Raw notes — to be cleaned up later*

| Name | Where Met | Notes | Date |
|---|---|---|---|
| Ed | Eastland Friends Meeting, Nottingham PA | Drives a Tesla electric truck | Mar 22, 2026 |
| Egon | Eastland Friends Meeting, Nottingham PA | Was reading from Mark at the meeting | Mar 22, 2026 |

---

## Key Contacts
| Name | Relationship | Contact |
|---|---|---|
| Christa Kaiser | Wife | christakaiser1@gmail.com |

---

## Pending / Next Steps

- [ ] Contact roofing contractors to schedule estimates (start with Fedale, Maple Grove, Jake's Roofing)
- [ ] Move service account JSON credentials to a more permanent, secure location
- [ ] Update Tree_Removal sheet as bids come in from estimates (AC Tree Experts ✓, Tree Huggerz pending)

### AC Tree Experts — Estimator Visit (March 20, 2026)
- Estimator: Angel Castro
- Assessed the big pine trees — will NOT use a crane
- Scope: Drop cherry tree + 2 diseased white pines (no crane approach)
- Verbal/unwritten quote: **$2,700 base** (cherry + 2 diseased white pines, no log removal). Optional log removal: +$600. Total with logs: $3,300.
- Earliest availability: **May**
- Note: Base bid of $2,700 is $600 cheaper than Roger's $3,300 half-day crane quote. However, Roger's scope potentially covers more trees (crane reach). Scopes are not apples-to-apples. Angel's availability (May) vs. Roger's TBD also a factor.
- [ ] Await Jonathan Kissel (Tree Huggerz) quote — expected within 1-2 days
- [ ] Confirm company name for Richard's estimate (texted 302-287-6655 — caller ID showed 'First Class [something]') — update sheet row and calendar event once confirmed
- [ ] Richard / First Class Tree estimate — Monday March 23, 8:00 AM (Richard, owner, in attendance) — Calendar Event ID: cbb1o860a2siq5rj2afcub2du4

### Bob's Crane Service (local crane rental option)
- Address: 549 Rosedale Rd, Kennett Square, PA 19348 (~1.9 miles from home)
- Phone: (610) 444-0900
- Website: bobscraneservices.com
- Option: Owner could rent crane directly from Bob's and deliver to tree crew, giving more control over crane day coordination
- [ ] Clarify Roger Summers pricing: is crane price all-in (crane + labor) or crane rental only?

### Tree Huggerz — Estimator Visit (March 19, 2026)
- Joe (owner) called and scheduled the visit
- Jonathan Kissel was the estimator who came out
- Walked the full property with the owner
- Jonathan proactively identified 2 diseased white pines — included in his quote scope
- Discussed dead ash trees — Jonathan has an efficient plan, will bundle ash trees separately
- Quote expected within 1-2 days
- Scope of work: Dead cherry tree, 2 diseased white pines, dead ash trees (bundled separately)
- Note: Most thorough estimator so far — walked full property, identified issues unprompted

### Sheet Update — Scope of Work Column Added
- Added "Scope of Work" column to Tree_Removal sheet so bids can be compared on equal footing
- Key insight: quotes at different prices may reflect different scopes — this column makes that visible
- [ ] Update Roof_Replacement sheet as roofing estimates are scheduled and received
- [ ] Explore more Google Cloud Console capabilities (automation, dashboards, bluebird trail project)
- [ ] Consider voice note integration for adding notes to sheets

---

*Log maintained by Manus Agent. Updated after each session.*
