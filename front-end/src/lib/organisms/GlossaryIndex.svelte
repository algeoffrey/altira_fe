<script>
    // Sample data for terms and definitions
    export let terms = {
        A: [
            { term: "Accredited Investor", definition: "Rule 501 of the SEC regulations defines an individual accredited investor as: 'Any natural person whose individual net worth or joint net worth...'" },
            { term: "Accrued Interest", definition: "The interest due on preferred stock or a bond since the last interest payment was made." },
            { term: "Advisory Board", definition: "A group of external advisors to a private equity group or portfolio company..." },
            { term: "Allocation", definition: "The amount of securities assigned to an investor, broker, or underwriter in an offering." },
            { term: "Amortization", definition: "An accounting procedure that gradually reduces the book value of an intangible asset..." }
        ],
        B: [
            { term: "Balance Sheet", definition: "A financial statement that summarizes a company's assets, liabilities, and shareholders' equity..." },
            { term: "Book Value", definition: "The value of an asset according to its balance sheet account balance." },
            { term: "Bond", definition: "A fixed income instrument that represents a loan made by an investor to a borrower..." },
            { term: "Burn Rate", definition: "The rate at which a new company is spending its venture capital to finance overhead before generating positive cash flow from operations." },
            { term: "Business Plan", definition: "A detailed plan outlining the strategy and objectives of a company or a project..." }
        ],
        C: [
            { term: "CAGR", definition: "Compound Annual Growth Rate. The year-over-year growth rate applied to an investment or other aspect of a firm using a base amount." },
            { term: "Call Option", definition: "The right to buy a security at a given price (or range) within a specific time period." },
            { term: "Capital (or Assets) Under Management", definition: "The amount of capital available to a fund-management team for venture investments." },
            { term: "Capital Gains", definition: "The difference between an asset’s purchase price and selling price, when the selling price is greater. Long-term capital gains (on assets held for a year or longer) are taxed at a lower rate than ordinary income." },
            { term: "Capitalization Table", definition: "Also called a “Cap Table,” this is a table showing the total amount of the various securities issued by a firm. This typically includes the amount of investment obtained from each source and the securities distributed — e.g., common and preferred shares, options, warrants, etc. — and respective capitalization ratios." },
            { term: "Capitalize", definition: "To record an outlay as an asset (as opposed to an expense), which is subject to depreciation or amortization." },
            { term: "Carried Interest or 'Carry'", definition: "The portion of any gains realized by the fund to which the fund managers are entitled, generally without having to contribute capital to the fund." },
            { term: "Cash Position", definition: "The amount of cash available to a company at a given point in time." },
            { term: "Clawback", definition: "A clawback obligation represents the general partner’s promise that, over the life of the fund, the managers will not receive a greater share of the fund’s distributions than they bargained for." },
            { term: "Closed-end Fund", definition: "A type of fund that has a fixed number of shares outstanding, which are offered during an initial subscription period, similar to an initial public offering." },
            { term: "Closing", definition: "An investment event occurring after the required legal documents are implemented between the investor and a company and after the capital is transferred in exchange for company ownership or debt obligation." },
            { term: "Co-investment", definition: "The syndication of a private equity financing round or an investment by an individual alongside a private equity fund in a financing round." },
            { term: "Committed Capital", definition: "The total dollar amount of capital pledged to a private equity fund." },
            { term: "Common Stock", definition: "A unit of ownership of a corporation, typically entitled to vote on the selection of directors and other important events and, in some cases, to receive dividends." },
            { term: "Conversion Ratio", definition: "The number of shares of stock into which a convertible security may be converted. The conversion ratio equals the par value of the convertible security divided by the conversion price." },
            { term: "Convertible Security", definition: "A bond, debenture, or preferred stock that is exchangeable for another type of security (usually common stock) at a pre-stated price." },
            { term: "Convertible Note [Debenture]", definition: "Debt instrument that automatically or voluntarily converts to some other security, either debt or equity." },
            { term: "Convertible Preferred Stock", definition: "Preferred stock that may be converted into common stock or another class of preferred stock, either voluntarily or mandatory." },
            { term: "Corporate Charter", definition: "The document prepared when a corporation is formed, which sets forth the objectives and goals of the corporation." },
            { term: "Corporate Resolution", definition: "A document stating that the corporation’s board of directors has authorized a particular individual to act on behalf of the corporation." },
            { term: "Corporate Venturing", definition: "Venture capital provided by in-house investment funds of large corporations to further their own strategic interests." },
            { term: "Corporation", definition: "A legal, taxable entity chartered by a state or the federal government. Ownership of a corporation is held by the stockholders." },
            { term: "Covenant", definition: "A protective clause in an agreement." },
            { term: "Cumulative Preferred Stock", definition: "A stock having a provision that if one or more dividend payments are omitted, the omitted dividends (arrearage) must be paid before dividends may be paid on the company’s common stock." },
            { term: "Cumulative Voting Rights", definition: "When shareholders have the right to pool their votes to concentrate them on an election of one or more directors rather than apply their votes to the election of all directors." }
        ],
        D: [
            { term: "Debenture", definition: "A debt instrument; basically the same as a Promissory Note." },
            { term: "Debt", definition: "Any obligation by one person to pay another. May be a primary (direct) obligation as in a Note, or a secondary (contingent) obligation as in a guaranty." },
            { term: "Debt Instrument", definition: "Any instrument evidencing the obligation of the maker to pay the holder of the debt instrument. Includes Bonds, Debentures, and Notes of all kinds." },
            { term: "Depreciation", definition: "An expense recorded to reduce the value of a long-term tangible asset. Since it is a non-cash expense, it increases free cash flow while decreasing the amount of a company’s reported earnings." },
            { term: "Dilution", definition: "A reduction in the percentage ownership of a given shareholder in a company caused by the issuance of new shares." },
            { term: "Dilution Protection", definition: "Mainly applies to convertible securities. Standard provision whereby the conversion ratio is changed accordingly in the case of a stock dividend or extraordinary distribution to avoid dilution of a convertible bondholder’s potential equity position." },
            { term: "Director", definition: "Person elected by shareholders to serve on the board of directors. The directors appoint the president, vice president and all other operating officers, and decide when dividends should be paid (among other matters)." },
            { term: "Disclosure Document", definition: "A booklet outlining the risk factors associated with an investment." },
            { term: "Diversification", definition: "The process of spreading investments among various types of securities and various companies in different fields." },
            { term: "Dividend", definition: "The payments designated by the Board of Directors to be distributed pro-rata among the shares outstanding." },
            { term: "Due Diligence", definition: "A process undertaken by potential investors — individuals or institutions — to analyze and assess the desirability, value, and potential of an investment opportunity." }
        ],
        E: [
            { term: "Early Stage", definition: "A state of a company that typically has completed its seed stage and has a founding or core senior management team, has proven its concept or completed its beta test, has minimal revenues, and no positive earnings or cash flows." },
            { term: "EBITDA", definition: "Earnings Before Interest, Taxes, Depreciation, and Amortization. A measure of cash flow calculated as: = Revenue - Expenses (excluding tax, interest, depreciation, and amortization)." },
            { term: "Economies of Scale", definition: "Economic principle that, as the volume of production increases, the cost of producing each unit decreases." },
            { term: "Elevator Pitch", definition: "An extremely concise presentation of an entrepreneur’s idea, business model, company solution, marketing strategy, and competition delivered to potential investors." },
            { term: "Employee Stock Option Plan (ESOP)", definition: "A plan established by a company whereby a certain number of shares is reserved for purchase and issuance to key employees." },
            { term: "Employee Stock Ownership Plan", definition: "A trust fund established by a company to purchase stock on behalf of employees. Equity: Ownership in the capital of a Company." },
            { term: "Equity Kicker", definition: "Option for private equity investors to purchase shares at a discount, typically associated with mezzanine financings where a small number of shares or warrants are added to what is primarily a debt financing." },
            { term: "Exit Strategy", definition: "A fund’s intended method for liquidating its holdings while achieving the maximum possible return." }
        ],
        F: [
            { term: "Founders' Shares", definition: "Shares owned by a company’s founders upon its establishment." },
            { term: "Free Cash Flow", definition: "The cash flow of a company available to service the capital structure of the firm. Typically measured as operating cash flow less capital expenditures and tax obligations." },
            { term: "Full Ratchet Antidilution", definition: "The sale of a single share at a price less than the favored investors paid reduces the conversion price of the favored investors’ convertible preferred stock 'to the penny.' For example, from $1.00 to 50 cents, regardless of the number of lower-priced shares sold." },
            { term: "Fully Diluted Earnings Per Share", definition: "Earnings per share expressed as if all outstanding convertible securities and warrants have been exercised." },
            { term: "Fully Diluted Outstanding Shares", definition: "The number of shares representing total company ownership, including common shares and current conversion or exercised value of the preferred shares, options, warrants, and other convertible securities." },
            { term: "Fund Size", definition: "The total amount of capital committed by the investors of a venture capital fund." }
        ],
        G: [
            { term: "General Partner (GP)", definition: "The partner in a limited partnership responsible for all management decisions of the partnership. The GP has a fiduciary responsibility to act for the benefit of the limited partners (LPs) and is fully liable for its actions." },
            { term: "Golden Handcuffs", definition: "This occurs when an employee is required to relinquish unvested stock when terminating his employment contract early." },
            { term: "Golden Parachute", definition: "Employment contract of upper management that provides a large payout upon the occurrence of certain control transactions, such as a certain percentage share purchase by an outside entity or when there is a tender offer for a certain percentage of a company’s shares." }
        ],
        H: [
            { term: "Holding Company", definition: "A corporation that owns the securities of another, in most cases with voting control." },
            { term: "Holding Period", definition: "The amount of time an investor has held an investment. The period begins on the date of purchase and ends on the date of sale, and determines whether a gain or loss is considered short term or long term, for capital-gains-tax purposes." },
            { term: "Hot Issue", definition: "A newly issued stock that is in great public demand. Technically, it is when the secondary market price on the effective date is above the new issue offering price." },
            { term: "Hurdle Rate", definition: "The internal rate of return that a fund must achieve before its general partners or managers may receive an increased interest in the proceeds of the fund." }
        ],
        I: [
            { term: "Initial Public Offering (IPO)", definition: "The sale or distribution of a stock of a portfolio company to the public for the first time. IPOs are often an opportunity for the existing investors to receive significant returns on their original investment." },
            { term: "Institutional Investors", definition: "Organizations that professionally invest, including insurance companies, depository institutions, pension funds, investment companies, mutual funds, and endowment funds." },
            { term: "Investment Letter", definition: "A letter signed by an investor purchasing unregistered long securities under Regulation D, in which the investor attests to the long-term investment nature of the purchase." },
            { term: "IRR", definition: "Internal Rate of Return. A typical measure of how VC Funds measure performance. IRR is technically a discount rate: the rate at which the present value of a series of investments is equal to the present value of the returns on those investments." },
            { term: "Issued Shares", definition: "The amount of common shares that a corporation has sold (issued)." },
            { term: "Issuer", definition: "Refers to the organization issuing or proposing to issue a security." }
        ],
        K: [
            { term: "Key Employees", definition: "Professional management attracted by the founder to run the company. Key employees are typically retained with warrants and ownership of the company." }
        ],
        L: [
            { term: "Later Stage", definition: "A stage of company growth characterized by viable products, a developed market, significant customers, sustained revenue growth, and both profits and positive cash flow from operations. Later-stage companies would generally be candidates for an IPO." },
            { term: "Lead Investor", definition: "Also known as a bell cow investor. Member of a syndicate of private equity investors holding the largest stake, in charge of arranging the financing and most actively involved in the overall project." },
            { term: "Leveraged Buyout (LBO)", definition: "A takeover of a company, using a combination of equity and borrowed funds. The target company's assets act as collateral for the loans used by the acquiring group to take over the company." },
            { term: "Limited Partner (LP)", definition: "An investor in a limited partnership who has no voice in the management of the partnership. LPs have limited liability and usually have priority over GPs upon liquidation of the partnership." },
            { term: "Limited Partnerships", definition: "An organization comprised of a general partner, who manages a fund, and limited partners, who invest money but have limited liability and are not involved with the day-to-day management of the fund." },
            { term: "Liquidation", definition: "1) The process of converting securities into cash. 2) The sale of the assets of a company to one or more acquirers in order to pay off debts." },
            { term: "Liquidity Event", definition: "An event that allows a VC to realize a gain or loss on an investment. The ending of a private equity provider’s involvement in a business venture with a view to realizing an internal return on investment." },
            { term: "Lock-up Period", definition: "The period of time that certain stockholders have agreed to waive their right to sell their shares of a public company. Lockup periods usually last for 180 days from the IPO." }
        ],

        M: [
            { term: "Management Fee", definition: "Compensation for the management of a venture fund’s activities, paid from the fund to the general partner or investment advisor. This compensation generally includes an annual management fee." },
            { term: "Management Team", definition: "The persons who oversee the activities of a venture capital fund." },
            { term: "Market Capitalization", definition: "The total dollar value of all outstanding shares. Computed as shares multiplied by current price per share. Prior to an IPO, market capitalization is arrived at by estimating a company’s future growth and by comparing a company with similar public or private corporations." },
            { term: "Merger", definition: "Combination of two or more corporations in which greater efficiency is supposed to be achieved by the elimination of duplicate plant, equipment, and staff, and the reallocation of capital assets to increase sales and profits in the enlarged company." },
            { term: "Mezzanine Financing", definition: "Refers to the stage of venture financing for a company immediately prior to its IPO. Investors entering in this round have lower risk of loss than those investors who have invested in an earlier round." },
            { term: "Mutual Fund", definition: "A mutual fund, or an open-end fund, sells as many shares as investor demand requires. As money flows in, the fund grows. If money flows out of the fund, the number of the fund’s outstanding shares drops." }
        ],
        N: [
            { term: "Net Asset Value (NAV)", definition: "NAV is calculated by adding the value of all of the investments in the fund and dividing by the number of shares of the fund that are outstanding. NAV calculations are required for all mutual funds (or open-end funds) and closed-end funds." },
            { term: "Net Financing Cost", definition: "Also called the cost of carry, or simply, carry, the difference between the cost of financing the purchase of an asset and the asset’s cash yield." },
            { term: "Net Income", definition: "The net earnings of a corporation after deducting all costs of selling, depreciation, interest expense, and taxes." },
            { term: "Net Present Value", definition: "An approach used in capital budgeting where the present value of cash inflow is subtracted from the present value of cash outflows." },
            { term: "New Issue", definition: "A stock or bond offered to the public for the first time. New issues may be initial public offerings by previously private companies or additional stock or bond issues by companies already public." },
            { term: "Newco", definition: "The typical label for any newly organized company, particularly in the context of a leveraged buyout." },
            { term: "No Shop, No Solicitation Clauses", definition: "A no shop, no solicitation, or exclusivity clause requires the company to negotiate exclusively with the investor and not solicit an investment proposal from anyone else for a set period of time after the term sheet is signed." },
            { term: "Nonaccredited", definition: "An investor not considered accredited for a Regulation D offering." }
        ],
        O: [
            { term: "Offering Documents", definition: "Documents evidencing a private-placement transaction. These include some combination of a purchase agreement, subscription agreement, notes or stock certificates, warrants, registration-rights agreement, stockholder or investment agreement, investor questionnaire, and other documents required by the particular deal." },
            { term: "Open-end Fund", definition: "An open-end fund, or a mutual fund, generally sells as many shares as investor demand requires. As money flows in, the fund grows. If money flows out, the number of the fund's outstanding shares drops." },
            { term: "Option", definition: "A security granting the holder the right to purchase a specified number of a company’s securities at a designated price at some point in the future. Options can be incentive stock options (ISOs), statutory options, or non-qualified stock options (NSOs)." },
            { term: "Option Pool", definition: "The number of shares set aside for future issuance to employees of a private company." },
            { term: "Outstanding Stock", definition: "The amount of common shares of a corporation that are in the hands of investors. It is equal to the amount of issued shares less treasury stock." },
            { term: "Oversubscription", definition: "Occurs when demand for shares exceeds the supply or number of shares offered for sale. As a result, underwriters or investment bankers must allocate the shares among investors." },
            { term: "Oversubscription Privilege", definition: "In a rights issue, this refers to an arrangement by which shareholders are given the right to apply for any shares that are not purchased." }
        ],
        P: [
            { term: "Pari Passu", definition: "At an equal rate or pace, without preference." },
            { term: "Participating Preferred", definition: "A preferred stock in which the holder is entitled to the stated dividend and also to additional dividends on a specified basis upon payment of dividends to the common stockholders." },
            { term: "Participating Preferred Stock", definition: "Preferred stock that has the right to share on a pro-rata basis with any distributions to the common stock upon liquidation, after already receiving the preferred-liquidity preference." },
            { term: "Partnership", definition: "A nontaxable entity in which each partner shares in the profits, losses, and liabilities of the partnership. Each partner is responsible for the taxes on its share of profits and losses." },
            { term: "Partnership Agreement", definition: "The contract that specifies the compensation and conditions governing the relationship between investors (LPs) and the venture capitalists (GPs) for the duration of a private equity fund’s life." },
            { term: "PIK Debt Securities", definition: "(Payment in Kind) PIK debt are bonds that may pay bondholders compensation in a form other than cash." },
            { term: "PIPE", definition: "Private Investment in Public Equity. Private offering followed by a resale registration." },
            { term: "PIV", definition: "Pooled Investment Vehicle. A legal entity that pools various investors' capital and deploys it according to a specific investment strategy." },
            { term: "Placement Agent", definition: "The investment bank, broker, or other person that locates investors to purchase securities from the company in a private offering, in exchange for a commission." },
            { term: "Portfolio Companies", definition: "Companies in which a given fund has invested." },
            { term: "Post-Money Valuation", definition: "The valuation of a company immediately after the most recent round of financing. This value is calculated by multiplying the company's total number of shares by the share price of the latest financing." },
            { term: "Pre-Money Valuation", definition: "The valuation of a company prior to a round of investment. This amount is determined by using various calculation models, such as discounted P/E ratios or multiples of future cash flow." },
            { term: "Preemptive Right", definition: "A shareholder's right to acquire an amount of shares in a future offering at current prices per share paid by new investors." },
            { term: "Preferred Dividend", definition: "A dividend ordinarily accruing on preferred shares payable where declared and superior in right of payment to common dividends." },
            { term: "Preferred Stock", definition: "A class of capital stock that may pay dividends at a specified rate and that has priority over common stock in the payment of dividends and the liquidation of assets." },
            { term: "Private Equity", definition: "Equity securities of companies that have not 'gone public' (are not listed on a public exchange). Private equities are generally illiquid and thought of as a long-term investment." },
            { term: "Private Offering/Private Placement", definition: "Sale of unregistered, restricted securities by the company." },
            { term: "Private Placement Memorandum", definition: "Also known as an Offering Memorandum. A document that outlines the terms of securities to be offered in a private placement." },
            { term: "Private Securities", definition: "Private securities are securities that are not registered and do not trade on an exchange. The price per share is set through negotiation between the buyer and the seller." },
            { term: "Promissory Note", definition: "Debt instrument in which the maker promises to pay the holder according to its terms." },
            { term: "Prospectus", definition: "A formal offer to sell securities that provides an investor with the necessary information to make an informed decision." },
            { term: "Public Company", definition: "A company that has securities that have been sold in a registered offering and traded on a stock exchange or NASDAQ." },
            { term: "Put Option", definition: "The right to sell a security at a given price (or range) within a given time period." }
        ],
        R: [
            { term: "Recapitalization", definition: "The reorganization of a company’s capital structure. A company may seek to save on taxes by replacing preferred stock with bonds to gain interest deductibility. Recapitalization can be an alternative exit strategy for venture capitalists and leveraged-buyout sponsors." },
            { term: "Reconfirmation", definition: "The act a broker/dealer makes with an investor to confirm a transaction." },
            { term: "Redeemable Preferred Stock", definition: "Redeemable preferred stock, also known as exploding preferred, at the holder's option after typically five years, gives the holders leverage to induce the company to arrange a liquidity event." },
            { term: "Registered Offering", definition: "A transaction in which a company sells specified securities to the public under a Registration Statement declared effective by the SEC." },
            { term: "Registration", definition: "The SEC’s review process of all securities intended to be sold to the public. The SEC requires that a registration statement be filed with any public securities offering." },
            { term: "Registration Obligation", definition: "The obligation of a company to register the shares issued to an investor in a private offering for resale to the public through a Registration Statement that has been declared effective by the SEC." },
            { term: "Registration Rights", definition: "The right to require that a company register restricted shares. Demand Registered Rights enable the shareholder to request registration at any time." },
            { term: "Registration Rights Agreement", definition: "Separate agreement in which the investor’s registration rights are evidenced." },
            { term: "Reporting Company", definition: "A company that is registered with the SEC under the Exchange Act." },
            { term: "Resale Registration", definition: "Registration by a company of the investor’s sale of the shares purchased by the investor in a private offering." },
            { term: "Restricted Securities", definition: "Public securities that are not freely tradable due to SEC regulations." },
            { term: "Restricted Shares", definition: "Shares acquired in a private placement considered restricted and not sold in a public offering until appropriate holding periods have expired." },
            { term: "Right of First Refusal", definition: "The right of first refusal gives the holder the right to meet any other offer before the proposed contract is accepted." },
            { term: "Rights Offering", definition: "Issuance of 'rights' to current shareholders allowing them to purchase additional shares at a discount to market price." },
            { term: "Risk", definition: "The chance of loss on an investment due to factors such as inflation, interest rates, default, or political issues." }
        ],
        S: [
            { term: "Seed Funding", definition: "The first round of capital for a start-up business. Seed money usually takes the structure of a loan or an investment in preferred stock or convertible bonds, although sometimes it is common stock." },
            { term: "Seed Stage Financing", definition: "An initial state of a company’s growth characterized by a founding management team, business-plan development, prototype development, and beta testing." },
            { term: "Senior Securities", definition: "Securities that have a preferential claim over common stock on a company’s earnings and in the case of liquidation. Generally, preferred stock and bonds are considered senior securities." },
            { term: "Series A Preferred Stock", definition: "The first round of stock offered during the seed or early-stage round by a portfolio company to the venture investor or fund." },
            { term: "Shell Corporation", definition: "A corporation with no assets and no business. Typically, shell corporations are designed for the purpose of going public and later acquiring existing businesses." },
            { term: "Stock Options", definition: "The right to purchase or sell a stock at a specified price within a stated period. Stock options are often used as a form of employee incentive and compensation." },
            { term: "Strategic Investors", definition: "Corporate or individual investors that add value to investments they make through industry and business synergies or personal ties that assist companies in raising additional capital." },
            { term: "Subscription Agreement", definition: "The application submitted by an investor wishing to join a limited partnership." },
            { term: "Subordinated [Note] [Debt]", definition: "Debt which by its terms has no right to be paid until another debt holder is paid. Also referred to as 'junior' debt." },
            { term: "Syndication", definition: "Underwriters or broker/dealers who sell a security as a group." }
        ],
        T: [
            { term: "Tag-Along Rights / Rights of Co-Sale", definition: "A minority-shareholder protection affording the right to include their shares in any sale of control and at the offered price." },
            { term: "Tender Offer", definition: "An offer to purchase stock made directly to the shareholders. One of the more common ways hostile takeovers are implemented." },
            { term: "Term Sheet", definition: "A summary of the terms the investor is prepared to accept. A non-binding outline of the principal points which the Stock Purchase Agreement and related agreements will cover in detail." },
            { term: "Time Value of Money", definition: "The basic principle that money can earn interest; therefore, something that is worth $1 today will be worth more in the future if invested. Also referred to as future value." }
        ],

        U: [
            { term: "Underwritten Offering", definition: "Registered offering that is sold through a consortium of investment banks assembled by one or more lead investment banks." },
            { term: "Unit Offering", definition: "Private or public offering of securities in groups of more than one security. Most often a share of stock and warrant to purchase some number of shares of stock." }
        ],

        V: [
            { term: "Venture Capital Financing", definition: "An investment in a startup business that is perceived to have excellent growth prospects but does not have access to capital markets." },
            { term: "Voting Right", definition: "The common stockholders’ right to vote their stock in the affairs of the company. Preferred stock usually has the right to vote when preferred dividends are in default for a specified amount of time." }
        ],

        W: [
            { term: "Warrant", definition: "A type of security that entitles the holder to buy a proportionate amount of common stock or preferred stock at a specified price for a period of years." },
            { term: "Write-off", definition: "The act of changing the value of an asset to an expense or a loss. A write-off is used to reduce or eliminate the value of an asset and reduce profits." },
            { term: "Write-up/Write-down", definition: "An upward or downward adjustment of the value of an asset for accounting and reporting purposes. These adjustments are estimates and tend to be subjective, usually based on events affecting the investee company or its securities." }
        ]
    };
