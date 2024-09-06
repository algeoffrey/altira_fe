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
        








    };
</script>

<section class="py-16 bg-gray-50" id="glossary">
    <div class="mx-auto max-w-6xl px-4">
        <!-- Introductory Paragraph -->
        <p class="text-base font-thin text-gray-700 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at.
        </p>

        <!-- Terms Index-->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {#each Object.keys(terms) as letter}
                <div class="col-span-1">
                    <!-- Letter Header -->
                    <h3 class="text-xl font-semibold mb-4 border-b border-gray-300" id="i{letter}">{letter}</h3>
                    {#each terms[letter] as entry}
                        <!-- Link to Definition -->
                        <a class="block text-gray-900 font-light leading-8 hover:text-blue-600" href="#{entry.term}">
                            {entry.term}
                        </a>
                    {/each}
                </div>
            {/each}
        </div>

        <!-- Terms and Definitions -->
        <div>
            {#each Object.keys(terms) as letter}
                <div class="col-span-1 mb-12">
                    <!-- Letter Header -->
                    <h3 class="text-2xl font-semibold mb-4 border-b border-gray-300">{letter}</h3>
                    <!-- List of Terms and Definitions -->
                    {#each terms[letter] as entry}
                        <div id={entry.term} class="mb-6">
                            <p class="text-gray-900 font-semibold">{entry.term}:</p>
                            <p class="text-gray-600 mb-4">{entry.definition}</p>
                        </div>
                    {/each}
                </div>
            {/each}
        </div>
    </div>
</section>


<!-- 
C: [
    { term: "CAGR", definition: "Compound Annual Growth Rate. The year-over-year growth rate applied to an investment or other aspect of a firm using a base amount." },
    { term: "Call Option", definition: "The right to buy a security at a given price (or range) within a specific time period." },
    { term: "Capital (or Assets) Under Management", definition: " The amount of capital available to a fund-management team for venture investments." },
    { term: "Capital Gains:", definition: "The difference between an asset’s purchase price and selling price, when the selling price is greater. Long-term capital gains (on assets held for a year or longer) are taxed at a lower rate than ordinary income. },
    { term: "Capitalization Table", definition: "Also called a “Cap Table,” this is a table showing the total amount of the various securities issued by a firm. This typically includes the amount of investment obtained from each source and the securities distributed — e.g., common and preferred shares, options, warrants, etc. — and respective capitalization ratios." },
    { term: "", definition: "" },
    { term: "", definition: "" },
    { term: "", definition: "" },
    { term: "", definition: "" },
    { term: "", definition: "" },
    { term: "", definition: "" },
    { term: "", definition: "" },
    { term: "", definition: "" },
    

], -->


