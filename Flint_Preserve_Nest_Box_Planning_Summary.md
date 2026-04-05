# Flint Preserve Nest Box Survey: Planning Summary

This document provides a quantitative analysis of the historical nest box survey data (2021–2022) and geographic assets, followed by a proposed architecture for a mobile-first field recording workflow.

## 1. Data Structure and Historical Analysis

An analysis of the 2021 and 2022 Excel workbooks reveals a consistent, visit-based tracking methodology. Each workbook represents a single year, with individual worksheets corresponding to specific survey dates. The data is organized in a strict tabular format, where each row represents a single box's status on a given date.

The trail consists of 45 primary boxes numbered sequentially from 1 to 45, alongside one non-sequential alphanumeric identifier (13A). The data structure captures eight primary fields per visit, detailed in the table below.

| Field | Description | Data Type / Examples |
| :--- | :--- | :--- |
| **Box #** | Unique identifier for the nest box. | Integer (1-45), String (13A) |
| **Species** | Bird or animal species occupying the box. | String (BB, TRES, Wren, Empty) |
| **Nest** | Indicates the presence or status of a nest. | Categorical (Yes, No, Building) |
| **Cup** | Indicates the presence of a nest cup. | Categorical (Y, N, ?, SC) |
| **Eggs** | Quantitative count of eggs present. | Integer |
| **Nestling** | Quantitative count of hatched nestlings. | Integer |
| **Fledged** | Quantitative count of birds that have successfully left the nest. | Integer |
| **Comments/Needs** | Qualitative observations, maintenance needs, or notable events. | String (e.g., "Predation", "Needs Door Nail") |

The historical data captures a variety of species, though nomenclature and spelling vary across the years. The primary species recorded include the Eastern Bluebird (BB), Tree Swallow (TRES, TS, Tres), House Wren (Wren, wren, HW), and Black-capped Chickadee (Chickadee, Chicadee). Instances of invasive species (House Sparrow) and mammals (Mouse) are also noted.

A comparison of the two years highlights significant shifts in both survey frequency and species activity. Monitoring frequency doubled from three survey dates in April–May 2021 to six survey dates in May–June 2022. Concurrently, House Wren activity surged. In 2021, House Wrens were recorded 16 times across all visits. By 2022, Wrens became the most frequently recorded species with 82 total observations, slightly outpacing Bluebirds (70 observations). The dataset also exhibits typical manual entry inconsistencies, including mixed capitalization and the use of non-numeric characters in quantitative fields.

## 2. Geographic and Location Data Analysis

An examination of the provided `FlintPreserve-GoogleEarth.html` file yields specific insights regarding the spatial data architecture. The file contains base viewport coordinates for the Google Earth web interface at Latitude 39.8237289 and Longitude -75.6054801, which precisely aligns with the Kennett Square, PA region.

The HTML file does not contain raw embedded Keyhole Markup Language (KML) code or explicit coordinate pairs for the individual nest boxes. Instead, it functions as a web shortcut that loads a cloud-hosted Google Earth project. The URL contains an encoded data parameter (`1gTY_0gw4RDyx0u1pMhPfjyn5KIKkqJLq`), which acts as a unique identifier to fetch the actual placemark data from Google's servers. Consequently, to integrate map-based features into a new application, the raw KML or KMZ file must be exported directly from the source Google Earth project, as the provided HTML file cannot be parsed for individual box locations.

## 3. Proposed Modern Field Recording Workflow

To replace Microsoft Lists with a highly efficient, mobile-first approach, the proposed workflow leverages natural language processing to eliminate the friction of navigating rigid drop-downs and spreadsheet cells on a mobile device.

The core of the system is a "Walk and Talk" interface. As the user approaches a box, they utilize voice-to-text or brief typing to input a natural sentence into the Manus interface (e.g., "Box 14, bluebird, nest is built, 4 eggs, no wrens"). Manus instantly parses this unstructured input into the standardized database schema, extracting the box ID, species, nest status, and egg count. 

Following data entry, the system provides immediate contextual feedback. Manus replies with a concise confirmation and historical context, such as noting the previous week's egg count and projecting an estimated hatch date. If photographic evidence is required—such as documenting a wren "fort" or a damaged box—the user uploads the image directly into the chat. The system automatically associates the media with the current box record and extracts relevant metadata.

This architecture provides several distinct advantages over the legacy spreadsheet model.

| Advantage | Description |
| :--- | :--- |
| **Data Standardization** | Automatically normalizes species names (e.g., mapping "TS", "TRES", and "tres" to "Tree Swallow"), ensuring clean data for analysis. |
| **Automated Analytics** | Calculates aggregate metrics (total eggs, fledged counts) and projects estimated hatch and fledge dates based on initial egg observations. |
| **Invasive Tracking** | Explicitly tags wren activity and nest takeovers, enabling the generation of targeted reports to manage invasive pressure on primary species. |
| **Structured Export** | Maintains all parsed data in a relational database, allowing for instant, clean exports to CSV or Excel for quantitative review. |