</script>

<section class="py-16 bg-gray-50" id="glossary">
    <div class="px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto">
        <!-- Introductory Paragraph -->
        <p class="text-base sm:text-lg font-thin text-gray-700 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at.
        </p>

        <!-- Terms Index -->
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 mb-16">
            {#each Object.keys(terms) as letter}
                <div>
                    <!-- Letter Header -->
                    <h3 class="text-lg sm:text-xl font-semibold mb-4 border-b border-gray-300" id="index{letter}">{letter}</h3>
                    {#each terms[letter] as entry}
                        <!-- Link to Definition -->
                        <a class="block text-gray-900 font-light leading-6 sm:leading-8 hover:text-blue-600" href="#{entry.term}">
                            {entry.term}
                        </a>
                    {/each}
                </div>
            {/each}
        </div>

        <!-- Terms and Definitions -->
        <div>
            {#each Object.keys(terms) as letter}
                <div class="mb-12">
                    <!-- Letter Header -->
                    <h3 class="text-xl sm:text-2xl font-semibold mb-4 border-b border-gray-300">{letter}</h3>
                    <!-- List of Terms and Definitions -->
                    {#each terms[letter] as entry}
                        <div id={entry.term} class="mb-6">
                            <p class="text-gray-900 font-semibold text-base sm:text-lg">{entry.term}:</p>
                            <p class="text-gray-600 text-sm sm:text-base leading-5 sm:leading-7">{entry.definition}</p>
                        </div>
                    {/each}
                </div>
            {/each}
        </div>
    </div>
</section>




