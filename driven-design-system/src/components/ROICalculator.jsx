import React, { useState } from 'react';
import { Icon } from './Icon';
import { Dhs } from './Dhs';

export const ROICalculator = ({ projectPrice }) => {
    const [openCalculator, setOpenCalculator] = useState('mortgage'); // 'mortgage' or 'roi'
    const [showAdvancedModal, setShowAdvancedModal] = useState(false);

    // Mortgage State
    const [downPaymentPercent, setDownPaymentPercent] = useState(20);
    const [loanYears, setLoanYears] = useState(25);
    const [interestRate, setInterestRate] = useState(3.75);

    // ROI State
    const [rentalIncome, setRentalIncome] = useState(120000);
    const [holdingPeriod, setHoldingPeriod] = useState(5);

    // Formulas
    const loanAmount = projectPrice * (1 - downPaymentPercent / 100);
    const r = interestRate / 100 / 12;
    const n = Math.max(1, loanYears * 12);
    const monthlyPayment = r === 0 ? (loanAmount / n) : (loanAmount * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));

    const annualYield = ((rentalIncome / projectPrice) * 100).toFixed(1);
    const totalReturn = Math.round((rentalIncome * holdingPeriod / projectPrice) * 100);

    const numberToWords = (num) => {
        if (num >= 1000000) return `${(num / 1000000).toFixed(1)} Million`;
        if (num >= 1000) return `${Math.round(num / 1000)} Thousand`;
        return num.toString();
    };

    const monthlyPaymentInWords = (num) => {
        return `${numberToWords(num)} Dirhams`;
    };

    return (
        <div>
            <h3 className="text-lg font-bold text-driven-text mb-4">Check the numbers</h3>

            {/* Tab Switcher - Pill Style */}
            <div className="bg-cream-100 p-1 rounded-full flex mb-5">
                {['mortgage', 'roi', 'advanced'].map(tab => (
                    <button
                        key={tab}
                        onClick={() => tab === 'advanced' ? setShowAdvancedModal(true) : setOpenCalculator(tab)}
                        className={`flex-1 py-2 px-3 rounded-full text-sm font-medium transition-all flex items-center justify-center gap-1.5 ${openCalculator === tab && tab !== 'advanced'
                                ? 'bg-white shadow text-driven-text'
                                : 'text-warm-500 hover:text-warm-700'
                            }`}
                    >
                        {tab === 'advanced' && (
                            <svg className="w-3.5 h-3.5 text-accent-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
                            </svg>
                        )}
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                ))}
            </div>

            {openCalculator === 'mortgage' && (
                <div className="space-y-5">
                    {/* Loan Amount */}
                    <div>
                        <label className="text-sm font-medium text-driven-text block mb-3">Loan Amount</label>
                        <div className="flex items-center gap-2 mb-2">
                            <button onClick={() => setDownPaymentPercent(Math.min(50, downPaymentPercent + 5))} className="w-9 h-9 rounded-full border border-warm-300 flex items-center justify-center text-warm-700 hover:border-warm-500 transition-all flex-shrink-0">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>
                            </button>
                            <button onClick={() => setDownPaymentPercent(Math.max(10, downPaymentPercent - 5))} className="w-9 h-9 rounded-full border border-warm-300 flex items-center justify-center text-warm-700 hover:border-warm-500 transition-all flex-shrink-0">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M5 12h14" /></svg>
                            </button>
                            <div className="flex-1 px-4 py-2.5 border border-warm-200 rounded-full text-right font-semibold text-driven-text bg-cream-50">
                                {Math.round(loanAmount).toLocaleString()}
                            </div>
                        </div>
                        <input type="range" min="10" max="50" step="5" value={downPaymentPercent} onChange={(e) => setDownPaymentPercent(Number(e.target.value))} className="w-full accent-warm-800" />
                        <p className="text-xs text-warm-500 text-right mt-1">{numberToWords(Math.round(loanAmount))} Dirhams</p>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-driven-text block mb-3">Duration</label>
                        <div className="flex items-center gap-2 mb-2">
                            <button onClick={() => setLoanYears(Math.min(30, loanYears + 5))} className="w-9 h-9 rounded-full border border-warm-300 flex items-center justify-center text-warm-700 hover:border-warm-500 transition-all flex-shrink-0">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>
                            </button>
                            <button onClick={() => setLoanYears(Math.max(5, loanYears - 5))} className="w-9 h-9 rounded-full border border-warm-300 flex items-center justify-center text-warm-700 hover:border-warm-500 transition-all flex-shrink-0">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M5 12h14" /></svg>
                            </button>
                            <div className="flex-1 px-4 py-2.5 border border-warm-200 rounded-full text-right font-semibold text-driven-text bg-cream-50">
                                {loanYears}
                            </div>
                        </div>
                        <input type="range" min="5" max="30" step="5" value={loanYears} onChange={(e) => setLoanYears(Number(e.target.value))} className="w-full accent-warm-800" />
                        <p className="text-xs text-warm-500 text-right mt-1">{loanYears} years</p>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-driven-text block mb-3">Annual Interest Rate (%)</label>
                        <div className="flex items-center gap-2 mb-2">
                            <button onClick={() => setInterestRate(Math.min(10, parseFloat((interestRate + 0.25).toFixed(2))))} className="w-9 h-9 rounded-full border border-warm-300 flex items-center justify-center text-warm-700 hover:border-warm-500 transition-all flex-shrink-0">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>
                            </button>
                            <button onClick={() => setInterestRate(Math.max(1, parseFloat((interestRate - 0.25).toFixed(2))))} className="w-9 h-9 rounded-full border border-warm-300 flex items-center justify-center text-warm-700 hover:border-warm-500 transition-all flex-shrink-0">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M5 12h14" /></svg>
                            </button>
                            <div className="flex-1 px-4 py-2.5 border border-warm-200 rounded-full text-right font-semibold text-driven-text bg-cream-50">
                                {interestRate}%
                            </div>
                        </div>
                        <input type="range" min="1" max="10" step="0.25" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} className="w-full accent-warm-800" />
                        <p className="text-xs text-warm-500 text-right mt-1">{interestRate} percent</p>
                    </div>
                    <div className="bg-cream-50 rounded-2xl p-4 border border-white/30 shadow-[0_0_0_1px_rgba(255,255,255,0.3),0_1px_8px_rgba(0,0,0,0.06)]">
                        <div className="flex items-center justify-between mb-1">
                            <span className="text-sm text-warm-500">Convert to</span>
                            <div className="flex items-center gap-1 bg-white border border-warm-200 rounded-full px-3 py-1 text-sm font-medium">
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M19 9l-7 7-7-7" /></svg> <Dhs className="text-sm" />
                            </div>
                        </div>
                        <p className="text-3xl font-bold text-driven-text mt-2">
                            <Dhs className="text-2xl text-warm-400 mr-1" />
                            {Math.round(monthlyPayment).toLocaleString()} <span className="text-lg font-medium text-warm-500">/month*</span>
                        </p>
                        <p className="text-xs text-warm-500 mt-1">{monthlyPaymentInWords(Math.round(monthlyPayment))}</p>
                    </div>
                </div>
            )}

            {/* ROI Tab */}
            {openCalculator === 'roi' && (
                <div className="space-y-5">
                    {/* Annual Rent */}
                    <div>
                        <label className="text-sm font-medium text-driven-text block mb-3">Annual Rent (AED)</label>
                        <div className="flex items-center gap-2 mb-2">
                            <button onClick={() => setRentalIncome(Math.min(200000, rentalIncome + 5000))} className="w-9 h-9 rounded-full border border-warm-300 flex items-center justify-center text-warm-700 hover:border-warm-500 transition-all flex-shrink-0">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>
                            </button>
                            <button onClick={() => setRentalIncome(Math.max(80000, rentalIncome - 5000))} className="w-9 h-9 rounded-full border border-warm-300 flex items-center justify-center text-warm-700 hover:border-warm-500 transition-all flex-shrink-0">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M5 12h14" /></svg>
                            </button>
                            <div className="flex-1 px-4 py-2.5 border border-warm-200 rounded-full text-right font-semibold text-driven-text bg-cream-50">
                                {rentalIncome.toLocaleString()}
                            </div>
                        </div>
                        <input type="range" min="80000" max="200000" step="5000" value={rentalIncome} onChange={(e) => setRentalIncome(Number(e.target.value))} className="w-full accent-warm-800" />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-driven-text block mb-3">Holding Period</label>
                        <div className="flex gap-2">
                            {[3, 5, 7, 10].map(y => (
                                <button key={y} onClick={() => setHoldingPeriod(y)} className={`flex-1 py-2.5 rounded-full text-sm font-medium transition-all border ${holdingPeriod === y ? 'bg-driven-text text-white border-driven-text' : 'bg-cream-50 text-warm-600 border-warm-200 hover:border-warm-400'}`}>
                                    {y}y
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="bg-cream-50 rounded-2xl p-4 border border-white/30 shadow-[0_0_0_1px_rgba(255,255,255,0.3),0_1px_8px_rgba(0,0,0,0.06)] space-y-3">
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-warm-600">Annual Yield</span>
                            <span className="text-2xl font-bold text-accent-gold">{annualYield}%</span>
                        </div>
                        <div className="w-full bg-warm-100 rounded-full h-2">
                            <div className="bg-accent-gold h-2 rounded-full" style={{ width: `${Math.min(100, annualYield * 10)}%` }}></div>
                        </div>
                        <div className="flex justify-between items-center pt-1 border-t border-warm-200">
                            <span className="text-sm text-warm-600">{holdingPeriod}-Year Total Return</span>
                            <span className="text-2xl font-bold text-accent-gold">{totalReturn}%</span>
                        </div>
                    </div>
                </div>
            )}

            {/* Advanced Modal */}
            {showAdvancedModal && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setShowAdvancedModal(false)}>
                    {/* ... (Omitted full modal for brevity of component extraction) */}
                    <div className="p-8 bg-white rounded-3xl max-w-md w-full relative" onClick={e => e.stopPropagation()}>
                        <button onClick={() => setShowAdvancedModal(false)} className="absolute top-4 right-4 p-2">✕</button>
                        <h3 className="text-2xl font-bold mb-4">Advanced Tools</h3>
                        <p className="mb-4">Sign up to access premium investment tools.</p>
                        <button className="w-full py-3 bg-black text-white rounded-full font-semibold" onClick={() => setShowAdvancedModal(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};
