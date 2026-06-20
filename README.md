# 🌙 eZakat - Interactive Zakat Calculator

A responsive and user-friendly client-side web application, specifically designed to help Muslims calculate their zakat obligations accurately and transparently.

## 📌 Project Philosophy
This system is developed based on the concept of human-technology symbiosis, where digital conveniences are directly applied to support and streamline the spiritual affairs and religious obligations of modern society.

## ✨ Key Features
* **Comprehensive Calculators:** Automated calculation modules for 4 main asset types (Trade, Income, Gold, and Savings) that comply with the current Nisab logic and mandatory Haul conditions.
* **Language & Terminology Integration:** Applies the use of accurate Arabic terms (such as *Zakat al-Mal* and *Zakat al-Dhahab*) to maintain the authenticity of Shariah knowledge within a technical web system.
* **Accessibility (WCAG Compliance):** Equipped with a Theme Toggle feature specifically to ensure a user-friendly interface for color-blind users in the Deuteranomaly (Red-Green) category.

## 🏆 Application of Shneiderman's Eight Golden Rules
The interface of this system is designed in line with key interaction design principles:
1. **Strive for consistency:** Uniform form layouts, typography, and navigation buttons across all pages.
2. **Offer informative feedback:** A transparent visual feedback receipt system (green/yellow) after every calculation is made.
3. **Permit easy reversal of actions:** Each calculator module is equipped with a "Clear" (Reset) button to make it easier for users to reset input values without having to manually delete them.
4. **Support internal locus of control:** The use of a Sticky Header allows users to navigate the system without feeling lost or needing to scroll far up.

## 💻 Technologies Used
* HTML5 (Semantics & Structure)
* CSS3 (CSS Variables & Responsive Design)
* Vanilla JavaScript (Calculation Logic & DOM Manipulation)
* Flaticon UIcons (Iconography)

## 🧮 Calculation Formulas
All zakat calculations apply a fixed rate of **2.5%** if the asset meets the minimum threshold (Nisab) and the mandatory one-year holding period (Haul).

### 1. Trade Zakat (Zakat al-Tijarah)
* **Net Asset** = Current Assets - Short-Term Liabilities
* **Condition:** If Net Asset >= Current Nisab
* **Formula:** `Total Zakat = Net Asset × 0.025`

### 2. Income Zakat (Zakat al-Mal)
* **Net Income** = Gross Annual Income - Allowable Basic Expenses
* **Condition:** If Net Income >= Current Nisab
* **Formula:** `Total Zakat = Net Income × 0.025`

### 3. Gold Zakat (Zakat al-Dhahab)
* **Standard Nisab:** 85 grams of gold
* **Condition:** If Gold Weight >= 85g (and not for daily wear)
* **Current Value** = Gold Weight (g) × Current Gold Price (RM/g)
* **Formula:** `Total Zakat = Current Value × 0.025`

### 4. Savings Zakat (Zakat al-Madakharat)
* **Condition:** If Lowest Annual Balance >= Current Nisab
* **Formula:** `Total Zakat = Lowest Annual Balance × 0.025
