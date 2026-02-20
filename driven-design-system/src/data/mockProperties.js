export const mockProjects = [
            {
                id: 1, name: "Emaar Beachfront Vista", developer: "Emaar Properties", developerProjects: 42,
                location: "Dubai Harbour", area: "Palm Jumeirah", price: "د.إ1,850,000", priceNum: 1850000,
                pricePerSqft: "2,150", roi: "8.2%", appreciation: "+12.4%", completion: "Q4 2026",
                handover: "Q4 2026", paymentPlan: "60/40", category: "Waterfront",
                progress: 65, stage: "Structure Complete", beds: 2, baths: 2, sqft: "1,825",
                image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
                reraNo: "RERA-2024-0892", escrowBank: "Emirates NBD", verified: true, trending: true,
                agent: { name: "Khalifa El Omani", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
                has3DTour: true, hasVideo: true,
                milestones: [
                    { name: "Ground Breaking", date: "Jan 2024", completed: true },
                    { name: "Foundation", date: "Apr 2024", completed: true },
                    { name: "Structure 50%", date: "Aug 2024", completed: true },
                    { name: "Structure Complete", date: "Dec 2024", completed: true },
                    { name: "MEP", date: "Apr 2025", completed: false },
                    { name: "Handover", date: "Dec 2026", completed: false }
                ]
            },
            {
                id: 2, name: "Sobha One Tower", developer: "Sobha Realty", developerProjects: 28,
                location: "Sobha Hartland", area: "MBR City", price: "د.إ2,400,000", priceNum: 2400000,
                pricePerSqft: "1,890", roi: "7.8%", appreciation: "+9.2%", completion: "Q2 2027",
                handover: "Q2 2027", paymentPlan: "70/30", category: "Off-Plan",
                progress: 42, stage: "Podium Level", beds: 3, baths: 3, sqft: "2,200",
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
                reraNo: "RERA-2024-1203", escrowBank: "FAB", verified: true, trending: false,
                agent: { name: "Sarah Johnson", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" },
                has3DTour: true, hasVideo: true,
                milestones: [
                    { name: "Ground Breaking", date: "Mar 2024", completed: true },
                    { name: "Foundation", date: "Jul 2024", completed: true },
                    { name: "Podium Level", date: "Nov 2024", completed: true },
                    { name: "Structure 50%", date: "May 2025", completed: false },
                    { name: "Handover", date: "Jun 2027", completed: false }
                ]
            },
            {
                id: 3, name: "DAMAC Lagoons Villa", developer: "DAMAC Properties", developerProjects: 55,
                location: "DAMAC Lagoons", area: "Dubailand", price: "د.إ3,100,000", priceNum: 3100000,
                pricePerSqft: "1,450", roi: "9.1%", appreciation: "+15.8%", completion: "Q1 2026",
                handover: "Q1 2026", paymentPlan: "80/20", category: "Luxury",
                progress: 78, stage: "Finishing", beds: 4, baths: 5, sqft: "3,500",
                image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
                reraNo: "RERA-2023-0456", escrowBank: "Dubai Islamic Bank", verified: true, trending: true,
                agent: { name: "Ahmed Hassan", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" },
                has3DTour: true, hasVideo: true,
                milestones: [
                    { name: "Ground Breaking", date: "Aug 2023", completed: true },
                    { name: "Structure", date: "Jun 2024", completed: true },
                    { name: "MEP", date: "Sep 2024", completed: true },
                    { name: "Finishing", date: "Dec 2024", completed: true },
                    { name: "Handover", date: "Mar 2026", completed: false }
                ]
            },
            {
                id: 4, name: "Creek Views Heights", developer: "Emaar Properties", developerProjects: 42,
                location: "Dubai Creek Harbour", area: "Creek Harbour", price: "د.إ1,850,000", priceNum: 1850000,
                pricePerSqft: "3,200", roi: "6.5%", appreciation: "+8.2%", completion: "Q3 2026",
                handover: "Q3 2026", paymentPlan: "60/40", category: "Off-Plan",
                progress: 55, stage: "Structure", beds: 3, baths: 4, sqft: "1,825",
                image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop",
                reraNo: "RERA-2024-0567", escrowBank: "Emirates NBD", verified: true, trending: false,
                agent: { name: "Khalifa El Omani", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
                has3DTour: true, hasVideo: false,
                milestones: [
                    { name: "Ground Breaking", date: "Feb 2024", completed: true },
                    { name: "Foundation", date: "May 2024", completed: true },
                    { name: "Structure", date: "Oct 2024", completed: true },
                    { name: "MEP", date: "Mar 2025", completed: false },
                    { name: "Handover", date: "Sep 2026", completed: false }
                ]
            },
            {
                id: 5, name: "Marina Skyline Residence", developer: "Select Group", developerProjects: 35,
                location: "Dubai Marina", area: "Marina", price: "د.إ2,250,000", priceNum: 2250000,
                pricePerSqft: "2,400", roi: "7.5%", appreciation: "+10.5%", completion: "Q1 2027",
                handover: "Q1 2027", paymentPlan: "50/50", category: "Waterfront",
                progress: 38, stage: "Foundation", beds: 2, baths: 2, sqft: "1,550",
                image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop",
                reraNo: "RERA-2024-0745", escrowBank: "Mashreq Bank", verified: true, trending: true,
                agent: { name: "Fatima Al Hashmi", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" },
                has3DTour: true, hasVideo: true,
                milestones: [
                    { name: "Ground Breaking", date: "Apr 2024", completed: true },
                    { name: "Foundation", date: "Sep 2024", completed: true },
                    { name: "Structure 50%", date: "Mar 2025", completed: false },
                    { name: "Handover", date: "Mar 2027", completed: false }
                ]
            },
            {
                id: 6, name: "Downtown Edge Apartments", developer: "Meraas", developerProjects: 31,
                location: "Downtown Dubai", area: "Downtown", price: "د.إ3,500,000", priceNum: 3500000,
                pricePerSqft: "2,800", roi: "6.8%", appreciation: "+14.2%", completion: "Q3 2026",
                handover: "Q3 2026", paymentPlan: "40/60", category: "Luxury",
                progress: 72, stage: "MEP Installation", beds: 3, baths: 3, sqft: "2,100",
                image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
                reraNo: "RERA-2023-0921", escrowBank: "ADCB", verified: true, trending: true,
                agent: { name: "Michael Chen", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" },
                has3DTour: true, hasVideo: true,
                milestones: [
                    { name: "Ground Breaking", date: "Jun 2023", completed: true },
                    { name: "Structure", date: "Mar 2024", completed: true },
                    { name: "MEP Installation", date: "Nov 2024", completed: true },
                    { name: "Handover", date: "Sep 2026", completed: false }
                ]
            },
            {
                id: 7, name: "Arabian Ranches Villas", developer: "Emaar Properties", developerProjects: 42,
                location: "Arabian Ranches", area: "Arabian Ranches", price: "د.إ4,200,000", priceNum: 4200000,
                pricePerSqft: "1,350", roi: "8.9%", appreciation: "+16.3%", completion: "Q4 2025",
                handover: "Q4 2025", paymentPlan: "60/40", category: "Luxury",
                progress: 85, stage: "Final Touches", beds: 5, baths: 6, sqft: "4,200",
                image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
                reraNo: "RERA-2023-0334", escrowBank: "Emirates NBD", verified: true, trending: false,
                agent: { name: "Omar Abdullah", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" },
                has3DTour: true, hasVideo: true,
                milestones: [
                    { name: "Ground Breaking", date: "Apr 2023", completed: true },
                    { name: "Structure", date: "Jan 2024", completed: true },
                    { name: "MEP", date: "Aug 2024", completed: true },
                    { name: "Final Touches", date: "Dec 2024", completed: true },
                    { name: "Handover", date: "Dec 2025", completed: false }
                ]
            },
            {
                id: 8, name: "Business Bay Tower", developer: "DAMAC Properties", developerProjects: 55,
                location: "Business Bay", area: "Business Bay", price: "د.إ1,650,000", priceNum: 1650000,
                pricePerSqft: "2,050", roi: "9.3%", appreciation: "+11.7%", completion: "Q2 2026",
                handover: "Q2 2026", paymentPlan: "70/30", category: "Off-Plan",
                progress: 48, stage: "Podium Complete", beds: 1, baths: 2, sqft: "980",
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
                reraNo: "RERA-2024-0456", escrowBank: "Dubai Islamic Bank", verified: true, trending: true,
                agent: { name: "Sarah Johnson", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" },
                has3DTour: true, hasVideo: false,
                milestones: [
                    { name: "Ground Breaking", date: "Jan 2024", completed: true },
                    { name: "Foundation", date: "May 2024", completed: true },
                    { name: "Podium Complete", date: "Oct 2024", completed: true },
                    { name: "Structure 50%", date: "Apr 2025", completed: false },
                    { name: "Handover", date: "Jun 2026", completed: false }
                ]
            },
            {
                id: 9, name: "JBR Beachfront Living", developer: "Nakheel", developerProjects: 38,
                location: "JBR", area: "Jumeirah Beach", price: "د.إ2,950,000", priceNum: 2950000,
                pricePerSqft: "2,600", roi: "7.2%", appreciation: "+9.8%", completion: "Q1 2028",
                handover: "Q1 2028", paymentPlan: "50/50", category: "Waterfront",
                progress: 25, stage: "Planning", beds: 2, baths: 3, sqft: "1,680",
                image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
                reraNo: "RERA-2024-0889", escrowBank: "FAB", verified: true, trending: false,
                agent: { name: "Ahmed Hassan", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" },
                has3DTour: false, hasVideo: true,
                milestones: [
                    { name: "Planning", date: "Nov 2024", completed: true },
                    { name: "Ground Breaking", date: "Mar 2025", completed: false },
                    { name: "Foundation", date: "Aug 2025", completed: false },
                    { name: "Handover", date: "Mar 2028", completed: false }
                ]
            },
            {
                id: 10, name: "Palm Gateway Residence", developer: "Nakheel", developerProjects: 38,
                location: "Palm Jumeirah", area: "Palm Jumeirah", price: "د.إ5,800,000", priceNum: 5800000,
                pricePerSqft: "3,100", roi: "6.2%", appreciation: "+13.5%", completion: "Q4 2027",
                handover: "Q4 2027", paymentPlan: "60/40", category: "Luxury",
                progress: 32, stage: "Foundation", beds: 4, baths: 5, sqft: "3,200",
                image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop",
                reraNo: "RERA-2024-0678", escrowBank: "Emirates NBD", verified: true, trending: true,
                agent: { name: "Khalifa El Omani", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
                has3DTour: true, hasVideo: true,
                milestones: [
                    { name: "Ground Breaking", date: "May 2024", completed: true },
                    { name: "Foundation", date: "Oct 2024", completed: true },
                    { name: "Structure 50%", date: "Jun 2025", completed: false },
                    { name: "Handover", date: "Dec 2027", completed: false }
                ]
            },
            {
                id: 11, name: "Sports City Apartments", developer: "Danube Properties", developerProjects: 22,
                location: "Dubai Sports City", area: "Sports City", price: "د.إ980,000", priceNum: 980000,
                pricePerSqft: "1,550", roi: "10.5%", appreciation: "+7.8%", completion: "Q3 2026",
                handover: "Q3 2026", paymentPlan: "80/20", category: "Off-Plan",
                progress: 58, stage: "Structure 50%", beds: 1, baths: 1, sqft: "750",
                image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
                reraNo: "RERA-2024-0234", escrowBank: "Mashreq Bank", verified: true, trending: false,
                agent: { name: "Priya Sharma", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop" },
                has3DTour: true, hasVideo: false,
                milestones: [
                    { name: "Ground Breaking", date: "Dec 2023", completed: true },
                    { name: "Foundation", date: "Apr 2024", completed: true },
                    { name: "Structure 50%", date: "Sep 2024", completed: true },
                    { name: "MEP", date: "Feb 2025", completed: false },
                    { name: "Handover", date: "Sep 2026", completed: false }
                ]
            },
            {
                id: 12, name: "Silicon Oasis Hub", developer: "Reportage Properties", developerProjects: 18,
                location: "Silicon Oasis", area: "Silicon Oasis", price: "د.إ720,000", priceNum: 720000,
                pricePerSqft: "1,380", roi: "11.2%", appreciation: "+6.5%", completion: "Q2 2026",
                handover: "Q2 2026", paymentPlan: "70/30", category: "Off-Plan",
                progress: 68, stage: "MEP Installation", beds: 1, baths: 1, sqft: "650",
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
                reraNo: "RERA-2023-0998", escrowBank: "ADCB", verified: true, trending: true,
                agent: { name: "John Martinez", image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop" },
                has3DTour: false, hasVideo: true,
                milestones: [
                    { name: "Ground Breaking", date: "Jul 2023", completed: true },
                    { name: "Structure", date: "Mar 2024", completed: true },
                    { name: "MEP Installation", date: "Oct 2024", completed: true },
                    { name: "Handover", date: "Jun 2026", completed: false }
                ]
            },
            {
                id: 13, name: "MBR City Villas", developer: "Sobha Realty", developerProjects: 28,
                location: "MBR City", area: "MBR City", price: "د.إ3,850,000", priceNum: 3850000,
                pricePerSqft: "1,620", roi: "8.4%", appreciation: "+14.9%", completion: "Q1 2027",
                progress: 45, stage: "Foundation Complete", beds: 4, baths: 5, sqft: "3,800",
                image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
                reraNo: "RERA-2024-0445", escrowBank: "FAB", verified: true, trending: true,
                agent: { name: "Sarah Johnson", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" },
                has3DTour: true, hasVideo: true,
                milestones: [
                    { name: "Ground Breaking", date: "Feb 2024", completed: true },
                    { name: "Foundation Complete", date: "Aug 2024", completed: true },
                    { name: "Structure 50%", date: "Mar 2025", completed: false },
                    { name: "Handover", date: "Mar 2027", completed: false }
                ]
            },
            {
                id: 14, name: "Al Barsha Heights Tower", developer: "Azizi Developments", developerProjects: 48,
                location: "Al Barsha", area: "Al Barsha", price: "د.إ1,450,000", priceNum: 1450000,
                pricePerSqft: "1,950", roi: "8.8%", appreciation: "+10.2%", completion: "Q4 2026",
                progress: 52, stage: "Structure 50%", beds: 2, baths: 2, sqft: "1,250",
                image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
                reraNo: "RERA-2024-0556", escrowBank: "Dubai Islamic Bank", verified: true, trending: false,
                agent: { name: "Fatima Al Hashmi", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" },
                has3DTour: true, hasVideo: true,
                milestones: [
                    { name: "Ground Breaking", date: "Jan 2024", completed: true },
                    { name: "Foundation", date: "Jun 2024", completed: true },
                    { name: "Structure 50%", date: "Nov 2024", completed: true },
                    { name: "MEP", date: "May 2025", completed: false },
                    { name: "Handover", date: "Dec 2026", completed: false }
                ]
            },
            {
                id: 15, name: "Jumeirah Village Circle", developer: "Nakheel", developerProjects: 38,
                location: "JVC", area: "JVC", price: "د.إ1,180,000", priceNum: 1180000,
                pricePerSqft: "1,680", roi: "9.6%", appreciation: "+8.9%", completion: "Q3 2026",
                progress: 61, stage: "Structure Complete", beds: 2, baths: 2, sqft: "1,100",
                image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop",
                reraNo: "RERA-2024-0223", escrowBank: "Emirates NBD", verified: true, trending: true,
                agent: { name: "Omar Abdullah", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" },
                has3DTour: true, hasVideo: false,
                milestones: [
                    { name: "Ground Breaking", date: "Nov 2023", completed: true },
                    { name: "Foundation", date: "Apr 2024", completed: true },
                    { name: "Structure Complete", date: "Sep 2024", completed: true },
                    { name: "MEP", date: "Mar 2025", completed: false },
                    { name: "Handover", date: "Sep 2026", completed: false }
                ]
            },
            {
                id: 16, name: "City Walk Residences", developer: "Meraas", developerProjects: 31,
                location: "City Walk", area: "Al Wasl", price: "د.إ4,500,000", priceNum: 4500000,
                pricePerSqft: "2,950", roi: "6.9%", appreciation: "+12.8%", completion: "Q2 2027",
                progress: 35, stage: "Foundation", beds: 3, baths: 4, sqft: "2,450",
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
                reraNo: "RERA-2024-0778", escrowBank: "Mashreq Bank", verified: true, trending: true,
                agent: { name: "Michael Chen", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" },
                has3DTour: true, hasVideo: true,
                milestones: [
                    { name: "Ground Breaking", date: "Jun 2024", completed: true },
                    { name: "Foundation", date: "Nov 2024", completed: true },
                    { name: "Structure 50%", date: "Jul 2025", completed: false },
                    { name: "Handover", date: "Jun 2027", completed: false }
                ]
            },
            {
                id: 17, name: "Discovery Gardens Block", developer: "Nakheel", developerProjects: 38,
                location: "Discovery Gardens", area: "Discovery Gardens", price: "د.إ850,000", priceNum: 850000,
                pricePerSqft: "1,480", roi: "10.8%", appreciation: "+7.2%", completion: "Q1 2026",
                progress: 75, stage: "Finishing", beds: 1, baths: 1, sqft: "720",
                image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
                reraNo: "RERA-2023-0667", escrowBank: "ADCB", verified: true, trending: false,
                agent: { name: "Priya Sharma", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop" },
                has3DTour: false, hasVideo: true,
                milestones: [
                    { name: "Ground Breaking", date: "May 2023", completed: true },
                    { name: "Structure", date: "Jan 2024", completed: true },
                    { name: "MEP", date: "Jul 2024", completed: true },
                    { name: "Finishing", date: "Nov 2024", completed: true },
                    { name: "Handover", date: "Mar 2026", completed: false }
                ]
            },
            {
                id: 18, name: "Motor City Parkview", developer: "Union Properties", developerProjects: 15,
                location: "Motor City", area: "Motor City", price: "د.إ1,350,000", priceNum: 1350000,
                pricePerSqft: "1,720", roi: "9.4%", appreciation: "+9.5%", completion: "Q4 2026",
                progress: 50, stage: "Podium Level", beds: 2, baths: 2, sqft: "1,180",
                image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop",
                reraNo: "RERA-2024-0334", escrowBank: "FAB", verified: true, trending: true,
                agent: { name: "Ahmed Hassan", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" },
                has3DTour: true, hasVideo: true,
                milestones: [
                    { name: "Ground Breaking", date: "Feb 2024", completed: true },
                    { name: "Foundation", date: "Jul 2024", completed: true },
                    { name: "Podium Level", date: "Oct 2024", completed: true },
                    { name: "Structure 50%", date: "Apr 2025", completed: false },
                    { name: "Handover", date: "Dec 2026", completed: false }
                ]
            },
            {
                id: 19, name: "International City Gateway", developer: "Nakheel", developerProjects: 38,
                location: "International City", area: "International City", price: "د.إ620,000", priceNum: 620000,
                pricePerSqft: "1,320", roi: "12.1%", appreciation: "+5.8%", completion: "Q2 2026",
                progress: 70, stage: "MEP Complete", beds: 1, baths: 1, sqft: "580",
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
                reraNo: "RERA-2023-0889", escrowBank: "Dubai Islamic Bank", verified: true, trending: false,
                agent: { name: "John Martinez", image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop" },
                has3DTour: true, hasVideo: false,
                milestones: [
                    { name: "Ground Breaking", date: "Jun 2023", completed: true },
                    { name: "Structure", date: "Feb 2024", completed: true },
                    { name: "MEP Complete", date: "Sep 2024", completed: true },
                    { name: "Handover", date: "Jun 2026", completed: false }
                ]
            },
            {
                id: 20, name: "Green Community Villas", developer: "Union Properties", developerProjects: 15,
                location: "Green Community", area: "DIP", price: "د.إ2,680,000", priceNum: 2680000,
                pricePerSqft: "1,520", roi: "8.6%", appreciation: "+11.4%", completion: "Q3 2026",
                progress: 64, stage: "Structure Complete", beds: 3, baths: 4, sqft: "2,850",
                image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
                reraNo: "RERA-2024-0112", escrowBank: "Emirates NBD", verified: true, trending: true,
                agent: { name: "Khalifa El Omani", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
                has3DTour: true, hasVideo: true,
                milestones: [
                    { name: "Ground Breaking", date: "Dec 2023", completed: true },
                    { name: "Foundation", date: "May 2024", completed: true },
                    { name: "Structure Complete", date: "Oct 2024", completed: true },
                    { name: "MEP", date: "Apr 2025", completed: false },
                    { name: "Handover", date: "Sep 2026", completed: false }
                ]
            },
            {
                id: 21, name: "Mirdif Hills Apartments", developer: "Dubai Properties", developerProjects: 26,
                location: "Mirdif", area: "Mirdif", price: "د.إ1,550,000", priceNum: 1550000,
                pricePerSqft: "1,850", roi: "8.1%", appreciation: "+10.8%", completion: "Q1 2027",
                progress: 40, stage: "Foundation", beds: 2, baths: 2, sqft: "1,350",
                image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
                reraNo: "RERA-2024-0445", escrowBank: "Mashreq Bank", verified: true, trending: false,
                agent: { name: "Sarah Johnson", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" },
                has3DTour: true, hasVideo: true,
                milestones: [
                    { name: "Ground Breaking", date: "Mar 2024", completed: true },
                    { name: "Foundation", date: "Sep 2024", completed: true },
                    { name: "Structure 50%", date: "May 2025", completed: false },
                    { name: "Handover", date: "Mar 2027", completed: false }
                ]
            },
            {
                id: 22, name: "The Hills Estate", developer: "Emaar Properties", developerProjects: 42,
                location: "The Hills", area: "Emirates Hills", price: "د.إ8,900,000", priceNum: 8900000,
                pricePerSqft: "2,150", roi: "5.8%", appreciation: "+17.5%", completion: "Q4 2026",
                progress: 55, stage: "Structure 50%", beds: 6, baths: 7, sqft: "6,200",
                image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
                reraNo: "RERA-2024-0001", escrowBank: "Emirates NBD", verified: true, trending: true,
                agent: { name: "Omar Abdullah", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" },
                has3DTour: true, hasVideo: true,
                milestones: [
                    { name: "Ground Breaking", date: "Jan 2024", completed: true },
                    { name: "Foundation", date: "Jun 2024", completed: true },
                    { name: "Structure 50%", date: "Nov 2024", completed: true },
                    { name: "MEP", date: "Jun 2025", completed: false },
                    { name: "Handover", date: "Dec 2026", completed: false }
                ]
            },
            {
                id: 23, name: "Al Furjan Gardens", developer: "Nakheel", developerProjects: 38,
                location: "Al Furjan", area: "Al Furjan", price: "د.إ1,920,000", priceNum: 1920000,
                pricePerSqft: "1,620", roi: "8.7%", appreciation: "+9.6%", completion: "Q2 2026",
                progress: 68, stage: "MEP Installation", beds: 3, baths: 3, sqft: "1,950",
                image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop",
                reraNo: "RERA-2023-0778", escrowBank: "ADCB", verified: true, trending: false,
                agent: { name: "Fatima Al Hashmi", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" },
                has3DTour: true, hasVideo: true,
                milestones: [
                    { name: "Ground Breaking", date: "Aug 2023", completed: true },
                    { name: "Structure", date: "Apr 2024", completed: true },
                    { name: "MEP Installation", date: "Oct 2024", completed: true },
                    { name: "Handover", date: "Jun 2026", completed: false }
                ]
            },
            {
                id: 24, name: "Bluewaters Island View", developer: "Meraas", developerProjects: 31,
                location: "Bluewaters Island", area: "Bluewaters", price: "د.إ3,200,000", priceNum: 3200000,
                pricePerSqft: "2,700", roi: "7.3%", appreciation: "+13.2%", completion: "Q3 2027",
                progress: 28, stage: "Planning Complete", beds: 2, baths: 3, sqft: "1,780",
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
                reraNo: "RERA-2024-0890", escrowBank: "FAB", verified: true, trending: true,
                agent: { name: "Michael Chen", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" },
                has3DTour: false, hasVideo: true,
                milestones: [
                    { name: "Planning Complete", date: "Oct 2024", completed: true },
                    { name: "Ground Breaking", date: "Feb 2025", completed: false },
                    { name: "Foundation", date: "Jul 2025", completed: false },
                    { name: "Handover", date: "Sep 2027", completed: false }
                ]
            },
            {
                id: 25, name: "Dubai South Apartments", developer: "MAG", developerProjects: 33,
                location: "Dubai South", area: "Dubai South", price: "د.إ780,000", priceNum: 780000,
                pricePerSqft: "1,420", roi: "11.5%", appreciation: "+6.9%", completion: "Q1 2026",
                progress: 78, stage: "Finishing", beds: 1, baths: 1, sqft: "680",
                image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
                reraNo: "RERA-2023-0445", escrowBank: "Dubai Islamic Bank", verified: true, trending: false,
                agent: { name: "Priya Sharma", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop" },
                has3DTour: true, hasVideo: false,
                milestones: [
                    { name: "Ground Breaking", date: "Apr 2023", completed: true },
                    { name: "Structure", date: "Dec 2023", completed: true },
                    { name: "MEP", date: "Jul 2024", completed: true },
                    { name: "Finishing", date: "Nov 2024", completed: true },
                    { name: "Handover", date: "Mar 2026", completed: false }
                ]
            },
            {
                id: 26, name: "Town Square Living", developer: "Nshama", developerProjects: 19,
                location: "Town Square", area: "Town Square", price: "د.إ1,280,000", priceNum: 1280000,
                pricePerSqft: "1,690", roi: "9.2%", appreciation: "+8.7%", completion: "Q4 2026",
                progress: 56, stage: "Structure 50%", beds: 2, baths: 2, sqft: "1,150",
                image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop",
                reraNo: "RERA-2024-0223", escrowBank: "Mashreq Bank", verified: true, trending: true,
                agent: { name: "Ahmed Hassan", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" },
                has3DTour: true, hasVideo: true,
                milestones: [
                    { name: "Ground Breaking", date: "Nov 2023", completed: true },
                    { name: "Foundation", date: "May 2024", completed: true },
                    { name: "Structure 50%", date: "Sep 2024", completed: true },
                    { name: "MEP", date: "Apr 2025", completed: false },
                    { name: "Handover", date: "Dec 2026", completed: false }
                ]
            },
            {
                id: 27, name: "Expo Valley Heights", developer: "DP World", developerProjects: 12,
                location: "Expo City", area: "Expo City", price: "د.إ1,450,000", priceNum: 1450000,
                pricePerSqft: "1,780", roi: "9.8%", appreciation: "+10.3%", completion: "Q2 2027",
                progress: 42, stage: "Foundation Complete", beds: 2, baths: 2, sqft: "1,280",
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
                reraNo: "RERA-2024-0556", escrowBank: "Emirates NBD", verified: true, trending: true,
                agent: { name: "John Martinez", image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop" },
                has3DTour: true, hasVideo: true,
                milestones: [
                    { name: "Ground Breaking", date: "Apr 2024", completed: true },
                    { name: "Foundation Complete", date: "Sep 2024", completed: true },
                    { name: "Structure 50%", date: "Mar 2025", completed: false },
                    { name: "Handover", date: "Jun 2027", completed: false }
                ]
            },
            {
                id: 28, name: "Liwan Residences", developer: "Mazaya", developerProjects: 24,
                location: "Queue Point", area: "Liwan", price: "د.إ950,000", priceNum: 950000,
                pricePerSqft: "1,480", roi: "10.2%", appreciation: "+7.5%", completion: "Q3 2026",
                progress: 62, stage: "Structure Complete", beds: 1, baths: 2, sqft: "820",
                image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
                reraNo: "RERA-2024-0334", escrowBank: "ADCB", verified: true, trending: false,
                agent: { name: "Sarah Johnson", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" },
                has3DTour: true, hasVideo: false,
                milestones: [
                    { name: "Ground Breaking", date: "Oct 2023", completed: true },
                    { name: "Foundation", date: "Mar 2024", completed: true },
                    { name: "Structure Complete", date: "Aug 2024", completed: true },
                    { name: "MEP", date: "Feb 2025", completed: false },
                    { name: "Handover", date: "Sep 2026", completed: false }
                ]
            },
            {
                id: 29, name: "Dubai Hills Vista", developer: "Emaar Properties", developerProjects: 42,
                location: "Dubai Hills Estate", area: "Dubai Hills", price: "د.إ2,850,000", priceNum: 2850000,
                pricePerSqft: "2,180", roi: "7.6%", appreciation: "+12.5%", completion: "Q1 2027",
                progress: 48, stage: "Podium Level", beds: 3, baths: 3, sqft: "2,050",
                image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
                reraNo: "RERA-2024-0667", escrowBank: "FAB", verified: true, trending: true,
                agent: { name: "Khalifa El Omani", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
                has3DTour: true, hasVideo: true,
                milestones: [
                    { name: "Ground Breaking", date: "Feb 2024", completed: true },
                    { name: "Foundation", date: "Jul 2024", completed: true },
                    { name: "Podium Level", date: "Nov 2024", completed: true },
                    { name: "Structure 50%", date: "May 2025", completed: false },
                    { name: "Handover", date: "Mar 2027", completed: false }
                ]
            },
            {
                id: 30, name: "Arjan Cityscape", developer: "DAMAC Properties", developerProjects: 55,
                location: "Arjan", area: "Arjan", price: "د.إ1,120,000", priceNum: 1120000,
                pricePerSqft: "1,650", roi: "9.5%", appreciation: "+8.4%", completion: "Q4 2026",
                progress: 58, stage: "Structure 50%", beds: 1, baths: 2, sqft: "890",
                image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop",
                reraNo: "RERA-2024-0189", escrowBank: "Dubai Islamic Bank", verified: true, trending: false,
                agent: { name: "Omar Abdullah", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" },
                has3DTour: true, hasVideo: true,
                milestones: [
                    { name: "Ground Breaking", date: "Dec 2023", completed: true },
                    { name: "Foundation", date: "May 2024", completed: true },
                    { name: "Structure 50%", date: "Sep 2024", completed: true },
                    { name: "MEP", date: "Mar 2025", completed: false },
                    { name: "Handover", date: "Dec 2026", completed: false }
                ]
            },
            {
                id: 31, name: "Dubai Marina Heights", developer: "Select Group", developerProjects: 35,
                location: "Dubai Marina", area: "Marina", price: "د.إ3,680,000", priceNum: 3680000,
                pricePerSqft: "2,850", roi: "6.9%", appreciation: "+11.8%", completion: "Q2 2028",
                progress: 22, stage: "Planning", beds: 3, baths: 4, sqft: "2,280",
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
                reraNo: "RERA-2024-0912", escrowBank: "Mashreq Bank", verified: true, trending: true,
                agent: { name: "Fatima Al Hashmi", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" },
                has3DTour: false, hasVideo: true,
                milestones: [
                    { name: "Planning", date: "Dec 2024", completed: true },
                    { name: "Ground Breaking", date: "Apr 2025", completed: false },
                    { name: "Foundation", date: "Sep 2025", completed: false },
                    { name: "Handover", date: "Jun 2028", completed: false }
                ]
            },
            {
                id: 32, name: "The Lagoons Beach", developer: "Dubai Properties", developerProjects: 26,
                location: "Dubai Creek Harbour", area: "Creek Harbour", price: "د.إ2,450,000", priceNum: 2450000,
                pricePerSqft: "2,350", roi: "7.7%", appreciation: "+10.9%", completion: "Q3 2027",
                progress: 38, stage: "Foundation", beds: 2, baths: 3, sqft: "1,680",
                image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
                reraNo: "RERA-2024-0778", escrowBank: "Emirates NBD", verified: true, trending: false,
                agent: { name: "Michael Chen", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" },
                has3DTour: true, hasVideo: true,
                milestones: [
                    { name: "Ground Breaking", date: "May 2024", completed: true },
                    { name: "Foundation", date: "Oct 2024", completed: true },
                    { name: "Structure 50%", date: "Jun 2025", completed: false },
                    { name: "Handover", date: "Sep 2027", completed: false }
                ]
            },
            {
                id: 33, name: "Remraam Community", developer: "Nakheel", developerProjects: 38,
                location: "Remraam", area: "Remraam", price: "د.إ890,000", priceNum: 890000,
                pricePerSqft: "1,520", roi: "10.4%", appreciation: "+7.6%", completion: "Q1 2026",
                progress: 72, stage: "MEP Complete", beds: 1, baths: 1, sqft: "750",
                image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop",
                reraNo: "RERA-2023-0556", escrowBank: "ADCB", verified: true, trending: true,
                agent: { name: "Priya Sharma", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop" },
                has3DTour: true, hasVideo: false,
                milestones: [
                    { name: "Ground Breaking", date: "Mar 2023", completed: true },
                    { name: "Structure", date: "Nov 2023", completed: true },
                    { name: "MEP Complete", date: "Aug 2024", completed: true },
                    { name: "Handover", date: "Mar 2026", completed: false }
                ]
            },
            {
                id: 34, name: "Wasl District Apartments", developer: "Wasl Properties", developerProjects: 21,
                location: "Wasl District", area: "Al Jaddaf", price: "د.إ1,650,000", priceNum: 1650000,
                pricePerSqft: "1,980", roi: "8.5%", appreciation: "+9.7%", completion: "Q4 2026",
                progress: 54, stage: "Structure 50%", beds: 2, baths: 2, sqft: "1,350",
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
                reraNo: "RERA-2024-0445", escrowBank: "FAB", verified: true, trending: false,
                agent: { name: "John Martinez", image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop" },
                has3DTour: true, hasVideo: true,
                milestones: [
                    { name: "Ground Breaking", date: "Jan 2024", completed: true },
                    { name: "Foundation", date: "Jun 2024", completed: true },
                    { name: "Structure 50%", date: "Oct 2024", completed: true },
                    { name: "MEP", date: "Apr 2025", completed: false },
                    { name: "Handover", date: "Dec 2026", completed: false }
                ]
            },
            {
                id: 35, name: "The Springs Villas", developer: "Emaar Properties", developerProjects: 42,
                location: "The Springs", area: "The Springs", price: "د.إ3,200,000", priceNum: 3200000,
                pricePerSqft: "1,580", roi: "8.3%", appreciation: "+13.6%", completion: "Q2 2026",
                progress: 68, stage: "MEP Installation", beds: 4, baths: 5, sqft: "3,150",
                image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
                reraNo: "RERA-2023-0889", escrowBank: "Emirates NBD", verified: true, trending: true,
                agent: { name: "Ahmed Hassan", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" },
                has3DTour: true, hasVideo: true,
                milestones: [
                    { name: "Ground Breaking", date: "Jul 2023", completed: true },
                    { name: "Structure", date: "Mar 2024", completed: true },
                    { name: "MEP Installation", date: "Sep 2024", completed: true },
                    { name: "Handover", date: "Jun 2026", completed: false }
                ]
            },
            {
                id: 36, name: "Akoya Oxygen Townhouses", developer: "DAMAC Properties", developerProjects: 55,
                location: "Akoya Oxygen", area: "Akoya", price: "د.إ1,880,000", priceNum: 1880000,
                pricePerSqft: "1,420", roi: "9.1%", appreciation: "+12.2%", completion: "Q3 2026",
                progress: 60, stage: "Structure Complete", beds: 3, baths: 4, sqft: "2,250",
                image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
                reraNo: "RERA-2024-0223", escrowBank: "Dubai Islamic Bank", verified: true, trending: false,
                agent: { name: "Sarah Johnson", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" },
                has3DTour: true, hasVideo: true,
                milestones: [
                    { name: "Ground Breaking", date: "Nov 2023", completed: true },
                    { name: "Foundation", date: "Apr 2024", completed: true },
                    { name: "Structure Complete", date: "Sep 2024", completed: true },
                    { name: "MEP", date: "Mar 2025", completed: false },
                    { name: "Handover", date: "Sep 2026", completed: false }
                ]
            },
            {
                id: 37, name: "Culture Village Residences", developer: "Dubai Properties", developerProjects: 26,
                location: "Culture Village", area: "Al Jaddaf", price: "د.إ1,750,000", priceNum: 1750000,
                pricePerSqft: "2,100", roi: "8.0%", appreciation: "+10.1%", completion: "Q1 2027",
                progress: 44, stage: "Foundation Complete", beds: 2, baths: 2, sqft: "1,420",
                image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop",
                reraNo: "RERA-2024-0556", escrowBank: "Mashreq Bank", verified: true, trending: true,
                agent: { name: "Khalifa El Omani", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
                has3DTour: true, hasVideo: true,
                milestones: [
                    { name: "Ground Breaking", date: "Mar 2024", completed: true },
                    { name: "Foundation Complete", date: "Aug 2024", completed: true },
                    { name: "Structure 50%", date: "Apr 2025", completed: false },
                    { name: "Handover", date: "Mar 2027", completed: false }
                ]
            },
            {
                id: 38, name: "Mudon Villas", developer: "Dubai Properties", developerProjects: 26,
                location: "Mudon", area: "Mudon", price: "د.إ2,350,000", priceNum: 2350000,
                pricePerSqft: "1,560", roi: "8.8%", appreciation: "+11.5%", completion: "Q4 2026",
                progress: 64, stage: "Structure Complete", beds: 3, baths: 4, sqft: "2,680",
                image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
                reraNo: "RERA-2024-0112", escrowBank: "ADCB", verified: true, trending: false,
                agent: { name: "Omar Abdullah", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" },
                has3DTour: true, hasVideo: false,
                milestones: [
                    { name: "Ground Breaking", date: "Sep 2023", completed: true },
                    { name: "Foundation", date: "Mar 2024", completed: true },
                    { name: "Structure Complete", date: "Aug 2024", completed: true },
                    { name: "MEP", date: "Feb 2025", completed: false },
                    { name: "Handover", date: "Dec 2026", completed: false }
                ]
            },
            {
                id: 39, name: "Jumeirah Park Townhouses", developer: "Nakheel", developerProjects: 38,
                location: "Jumeirah Park", area: "Jumeirah Park", price: "د.إ3,450,000", priceNum: 3450000,
                pricePerSqft: "1,650", roi: "7.9%", appreciation: "+13.8%", completion: "Q2 2026",
                progress: 70, stage: "MEP Complete", beds: 4, baths: 5, sqft: "3,420",
                image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
                reraNo: "RERA-2023-0667", escrowBank: "FAB", verified: true, trending: true,
                agent: { name: "Fatima Al Hashmi", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" },
                has3DTour: true, hasVideo: true,
                milestones: [
                    { name: "Ground Breaking", date: "May 2023", completed: true },
                    { name: "Structure", date: "Jan 2024", completed: true },
                    { name: "MEP Complete", date: "Jul 2024", completed: true },
                    { name: "Handover", date: "Jun 2026", completed: false }
                ]
            },
            {
                id: 40, name: "Serena Bella Vista", developer: "Dubai Properties", developerProjects: 26,
                location: "Dubai Land", area: "Dubailand", price: "د.إ1,580,000", priceNum: 1580000,
                pricePerSqft: "1,720", roi: "9.0%", appreciation: "+9.3%", completion: "Q3 2026",
                progress: 58, stage: "Structure 50%", beds: 3, baths: 3, sqft: "1,850",
                image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
                reraNo: "RERA-2024-0334", escrowBank: "Emirates NBD", verified: true, trending: false,
                agent: { name: "Michael Chen", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" },
                has3DTour: true, hasVideo: true,
                milestones: [
                    { name: "Ground Breaking", date: "Dec 2023", completed: true },
                    { name: "Foundation", date: "May 2024", completed: true },
                    { name: "Structure 50%", date: "Sep 2024", completed: true },
                    { name: "MEP", date: "Mar 2025", completed: false },
                    { name: "Handover", date: "Sep 2026", completed: false }
                ]
            },
            {
                id: 41, name: "District One Villas", developer: "Meydan", developerProjects: 17,
                location: "District One", area: "MBR City", price: "د.إ12,500,000", priceNum: 12500000,
                pricePerSqft: "2,850", roi: "5.2%", appreciation: "+19.4%", completion: "Q1 2027",
                progress: 48, stage: "Podium Level", beds: 6, baths: 8, sqft: "7,500",
                image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
                reraNo: "RERA-2024-0002", escrowBank: "Emirates NBD", verified: true, trending: true,
                agent: { name: "Khalifa El Omani", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
                has3DTour: true, hasVideo: true,
                milestones: [
                    { name: "Ground Breaking", date: "Jan 2024", completed: true },
                    { name: "Foundation", date: "Jul 2024", completed: true },
                    { name: "Podium Level", date: "Nov 2024", completed: true },
                    { name: "Structure 50%", date: "Jul 2025", completed: false },
                    { name: "Handover", date: "Mar 2027", completed: false }
                ]
            },
            {
                id: 42, name: "Villanova Community", developer: "Dubai Properties", developerProjects: 26,
                location: "Villanova", area: "Dubailand", price: "د.إ2,180,000", priceNum: 2180000,
                pricePerSqft: "1,520", roi: "8.6%", appreciation: "+10.6%", completion: "Q4 2026",
                progress: 62, stage: "Structure Complete", beds: 3, baths: 4, sqft: "2,480",
                image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
                reraNo: "RERA-2024-0189", escrowBank: "Mashreq Bank", verified: true, trending: false,
                agent: { name: "Priya Sharma", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop" },
                has3DTour: true, hasVideo: true,
                milestones: [
                    { name: "Ground Breaking", date: "Oct 2023", completed: true },
                    { name: "Foundation", date: "Apr 2024", completed: true },
                    { name: "Structure Complete", date: "Sep 2024", completed: true },
                    { name: "MEP", date: "Mar 2025", completed: false },
                    { name: "Handover", date: "Dec 2026", completed: false }
                ]
            },
            {
                id: 43, name: "Dubai Wharf Residences", developer: "Meydan", developerProjects: 17,
                location: "Dubai Wharf", area: "Dubai Wharf", price: "د.إ1,920,000", priceNum: 1920000,
                pricePerSqft: "2,220", roi: "7.8%", appreciation: "+11.2%", completion: "Q2 2027",
                progress: 38, stage: "Foundation", beds: 2, baths: 2, sqft: "1,480",
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
                reraNo: "RERA-2024-0667", escrowBank: "Dubai Islamic Bank", verified: true, trending: true,
                agent: { name: "John Martinez", image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop" },
                has3DTour: true, hasVideo: true,
                milestones: [
                    { name: "Ground Breaking", date: "Apr 2024", completed: true },
                    { name: "Foundation", date: "Sep 2024", completed: true },
                    { name: "Structure 50%", date: "May 2025", completed: false },
                    { name: "Handover", date: "Jun 2027", completed: false }
                ]
            },
            {
                id: 44, name: "The Valley Villas", developer: "Emaar Properties", developerProjects: 42,
                location: "The Valley", area: "Dubailand", price: "د.إ2,680,000", priceNum: 2680000,
                pricePerSqft: "1,580", roi: "8.7%", appreciation: "+12.9%", completion: "Q3 2026",
                progress: 56, stage: "Structure 50%", beds: 4, baths: 5, sqft: "3,120",
                image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
                reraNo: "RERA-2024-0445", escrowBank: "FAB", verified: true, trending: true,
                agent: { name: "Ahmed Hassan", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" },
                has3DTour: true, hasVideo: true,
                milestones: [
                    { name: "Ground Breaking", date: "Nov 2023", completed: true },
                    { name: "Foundation", date: "May 2024", completed: true },
                    { name: "Structure 50%", date: "Sep 2024", completed: true },
                    { name: "MEP", date: "Apr 2025", completed: false },
                    { name: "Handover", date: "Sep 2026", completed: false }
                ]
            },
            {
                id: 45, name: "Tilal Al Ghaf Community", developer: "Majid Al Futtaim", developerProjects: 14,
                location: "Tilal Al Ghaf", area: "Tilal Al Ghaf", price: "د.إ3,150,000", priceNum: 3150000,
                pricePerSqft: "1,680", roi: "7.5%", appreciation: "+13.4%", completion: "Q1 2027",
                progress: 50, stage: "Podium Complete", beds: 4, baths: 5, sqft: "3,280",
                image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
                reraNo: "RERA-2024-0778", escrowBank: "ADCB", verified: true, trending: false,
                agent: { name: "Sarah Johnson", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" },
                has3DTour: true, hasVideo: true,
                milestones: [
                    { name: "Ground Breaking", date: "Feb 2024", completed: true },
                    { name: "Foundation", date: "Jul 2024", completed: true },
                    { name: "Podium Complete", date: "Oct 2024", completed: true },
                    { name: "Structure 50%", date: "Jun 2025", completed: false },
                    { name: "Handover", date: "Mar 2027", completed: false }
                ]
            },
            {
                id: 46, name: "Reem Community", developer: "Emaar Properties", developerProjects: 42,
                location: "Reem", area: "Arabian Ranches", price: "د.إ3,680,000", priceNum: 3680000,
                pricePerSqft: "1,720", roi: "7.9%", appreciation: "+14.7%", completion: "Q2 2026",
                progress: 68, stage: "MEP Installation", beds: 5, baths: 6, sqft: "3,850",
                image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
                reraNo: "RERA-2023-0889", escrowBank: "Emirates NBD", verified: true, trending: true,
                agent: { name: "Omar Abdullah", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" },
                has3DTour: true, hasVideo: true,
                milestones: [
                    { name: "Ground Breaking", date: "Jun 2023", completed: true },
                    { name: "Structure", date: "Feb 2024", completed: true },
                    { name: "MEP Installation", date: "Aug 2024", completed: true },
                    { name: "Handover", date: "Jun 2026", completed: false }
                ]
            },
            {
                id: 47, name: "Bay Square Tower", developer: "Nakheel", developerProjects: 38,
                location: "Business Bay", area: "Business Bay", price: "د.إ1,780,000", priceNum: 1780000,
                pricePerSqft: "2,180", roi: "8.9%", appreciation: "+10.7%", completion: "Q4 2026",
                progress: 52, stage: "Structure 50%", beds: 2, baths: 2, sqft: "1,380",
                image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop",
                reraNo: "RERA-2024-0334", escrowBank: "Mashreq Bank", verified: true, trending: false,
                agent: { name: "Fatima Al Hashmi", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" },
                has3DTour: true, hasVideo: false,
                milestones: [
                    { name: "Ground Breaking", date: "Jan 2024", completed: true },
                    { name: "Foundation", date: "Jun 2024", completed: true },
                    { name: "Structure 50%", date: "Oct 2024", completed: true },
                    { name: "MEP", date: "Apr 2025", completed: false },
                    { name: "Handover", date: "Dec 2026", completed: false }
                ]
            },
            {
                id: 48, name: "Reef at Dubai Islands", developer: "Nakheel", developerProjects: 38,
                location: "Dubai Islands", area: "Dubai Islands", price: "د.إ4,850,000", priceNum: 4850000,
                pricePerSqft: "2,920", roi: "6.8%", appreciation: "+15.3%", completion: "Q3 2027",
                progress: 32, stage: "Foundation", beds: 3, baths: 4, sqft: "2,650",
                image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
                reraNo: "RERA-2024-0890", escrowBank: "FAB", verified: true, trending: true,
                agent: { name: "Michael Chen", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" },
                has3DTour: true, hasVideo: true,
                milestones: [
                    { name: "Ground Breaking", date: "May 2024", completed: true },
                    { name: "Foundation", date: "Oct 2024", completed: true },
                    { name: "Structure 50%", date: "Jun 2025", completed: false },
                    { name: "Handover", date: "Sep 2027", completed: false }
                ]
            },
            {
                id: 49, name: "Grand Views Apartments", developer: "Sobha Realty", developerProjects: 28,
                location: "Sobha Hartland", area: "MBR City", price: "د.إ2,150,000", priceNum: 2150000,
                pricePerSqft: "2,050", roi: "8.1%", appreciation: "+11.6%", completion: "Q1 2027",
                progress: 42, stage: "Foundation Complete", beds: 2, baths: 3, sqft: "1,680",
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
                reraNo: "RERA-2024-0556", escrowBank: "Dubai Islamic Bank", verified: true, trending: false,
                agent: { name: "Priya Sharma", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop" },
                has3DTour: true, hasVideo: true,
                milestones: [
                    { name: "Ground Breaking", date: "Mar 2024", completed: true },
                    { name: "Foundation Complete", date: "Aug 2024", completed: true },
                    { name: "Structure 50%", date: "Apr 2025", completed: false },
                    { name: "Handover", date: "Mar 2027", completed: false }
                ]
            },
            {
                id: 50, name: "Madinat Jumeirah Living", developer: "Dubai Holding", developerProjects: 20,
                location: "Madinat Jumeirah Living", area: "Umm Suqeim", price: "د.إ5,200,000", priceNum: 5200000,
                pricePerSqft: "2,680", roi: "6.4%", appreciation: "+16.8%", completion: "Q2 2027",
                progress: 45, stage: "Foundation Complete", beds: 4, baths: 5, sqft: "3,450",
                image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
                reraNo: "RERA-2024-0667", escrowBank: "Emirates NBD", verified: true, trending: true,
                agent: { name: "Khalifa El Omani", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
                has3DTour: true, hasVideo: true,
                milestones: [
                    { name: "Ground Breaking", date: "Feb 2024", completed: true },
                    { name: "Foundation Complete", date: "Aug 2024", completed: true },
                    { name: "Structure 50%", date: "May 2025", completed: false },
                    { name: "Handover", date: "Jun 2027", completed: false }
                ]
            }
        ];
