// Additional Dubai Features - Part 2
// Add these to the features object in driven-dubai-features-mockup.html

const additionalFeatures = {
    dld: `
        <div>
            <div class="flex items-center justify-between mb-6">
                <div>
                    <h3 class="text-2xl font-bold text-warm-800 mb-2">DLD Market Data Integration</h3>
                    <p class="text-warm-500">Real-time transaction data from Dubai Land Department</p>
                </div>
                <div class="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-lg">
                    <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span class="text-sm font-medium text-green-700">Live Data</span>
                </div>
            </div>

            <!-- Price Trend Chart -->
            <div class="bg-white rounded-xl border border-warm-200 p-6 mb-6">
                <h4 class="font-semibold text-warm-800 mb-4">Price Trends - Last 12 Months</h4>
                <div class="relative h-64 bg-gradient-to-t from-green-50 to-transparent rounded-lg border border-warm-200 flex items-end justify-around p-4">
                    <div class="flex-1 flex flex-col items-center">
                        <div class="bg-accent-gold rounded-t" style="height: 45%; width: 80%;"></div>
                        <span class="text-xs text-warm-500 mt-2">Q1</span>
                    </div>
                    <div class="flex-1 flex flex-col items-center">
                        <div class="bg-accent-gold rounded-t" style="height: 52%; width: 80%;"></div>
                        <span class="text-xs text-warm-500 mt-2">Q2</span>
                    </div>
                    <div class="flex-1 flex flex-col items-center">
                        <div class="bg-accent-gold rounded-t" style="height: 65%; width: 80%;"></div>
                        <span class="text-xs text-warm-500 mt-2">Q3</span>
                    </div>
                    <div class="flex-1 flex flex-col items-center">
                        <div class="bg-gradient-to-t from-accent-gold to-green-500 rounded-t" style="height: 78%; width: 80%;"></div>
                        <span class="text-xs text-warm-500 mt-2">Q4</span>
                    </div>
                </div>
                <div class="mt-4 flex items-center justify-between">
                    <div>
                        <p class="text-xs text-warm-500">Average Price Increase</p>
                        <p class="text-2xl font-bold text-green-600">+12.4%</p>
                    </div>
                    <div class="text-right">
                        <p class="text-xs text-warm-500">Total Transactions (Area)</p>
                        <p class="text-2xl font-bold text-warm-800">1,247</p>
                    </div>
                </div>
            </div>

            <!-- Recent Transactions -->
            <div class="bg-white rounded-xl border border-warm-200 p-6 mb-6">
                <h4 class="font-semibold text-warm-800 mb-4">Recent Verified Transactions (This Building)</h4>
                <div class="space-y-3">
                    <div class="flex items-center justify-between p-4 bg-cream-50 rounded-lg border border-warm-200">
                        <div>
                            <p class="font-medium text-warm-800">2BR, Floor 25 - Similar Unit</p>
                            <p class="text-sm text-warm-500">Transaction Date: Dec 15, 2025</p>
                        </div>
                        <div class="text-right">
                            <p class="text-xl font-bold text-accent-gold">AED 1,920,000</p>
                            <p class="text-xs text-green-600">+3.8% vs. asking</p>
                        </div>
                    </div>
                    <div class="flex items-center justify-between p-4 bg-cream-50 rounded-lg border border-warm-200">
                        <div>
                            <p class="font-medium text-warm-800">2BR, Floor 22 - Same Layout</p>
                            <p class="text-sm text-warm-500">Transaction Date: Dec 8, 2025</p>
                        </div>
                        <div class="text-right">
                            <p class="text-xl font-bold text-accent-gold">AED 1,875,000</p>
                            <p class="text-xs text-green-600">+1.4% vs. asking</p>
                        </div>
                    </div>
                    <div class="flex items-center justify-between p-4 bg-cream-50 rounded-lg border border-warm-200">
                        <div>
                            <p class="font-medium text-warm-800">2BR, Floor 30 - Premium Floor</p>
                            <p class="text-sm text-warm-500">Transaction Date: Nov 28, 2025</p>
                        </div>
                        <div class="text-right">
                            <p class="text-xl font-bold text-accent-gold">AED 2,050,000</p>
                            <p class="text-xs text-green-600">+7.2% vs. asking</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Market Transparency Score -->
            <div class="grid md:grid-cols-3 gap-4">
                <div class="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                    <div class="flex items-center justify-between mb-2">
                        <p class="font-semibold text-warm-800">Fair Pricing</p>
                        <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <p class="text-3xl font-bold text-green-600">97/100</p>
                    <p class="text-xs text-warm-500 mt-1">Based on DLD comparables</p>
                </div>
                <div class="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                    <div class="flex items-center justify-between mb-2">
                        <p class="font-semibold text-warm-800">Market Activity</p>
                        <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                        </svg>
                    </div>
                    <p class="text-3xl font-bold text-blue-600">High</p>
                    <p class="text-xs text-warm-500 mt-1">15 sales in last 30 days</p>
                </div>
                <div class="bg-orange-50 rounded-xl p-6 border-2 border-orange-200">
                    <div class="flex items-center justify-between mb-2">
                        <p class="font-semibold text-warm-800">Demand Index</p>
                        <svg class="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                    </div>
                    <p class="text-3xl font-bold text-orange-600">8.5/10</p>
                    <p class="text-xs text-warm-500 mt-1">Strong buyer interest</p>
                </div>
            </div>
        </div>
    `,

    roi: `
        <div>
            <div class="flex items-center justify-between mb-6">
                <div>
                    <h3 class="text-2xl font-bold text-warm-800 mb-2">ROI Calculator: Short-term vs Long-term</h3>
                    <p class="text-warm-500">Compare yields for Airbnb vs traditional rental</p>
                </div>
            </div>

            <!-- Calculator Tabs -->
            <div class="bg-white rounded-xl border border-warm-200 p-6 mb-6">
                <div class="flex gap-4 mb-6">
                    <button class="flex-1 px-6 py-4 bg-accent-gold text-white rounded-lg font-semibold">
                        <div class="text-2xl mb-2">🏠</div>
                        <div>Short-Term Rental</div>
                        <div class="text-xs opacity-80">(Airbnb / Holiday Homes)</div>
                    </button>
                    <button class="flex-1 px-6 py-4 bg-cream-50 border-2 border-warm-200 rounded-lg font-semibold text-warm-800 hover:border-accent-gold">
                        <div class="text-2xl mb-2">📅</div>
                        <div>Long-Term Rental</div>
                        <div class="text-xs text-warm-500">(Yearly Tenancy)</div>
                    </button>
                </div>

                <!-- Input Sliders -->
                <div class="space-y-6 mb-6">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <label class="text-sm font-medium text-warm-800">Occupancy Rate</label>
                            <span class="text-lg font-bold text-accent-gold">75%</span>
                        </div>
                        <input type="range" min="50" max="100" value="75" class="w-full h-2 bg-cream-100 rounded-lg appearance-none cursor-pointer accent-accent-gold">
                        <div class="flex justify-between text-xs text-warm-500 mt-1">
                            <span>50%</span>
                            <span>100%</span>
                        </div>
                    </div>

                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <label class="text-sm font-medium text-warm-800">Nightly Rate (AED)</label>
                            <span class="text-lg font-bold text-accent-gold">950</span>
                        </div>
                        <input type="range" min="500" max="2000" value="950" class="w-full h-2 bg-cream-100 rounded-lg appearance-none cursor-pointer accent-accent-gold">
                        <div class="flex justify-between text-xs text-warm-500 mt-1">
                            <span>500</span>
                            <span>2,000</span>
                        </div>
                    </div>
                </div>

                <!-- Results Comparison -->
                <div class="grid md:grid-cols-2 gap-6">
                    <div class="bg-gradient-to-br from-accent-gold/10 to-accent-gold/5 rounded-xl p-6 border-2 border-accent-gold/30">
                        <h4 class="font-bold text-warm-800 mb-4 flex items-center gap-2">
                            <svg class="w-5 h-5 text-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"></path>
                            </svg>
                            Short-Term (Airbnb)
                        </h4>
                        <div class="space-y-3">
                            <div>
                                <p class="text-xs text-warm-500">Monthly Income</p>
                                <p class="text-3xl font-bold text-accent-gold">AED 21,375</p>
                            </div>
                            <div>
                                <p class="text-xs text-warm-500">Annual Income</p>
                                <p class="text-xl font-bold text-warm-800">AED 256,500</p>
                            </div>
                            <div>
                                <p class="text-xs text-warm-500">Net Annual Yield</p>
                                <p class="text-2xl font-bold text-green-600">11.2%</p>
                            </div>
                        </div>
                        <div class="mt-4 pt-4 border-t border-warm-200">
                            <p class="text-xs text-warm-600">
                                <strong>Pros:</strong> Higher returns, flexibility<br>
                                <strong>Cons:</strong> Management intensive, variable income
                            </p>
                        </div>
                    </div>

                    <div class="bg-cream-50 rounded-xl p-6 border-2 border-warm-200">
                        <h4 class="font-bold text-warm-800 mb-4 flex items-center gap-2">
                            <svg class="w-5 h-5 text-warm-600" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"></path>
                            </svg>
                            Long-Term (Annual)
                        </h4>
                        <div class="space-y-3">
                            <div>
                                <p class="text-xs text-warm-500">Monthly Income</p>
                                <p class="text-3xl font-bold text-warm-800">AED 12,500</p>
                            </div>
                            <div>
                                <p class="text-xs text-warm-500">Annual Income</p>
                                <p class="text-xl font-bold text-warm-800">AED 150,000</p>
                            </div>
                            <div>
                                <p class="text-xs text-warm-500">Net Annual Yield</p>
                                <p class="text-2xl font-bold text-warm-800">7.8%</p>
                            </div>
                        </div>
                        <div class="mt-4 pt-4 border-t border-warm-200">
                            <p class="text-xs text-warm-600">
                                <strong>Pros:</strong> Stable income, less management<br>
                                <strong>Cons:</strong> Lower returns, tenant dependency
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 5-Year Projection -->
            <div class="bg-white rounded-xl border border-warm-200 p-6">
                <h4 class="font-semibold text-warm-800 mb-4">5-Year Projection Comparison</h4>
                <div class="grid md:grid-cols-3 gap-4">
                    <div class="text-center">
                        <p class="text-xs text-warm-500 mb-2">Short-Term Total</p>
                        <p class="text-3xl font-bold text-accent-gold">AED 1.28M</p>
                    </div>
                    <div class="text-center">
                        <p class="text-xs text-warm-500 mb-2">Long-Term Total</p>
                        <p class="text-3xl font-bold text-warm-800">AED 750K</p>
                    </div>
                    <div class="text-center bg-green-50 rounded-lg p-4">
                        <p class="text-xs text-green-700 mb-2">Advantage</p>
                        <p class="text-3xl font-bold text-green-600">+AED 530K</p>
                    </div>
                </div>
            </div>
        </div>
    `,

    construction: `
        <div>
            <div class="flex items-center justify-between mb-6">
                <div>
                    <h3 class="text-2xl font-bold text-warm-800 mb-2">Construction Milestone Tracker</h3>
                    <p class="text-warm-500">Live photo gallery showing actual build progress</p>
                </div>
                <button class="flex items-center gap-2 px-4 py-2 bg-warm-800 text-white rounded-lg font-medium hover:bg-warm-700">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                    </svg>
                    Subscribe to Updates
                </button>
            </div>

            <!-- Progress Timeline -->
            <div class="bg-white rounded-xl border border-warm-200 p-6 mb-6">
                <div class="flex items-center justify-between mb-6">
                    <div>
                        <p class="text-sm text-warm-500">Overall Completion</p>
                        <p class="text-4xl font-bold text-accent-gold">68%</p>
                    </div>
                    <div class="text-right">
                        <p class="text-sm text-warm-500">Expected Handover</p>
                        <p class="text-2xl font-bold text-warm-800">Q4 2026</p>
                    </div>
                </div>
                <div class="h-4 bg-cream-100 rounded-full overflow-hidden">
                    <div class="h-full bg-gradient-to-r from-accent-gold to-green-500 rounded-full transition-all duration-500" style="width: 68%;"></div>
                </div>
            </div>

            <!-- Photo Gallery Timeline -->
            <div class="space-y-6">
                <!-- Milestone Item -->
                <div class="bg-white rounded-xl border-2 border-green-500 overflow-hidden">
                    <div class="bg-green-50 px-6 py-4 flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 class="font-bold text-warm-800">Structure Complete (68%)</h4>
                                <p class="text-sm text-warm-600">Completed: December 15, 2025</p>
                            </div>
                        </div>
                        <span class="px-4 py-2 bg-green-500 text-white rounded-full text-sm font-bold">COMPLETED</span>
                    </div>
                    <div class="p-6">
                        <div class="grid grid-cols-4 gap-4 mb-4">
                            <div class="relative aspect-video bg-gradient-to-br from-warm-200 to-cream-100 rounded-lg overflow-hidden">
                                <div class="absolute inset-0 flex items-center justify-center">
                                    <span class="text-4xl">🏗️</span>
                                </div>
                            </div>
                            <div class="relative aspect-video bg-gradient-to-br from-warm-200 to-cream-100 rounded-lg overflow-hidden">
                                <div class="absolute inset-0 flex items-center justify-center">
                                    <span class="text-4xl">🏢</span>
                                </div>
                            </div>
                            <div class="relative aspect-video bg-gradient-to-br from-warm-200 to-cream-100 rounded-lg overflow-hidden">
                                <div class="absolute inset-0 flex items-center justify-center">
                                    <span class="text-4xl">🔧</span>
                                </div>
                            </div>
                            <button class="relative aspect-video bg-warm-800 rounded-lg overflow-hidden flex items-center justify-center text-white font-bold hover:bg-warm-700">
                                <div class="text-center">
                                    <p class="text-2xl mb-1">+24</p>
                                    <p class="text-xs">More Photos</p>
                                </div>
                            </button>
                        </div>
                        <p class="text-sm text-warm-600">
                            All main structural work completed including concrete pouring, steel reinforcement, and facade installation. Building has reached full height.
                        </p>
                    </div>
                </div>

                <!-- In Progress Milestone -->
                <div class="bg-white rounded-xl border-2 border-accent-gold overflow-hidden">
                    <div class="bg-accent-gold/10 px-6 py-4 flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 border-4 border-accent-gold rounded-full flex items-center justify-center">
                                <div class="w-3 h-3 bg-accent-gold rounded-full animate-pulse"></div>
                            </div>
                            <div>
                                <h4 class="font-bold text-warm-800">MEP Installation (45%)</h4>
                                <p class="text-sm text-warm-600">In Progress: Started Dec 20, 2025</p>
                            </div>
                        </div>
                        <span class="px-4 py-2 bg-accent-gold text-white rounded-full text-sm font-bold">IN PROGRESS</span>
                    </div>
                    <div class="p-6">
                        <div class="mb-4">
                            <div class="flex items-center justify-between text-sm mb-2">
                                <span class="text-warm-600">Electrical</span>
                                <span class="font-bold text-accent-gold">60%</span>
                            </div>
                            <div class="h-2 bg-cream-100 rounded-full overflow-hidden">
                                <div class="h-full bg-accent-gold rounded-full" style="width: 60%;"></div>
                            </div>
                        </div>
                        <div class="mb-4">
                            <div class="flex items-center justify-between text-sm mb-2">
                                <span class="text-warm-600">Plumbing</span>
                                <span class="font-bold text-accent-gold">45%</span>
                            </div>
                            <div class="h-2 bg-cream-100 rounded-full overflow-hidden">
                                <div class="h-full bg-accent-gold rounded-full" style="width: 45%;"></div>
                            </div>
                        </div>
                        <div class="mb-4">
                            <div class="flex items-center justify-between text-sm mb-2">
                                <span class="text-warm-600">HVAC</span>
                                <span class="font-bold text-accent-gold">30%</span>
                            </div>
                            <div class="h-2 bg-cream-100 rounded-full overflow-hidden">
                                <div class="h-full bg-accent-gold rounded-full" style="width: 30%;"></div>
                            </div>
                        </div>
                        <p class="text-sm text-warm-600">
                            MEP (Mechanical, Electrical, Plumbing) systems installation ongoing. Expected completion by April 2026.
                        </p>
                    </div>
                </div>

                <!-- Upcoming Milestone -->
                <div class="bg-white rounded-xl border-2 border-warm-200 overflow-hidden opacity-60">
                    <div class="bg-cream-50 px-6 py-4 flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 border-2 border-warm-300 rounded-full flex items-center justify-center text-warm-400 font-bold">
                                3
                            </div>
                            <div>
                                <h4 class="font-bold text-warm-800">Interior Finishing</h4>
                                <p class="text-sm text-warm-600">Scheduled: May 2026</p>
                            </div>
                        </div>
                        <span class="px-4 py-2 bg-warm-200 text-warm-600 rounded-full text-sm font-bold">UPCOMING</span>
                    </div>
                </div>
            </div>

            <!-- Download Options -->
            <div class="mt-6 bg-cream-50 rounded-xl p-6 border border-warm-200">
                <h4 class="font-semibold text-warm-800 mb-4">Download Construction Reports</h4>
                <div class="flex gap-3">
                    <button class="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white border-2 border-warm-200 rounded-lg font-medium hover:border-accent-gold">
                        <svg class="w-5 h-5 text-warm-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                        </svg>
                        Progress Report PDF
                    </button>
                    <button class="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white border-2 border-warm-200 rounded-lg font-medium hover:border-accent-gold">
                        <svg class="w-5 h-5 text-warm-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        All Photos (ZIP)
                    </button>
                </div>
            </div>
        </div>
    `,

    // Continue with remaining features...
};

// Instructions to add to main file:
// 1. Copy each feature content from above
// 2. Add to the 'features' object before the closing brace
// 3. Update feature tabs if needed