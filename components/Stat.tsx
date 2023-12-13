import { JSX } from "preact/jsx-runtime";
import IconBuilding from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/building.tsx";
import IconCurrencyEuro from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/currency-euro.tsx";
import IconUserCode from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/user-code.tsx";
import Companies from "../data/companies_sane.json" with { type: "json" };
import { currencyExchangeRate } from "../lib/currency.ts";

const exchangeRate = await currencyExchangeRate("RON");

export function Stat(props: JSX.HTMLAttributes<HTMLElement>) {
  const totalCompanies = Companies.length;
  const turnover = Companies.reduce(
    (acc, company) => acc + company.turnover,
    0,
  );
  const profit = Companies.reduce(
    (acc, company) => acc + company.netProfit,
    0,
  );

  const eurTurnover = Intl.NumberFormat("en-GB", { maximumFractionDigits: 0 })
    .format(turnover / exchangeRate);
  const employeeCount = Companies.reduce(
    (acc, company) => acc + company.employees,
    0,
  );
  const eurProfit = Intl.NumberFormat("en-GB", { maximumFractionDigits: 0 })
    .format(profit / exchangeRate);

  const percentageProfit = Intl.NumberFormat("en-GB", {
    style: "percent",
    maximumFractionDigits: 2,
  }).format(profit / turnover);

  return (
    <section
      {...props}
      class={`${props.class} stats shadow flex max-w-screen-xl p-8`}
    >
      <div class="stat">
        <div class="stat-figure text-secondary">
          <IconBuilding />
        </div>
        <div class="stat-title">Tech companies</div>
        <div class="stat-value">{totalCompanies}</div>
        <div class="stat-desc">By CAEN code</div>
      </div>

      <div class="stat">
        <div class="stat-figure text-secondary">
          <IconCurrencyEuro />
        </div>
        <div class="stat-title">Turnover</div>
        <div class="stat-value">{eurTurnover}</div>
        <div class="stat-desc">{eurProfit} net profit ({percentageProfit})</div>
      </div>

      <div class="stat">
        <div class="stat-figure text-secondary">
          <IconUserCode />
        </div>
        <div class="stat-title">Employees</div>
        <div class="stat-value">{employeeCount}</div>
        <div class="stat-desc">↘︎ 90 (14%)</div>
      </div>
    </section>
  );
}
