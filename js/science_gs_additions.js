// ============================================================
// DefendX: NDA Science & General Studies Hard Questions Bank
// Source: z_science.txt — 118 questions (S101–S200, GS101–GS150)
// Subjects: Science (68 Qs) | General Studies (50 Qs)
// Difficulty: Hard
//
// Science topics: Physics (Mechanics, Optics, Waves, Modern
//   Physics, Electromagnetism, Thermodynamics, etc.),
//   Chemistry (Organic, Inorganic, Physical), Biology
//   (Physiology, Genetics, Cytology, Evolution)
//
// General Studies topics: History, Polity, Geography,
//   Economics, Defense, General Knowledge
//
// Topic breakdown:
//   History - Modern: 8
//   General Knowledge: 6
//   Physics - Optics: 5
//   Geography - India: 4
//   Physics - Mechanics: 3
//   Physics - Electromagnetism: 3
//   Physics - Modern Physics: 3
//   Chemistry - Electrochemistry: 3
//   History - Ancient: 3
//   Polity - Constitution: 3
//   Economics: 3
//   Defense: 3
//   Physics - Properties of Matter: 2
//   Physics - Thermodynamics: 2
//   Chemistry - Atomic Structure: 2
//   Chemistry - Solutions: 2
//   Chemistry - Thermodynamics: 2
//   Chemistry - Organic: 2
//   Biology - Human Physiology: 2
//   Biology - Cytology: 2
//   Biology - Evolution: 2
//   Chemistry - States of Matter: 2
//   Biology - Immunology: 2
//   History - Medieval: 2
//   Polity - Fundamental Rights: 2
//   Polity - Judiciary: 2
//   Geography - Climatology: 2
//   Geography - World: 2
//   Physics - Gravitation: 1
//   Physics - Rotational Motion: 1
//   Physics - Sound Waves: 1
//   Physics - Current Electricity: 1
//   Physics - Alternating Current: 1
//   Chemistry - Equilibrium: 1
//   Chemistry - Chemical Bonding: 1
//   Chemistry - Coordination Compounds: 1
//   Chemistry - Metallurgy: 1
//   Chemistry - Polymers: 1
//   Biology - Genetics: 1
//   Chemistry - P-Block Elements: 1
//   Biology - Plant Physiology: 1
//   Biology - Human Reproduction: 1
//   Biology - Biomolecules: 1
//   Physics - Kinematics: 1
//   Physics - Simple Harmonic Motion: 1
//   Chemistry - Solid State: 1
//   Chemistry - Kinetics: 1
//   Biology - Animal Kingdom: 1
//   Biology - Excretory System: 1
//   Chemistry - Environmental: 1
//   Biology - Neural System: 1
//   Biology - Endocrine System: 1
//   Physics - Work, Energy & Power: 1
//   Physics - Electricity: 1
//   Chemistry - Periodic Table: 1
//   Physics - Sound: 1
//   Physics - Waves: 1
//   Polity - Executive: 1
//   Polity - Amendments: 1
//   Geography - Oceanography: 1
//   Geography - Physical: 1
//   Polity - Parliament: 1
//   Polity - Federalism: 1
//   Geography - Geomorphology: 1
//   Geography - Soil: 1
//   Polity - Local Government: 1
//   Polity - Fundamental Duties: 1
// ============================================================
//
// HOW TO ADD TO data.js:
//   In ndaData.quizBank, append the spread:
//     ...ndaScienceGsHardQuestions
//   Make sure this file is loaded BEFORE data.js, or
//   simply copy the array contents into quizBank directly.
// ============================================================

const ndaScienceGsHardQuestions = [
    {
        "id": "S101",
        "subject": "Science",
        "topic": "Physics - Gravitation",
        "difficulty": "Hard",
        "question": "If the radius of the earth were to shrink by 1% while its mass remains the same, the acceleration due to gravity on the earth's surface would:",
        "options": [
            "Decrease by 1%",
            "Increase by 1%",
            "Decrease by 2%",
            "Increase by 2%"
        ],
        "correctIndex": 3,
        "explanation": "Acceleration due to gravity g = GM/R². Taking natural log: ln g = ln(GM) - 2 ln R. Differentiating: Δg/g = -2(ΔR/R). Given ΔR/R = -1% (shrinking). So Δg/g = -2(-1%) = +2%. Therefore, g increases by 2%."
    },
    {
        "id": "S102",
        "subject": "Science",
        "topic": "Physics - Mechanics",
        "difficulty": "Hard",
        "question": "A bullet of mass 'm' moving with velocity 'v' strikes a suspended wooden block of mass 'M' and gets embedded in it. What is the maximum height to which the block-bullet system will rise?",
        "options": [
            "v² / 2g",
            "m²v² / 2g(M+m)²",
            "M²v² / 2g(M+m)²",
            "mv² / 2g(M+m)"
        ],
        "correctIndex": 1,
        "explanation": "By conservation of linear momentum: mv = (M+m)V => V = mv/(M+m). By conservation of mechanical energy for the rise: (1/2)(M+m)V² = (M+m)gh. Therefore, h = V² / 2g = [mv/(M+m)]² / 2g = m²v² / 2g(M+m)²."
    },
    {
        "id": "S103",
        "subject": "Science",
        "topic": "Physics - Rotational Motion",
        "difficulty": "Hard",
        "question": "Two solid spheres of the same mass are made of metals of different densities. Which of them has a larger moment of inertia about its diameter?",
        "options": [
            "The sphere with higher density",
            "The sphere with lower density",
            "Both have the same moment of inertia",
            "Cannot be determined without radii"
        ],
        "correctIndex": 1,
        "explanation": "Moment of Inertia I = (2/5)MR². Mass M is constant. Density ρ = M / (4/3 π R³). Lower density implies a larger volume, and thus a larger radius R. Since I depends on R², the sphere with the lower density (larger R) will have a larger moment of inertia."
    },
    {
        "id": "S104",
        "subject": "Science",
        "topic": "Physics - Properties of Matter",
        "difficulty": "Hard",
        "question": "Two soap bubbles of radii R1 and R2 (R1 > R2) coalesce in a vacuum under isothermal conditions to form a single bubble. What is the radius of the new bubble?",
        "options": [
            "R1 + R2",
            "√(R1² + R2²)",
            "(R1R2)/(R1+R2)",
            "∛(R1³ + R2³)"
        ],
        "correctIndex": 1,
        "explanation": "In isothermal conditions, surface energy is conserved. Energy E = Surface Tension(T) × Total Surface Area(A). A soap bubble has 2 surfaces. Initial Energy = T(2×4πR1²) + T(2×4πR2²). Final Energy = T(2×4πR²). Equating them: R² = R1² + R2² => R = √(R1² + R2²)."
    },
    {
        "id": "S105",
        "subject": "Science",
        "topic": "Physics - Mechanics",
        "difficulty": "Hard",
        "question": "A machine gun fires n bullets per second with speed v. If the mass of each bullet is m, what is the force required to hold the gun in position?",
        "options": [
            "mnv",
            "mnv / 2",
            "m²nv",
            "mnv²"
        ],
        "correctIndex": 0,
        "explanation": "Force is the rate of change of momentum. Momentum of one bullet = mv. Number of bullets fired per second = n. Total change in momentum per second = mnv. Thus, the continuous force required is mnv."
    },
    {
        "id": "S106",
        "subject": "Science",
        "topic": "Physics - Optics",
        "difficulty": "Hard",
        "question": "A ray of light passes through an equilateral glass prism such that the angle of incidence is equal to the angle of emergence. If the angle of minimum deviation is equal to the angle of the prism, what is the refractive index of the glass?",
        "options": [
            "1.5",
            "√2",
            "√3",
            "2"
        ],
        "correctIndex": 2,
        "explanation": "For minimum deviation, i = e. Given Minimum Deviation Dm = Angle of Prism A. For an equilateral prism, A = 60°, so Dm = 60°. Refractive index μ = sin[(A+Dm)/2] / sin(A/2) = sin(120°/2) / sin(60°/2) = sin(60°) / sin(30°) = (√3/2) / (1/2) = √3."
    },
    {
        "id": "S107",
        "subject": "Science",
        "topic": "Physics - Optics",
        "difficulty": "Hard",
        "question": "A convex lens of focal length f is cut into two identical plano-convex lenses along a plane perpendicular to its principal axis. What is the focal length of each part?",
        "options": [
            "f/2",
            "f",
            "2f",
            "4f"
        ],
        "correctIndex": 2,
        "explanation": "Lens Maker's Formula: 1/f = (μ-1)(1/R1 - 1/R2). For an equiconvex lens, 1/f = (μ-1)(2/R). When cut vertically, one surface becomes plane (R2 = ∞). New focal length 1/f' = (μ-1)(1/R - 0) = (μ-1)/R. Comparing the two, 1/f = 2/f', meaning f' = 2f."
    },
    {
        "id": "S108",
        "subject": "Science",
        "topic": "Physics - Sound Waves",
        "difficulty": "Hard",
        "question": "An observer moves towards a stationary source of sound with a velocity one-fifth of the velocity of sound. The percentage increase in apparent frequency is:",
        "options": [
            "20%",
            "25%",
            "5%",
            "10%"
        ],
        "correctIndex": 0,
        "explanation": "Doppler Effect formula: f' = f(v + vo)/v (since source is stationary and observer moves towards it). vo = v/5. f' = f(v + v/5)/v = f(6v/5)/v = 1.2f. The increase is 0.2f, which is a 20% increase."
    },
    {
        "id": "S109",
        "subject": "Science",
        "topic": "Physics - Optics",
        "difficulty": "Hard",
        "question": "Two thin lenses of power +5D and -2D are placed in contact. The focal length of the combination is:",
        "options": [
            "+33.3 cm",
            "-33.3 cm",
            "+30 cm",
            "+100 cm"
        ],
        "correctIndex": 0,
        "explanation": "Power of combination P = P1 + P2 = 5 + (-2) = +3D. Focal length f = 1/P meters. f = 1/3 m = 100/3 cm = +33.3 cm."
    },
    {
        "id": "S110",
        "subject": "Science",
        "topic": "Physics - Thermodynamics",
        "difficulty": "Hard",
        "question": "A monoatomic ideal gas expands at constant pressure. What percentage of the heat supplied is used in doing external work?",
        "options": [
            "20%",
            "40%",
            "60%",
            "100%"
        ],
        "correctIndex": 1,
        "explanation": "Heat supplied at constant pressure: Q = n Cp ΔT. Work done: W = P ΔV = n R ΔT. Percentage = (W/Q) * 100 = (nRΔT / nCpΔT) * 100 = (R/Cp) * 100. For a monoatomic gas, Cp = (5/2)R. Percentage = (R / (5/2)R) * 100 = (2/5) * 100 = 40%."
    },
    {
        "id": "S111",
        "subject": "Science",
        "topic": "Physics - Current Electricity",
        "difficulty": "Hard",
        "question": "If a wire is stretched to make its length three times its original length, its resistance will become:",
        "options": [
            "3 times",
            "1/3 times",
            "9 times",
            "1/9 times"
        ],
        "correctIndex": 2,
        "explanation": "Volume remains constant when stretched. Volume V = A * L. If L becomes 3L, A must become A/3. Resistance R = ρL/A. New Resistance R' = ρ(3L)/(A/3) = 9(ρL/A) = 9R."
    },
    {
        "id": "S112",
        "subject": "Science",
        "topic": "Physics - Electromagnetism",
        "difficulty": "Hard",
        "question": "A charged particle moves through a magnetic field perpendicular to its direction. Then:",
        "options": [
            "Both momentum and kinetic energy of the particle change",
            "Both momentum and kinetic energy remain constant",
            "Kinetic energy changes but momentum is constant",
            "Momentum changes but kinetic energy remains constant"
        ],
        "correctIndex": 3,
        "explanation": "The magnetic force acts perpendicular to the velocity, meaning it does no work. Since Work = ΔKE, kinetic energy remains constant (speed is constant). However, the direction of velocity constantly changes, so the momentum (a vector quantity) changes continuously."
    },
    {
        "id": "S113",
        "subject": "Science",
        "topic": "Physics - Modern Physics",
        "difficulty": "Hard",
        "question": "In Bohr's model of the hydrogen atom, if the electron jumps from n=3 to n=2 orbit, the wavelength of the emitted photon is proportional to:",
        "options": [
            "5/36",
            "36/5",
            "1/5",
            "27/5"
        ],
        "correctIndex": 1,
        "explanation": "Rydberg's formula: 1/λ = R(1/n1² - 1/n2²). 1/λ = R(1/2² - 1/3²) = R(1/4 - 1/9) = R((9-4)/36) = 5R/36. Therefore, λ = 36 / 5R. Wavelength is proportional to 36/5."
    },
    {
        "id": "S114",
        "subject": "Science",
        "topic": "Physics - Alternating Current",
        "difficulty": "Hard",
        "question": "In a series LCR circuit at resonance, the phase difference between applied voltage and the current is:",
        "options": [
            "π/2",
            "π",
            "0",
            "-π/2"
        ],
        "correctIndex": 2,
        "explanation": "At resonance in an LCR circuit, inductive reactance (XL) equals capacitive reactance (XC). They cancel each other out, making the circuit purely resistive (Z = R). In a purely resistive circuit, voltage and current are in the same phase, so the phase difference is 0."
    },
    {
        "id": "S115",
        "subject": "Science",
        "topic": "Chemistry - Atomic Structure",
        "difficulty": "Hard",
        "question": "Which of the following sets of quantum numbers represents the highest energy of an electron?",
        "options": [
            "n=4, l=0, m=0, s=+1/2",
            "n=3, l=1, m=1, s=-1/2",
            "n=3, l=2, m=1, s=+1/2",
            "n=4, l=1, m=0, s=-1/2"
        ],
        "correctIndex": 3,
        "explanation": "Energy of an electron in a multi-electron atom is determined by the (n + l) rule. Option A: n+l = 4+0 = 4. Option B: n+l = 3+1 = 4. Option C: n+l = 3+2 = 5. Option D: n+l = 4+1 = 5. For C and D, n+l is the same (5). In this case, the one with the higher 'n' value has higher energy. Thus, 4p (n=4, l=1) has higher energy than 3d (n=3, l=2)."
    },
    {
        "id": "S116",
        "subject": "Science",
        "topic": "Chemistry - Solutions",
        "difficulty": "Hard",
        "question": "The depression in freezing point of 0.01M aqueous solutions of urea, NaCl, and Na2SO4 are in the ratio:",
        "options": [
            "1 : 1 : 1",
            "1 : 2 : 3",
            "1 : 2 : 4",
            "2 : 2 : 3"
        ],
        "correctIndex": 1,
        "explanation": "Depression in freezing point is a colligative property, meaning it depends on the number of particles (van 't Hoff factor, i). Urea is non-electrolyte (i=1). NaCl dissociates into Na+ and Cl- (i=2). Na2SO4 dissociates into 2Na+ and SO4²- (i=3). Since molarity is the same, the ratio is simply the ratio of their van 't Hoff factors: 1 : 2 : 3."
    },
    {
        "id": "S117",
        "subject": "Science",
        "topic": "Chemistry - Thermodynamics",
        "difficulty": "Hard",
        "question": "For a reaction to be spontaneous at all temperatures, the signs of ΔH and ΔS must be respectively:",
        "options": [
            "+ and -",
            "- and +",
            "- and -",
            "+ and +"
        ],
        "correctIndex": 1,
        "explanation": "Gibbs Free Energy equation: ΔG = ΔH - TΔS. For a reaction to be spontaneous, ΔG must be negative. If ΔH is negative (exothermic) and ΔS is positive (increase in entropy), then ΔG = (negative) - T(positive) = negative. This remains negative regardless of the temperature."
    },
    {
        "id": "S118",
        "subject": "Science",
        "topic": "Chemistry - Equilibrium",
        "difficulty": "Hard",
        "question": "What is the pH of a 10⁻⁸ M aqueous solution of HCl at 298 K?",
        "options": [
            "8.0",
            "Exactly 7.0",
            "Between 6 and 7",
            "Between 7 and 8"
        ],
        "correctIndex": 2,
        "explanation": "For very dilute acids (like 10⁻⁸ M HCl), the concentration of H+ from the ionization of water (10⁻⁷ M) cannot be neglected. Total [H+] = [H+] from HCl + [H+] from water = 10⁻⁸ + ~10⁻⁷ = 1.1 × 10⁻⁷ M. pH = -log(1.1 × 10⁻⁷) ≈ 6.96. The pH is strictly between 6 and 7 (acidic)."
    },
    {
        "id": "S119",
        "subject": "Science",
        "topic": "Chemistry - Electrochemistry",
        "difficulty": "Hard",
        "question": "How many Faradays of electricity are required to reduce 1 mole of MnO4⁻ to Mn²⁺?",
        "options": [
            "1 F",
            "3 F",
            "5 F",
            "7 F"
        ],
        "correctIndex": 2,
        "explanation": "In MnO4⁻, the oxidation state of Mn is +7. In Mn²⁺, it is +2. The reaction is MnO4⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O. The change in oxidation state is 5, meaning 5 moles of electrons are required per mole of MnO4⁻. 1 mole of electrons = 1 Faraday. Thus, 5 F are required."
    },
    {
        "id": "S120",
        "subject": "Science",
        "topic": "Chemistry - Chemical Bonding",
        "difficulty": "Hard",
        "question": "Which of the following molecules has a non-zero dipole moment?",
        "options": [
            "BF3",
            "CO2",
            "CCl4",
            "NH3"
        ],
        "correctIndex": 3,
        "explanation": "BF3 is trigonal planar, CO2 is linear, and CCl4 is tetrahedral. Due to perfect symmetry, their individual bond dipoles cancel out, making their net dipole moment zero. NH3 has a trigonal pyramidal shape due to a lone pair on nitrogen, which prevents dipoles from cancelling, resulting in a non-zero dipole moment."
    },
    {
        "id": "S121",
        "subject": "Science",
        "topic": "Chemistry - Coordination Compounds",
        "difficulty": "Hard",
        "question": "What is the oxidation state and coordination number of Cobalt in the complex [Co(en)2Cl2]+? (en = ethylenediamine)",
        "options": [
            "+3 and 6",
            "+2 and 4",
            "+3 and 4",
            "+2 and 6"
        ],
        "correctIndex": 0,
        "explanation": "Ethylenediamine (en) is a neutral bidentate ligand. Chlorine (Cl) is a unidentate ligand with a -1 charge. Coordination number = 2×(2) for 'en' + 2×(1) for 'Cl' = 6. Let oxidation state of Co be x. x + 2(0) + 2(-1) = +1 => x - 2 = +1 => x = +3."
    },
    {
        "id": "S122",
        "subject": "Science",
        "topic": "Chemistry - Organic",
        "difficulty": "Hard",
        "question": "When phenol is treated with chloroform and aqueous NaOH, followed by acidification, the major product formed is:",
        "options": [
            "Salicylic acid",
            "Salicylaldehyde",
            "Benzoic acid",
            "Chlorobenzene"
        ],
        "correctIndex": 1,
        "explanation": "This is the classic Reimer-Tiemann reaction. Phenol reacts with CHCl3 in the presence of an alkali (NaOH/KOH) to introduce an aldehyde group (-CHO) at the ortho position, resulting in Salicylaldehyde (2-hydroxybenzaldehyde)."
    },
    {
        "id": "S123",
        "subject": "Science",
        "topic": "Chemistry - Metallurgy",
        "difficulty": "Hard",
        "question": "In the extraction of copper from its sulphide ore, the metal is finally obtained by the reduction of cuprous oxide with:",
        "options": [
            "Carbon monoxide",
            "Copper (I) sulphide (Cu2S)",
            "Sulphur dioxide",
            "Iron (II) sulphide"
        ],
        "correctIndex": 1,
        "explanation": "This is an auto-reduction process. In the Bessemer converter, some of the Cu2S is roasted to Cu2O. This Cu2O then reacts with the remaining unoxidized Cu2S to form blister copper: 2Cu2O + Cu2S → 6Cu + SO2."
    },
    {
        "id": "S124",
        "subject": "Science",
        "topic": "Chemistry - Polymers",
        "difficulty": "Hard",
        "question": "Nylon 6,6 is a condensation polymer of:",
        "options": [
            "Phenol and Formaldehyde",
            "Hexamethylenediamine and Adipic acid",
            "Caprolactam",
            "Ethylene glycol and Terephthalic acid"
        ],
        "correctIndex": 1,
        "explanation": "Nylon 6,6 is synthesized by polycondensation of hexamethylenediamine (which has 6 carbon atoms) and adipic acid (which also has 6 carbon atoms). Water is eliminated in the process."
    },
    {
        "id": "S125",
        "subject": "Science",
        "topic": "Biology - Human Physiology",
        "difficulty": "Hard",
        "question": "A shift of the oxygen-haemoglobin dissociation curve to the right indicates:",
        "options": [
            "Increased oxygen affinity due to high pH",
            "Decreased oxygen affinity due to high pCO2",
            "Decreased oxygen affinity due to low temperature",
            "Increased oxygen affinity due to low pCO2"
        ],
        "correctIndex": 1,
        "explanation": "A rightward shift in the oxygen-haemoglobin dissociation curve (Bohr effect) means haemoglobin has a lower affinity for oxygen, promoting oxygen release to tissues. This is caused by factors present in active tissues: high pCO2, low pH (high H+), and high temperature."
    },
    {
        "id": "S126",
        "subject": "Science",
        "topic": "Biology - Genetics",
        "difficulty": "Hard",
        "question": "In a dihybrid cross obeying Mendel's laws, what is the probability of obtaining an organism with completely homozygous recessive genotype (aabb)?",
        "options": [
            "1/16",
            "3/16",
            "9/16",
            "1/4"
        ],
        "correctIndex": 0,
        "explanation": "In a dihybrid cross (AaBb × AaBb), the independent probability of getting 'aa' is 1/4 and 'bb' is 1/4. By the rule of multiplication, the probability of getting both (aabb) is 1/4 × 1/4 = 1/16."
    },
    {
        "id": "S127",
        "subject": "Science",
        "topic": "Biology - Human Physiology",
        "difficulty": "Hard",
        "question": "Which of the following hormones initiates a cascade of enzyme reactions leading to the conversion of glycogen to glucose?",
        "options": [
            "Insulin",
            "Glucagon",
            "Thyroxine",
            "Aldosterone"
        ],
        "correctIndex": 1,
        "explanation": "Glucagon, secreted by the alpha cells of the pancreas, is activated during fasting or low blood sugar. It binds to liver cells and stimulates glycogenolysis (breakdown of glycogen to glucose) to raise blood sugar levels."
    },
    {
        "id": "S128",
        "subject": "Science",
        "topic": "Biology - Cytology",
        "difficulty": "Hard",
        "question": "The structure responsible for the synthesis of ribosomal RNA (rRNA) and ribosome assembly in eukaryotic cells is the:",
        "options": [
            "Rough Endoplasmic Reticulum",
            "Golgi Apparatus",
            "Nucleolus",
            "Lysosome"
        ],
        "correctIndex": 2,
        "explanation": "The nucleolus is a dense, non-membrane bound structure found within the nucleus. It is the primary site for ribosomal RNA (rRNA) transcription and the assembly of ribosomal subunits."
    },
    {
        "id": "S129",
        "subject": "Science",
        "topic": "Biology - Evolution",
        "difficulty": "Hard",
        "question": "Analogous structures are a result of:",
        "options": [
            "Divergent evolution",
            "Convergent evolution",
            "Shared ancestry",
            "Stabilizing selection"
        ],
        "correctIndex": 1,
        "explanation": "Analogous structures are organs that have similar functions but different evolutionary origins and anatomical structures (e.g., wings of a butterfly and wings of a bird). They arise through convergent evolution, where unrelated species adapt similarly to similar environmental pressures."
    },
    {
        "id": "S130",
        "subject": "Science",
        "topic": "Physics - Properties of Matter",
        "difficulty": "Hard",
        "question": "Water rises to a height 'h' in a capillary tube. If the length of the capillary tube above the water surface is made less than 'h', then:",
        "options": [
            "Water will overflow like a fountain",
            "Water will rise to the top edge and stay there",
            "The meniscus will flatten but water will not overflow",
            "Water will depress below the surrounding level"
        ],
        "correctIndex": 2,
        "explanation": "If a capillary tube is of insufficient length, water does not overflow. Instead, it rises to the top edge, and its radius of curvature (meniscus) increases (flattens) such that h*R = constant, matching the available pressure. It never overflows."
    },
    {
        "id": "S131",
        "subject": "Science",
        "topic": "Physics - Electromagnetism",
        "difficulty": "Hard",
        "question": "Two parallel straight wires carrying current in the same direction will:",
        "options": [
            "Repel each other",
            "Attract each other",
            "Have no force between them",
            "Rotate around each other"
        ],
        "correctIndex": 1,
        "explanation": "Using the Right-Hand Grip Rule, the magnetic field produced by one wire at the location of the other wire interacts with the current in the second wire. By Fleming's Left-Hand Rule, the resulting Lorentz force points towards the other wire. Thus, they attract."
    },
    {
        "id": "S132",
        "subject": "Science",
        "topic": "Physics - Modern Physics",
        "difficulty": "Hard",
        "question": "If the kinetic energy of a free electron doubles, its de Broglie wavelength changes by a factor of:",
        "options": [
            "1/2",
            "2",
            "1/√2",
            "√2"
        ],
        "correctIndex": 2,
        "explanation": "de Broglie wavelength λ = h / p. Kinetic energy K = p² / 2m => p = √(2mK). So λ = h / √(2mK). Since λ is inversely proportional to √K, if K becomes 2K, the new wavelength λ' = h / √(2m*2K) = λ / √2. The factor is 1/√2."
    },
    {
        "id": "S133",
        "subject": "Science",
        "topic": "Physics - Thermodynamics",
        "difficulty": "Hard",
        "question": "A Carnot engine takes heat from a reservoir at 627°C and rejects it to a sink at 27°C. What is its efficiency?",
        "options": [
            "33.3%",
            "50%",
            "66.6%",
            "75%"
        ],
        "correctIndex": 2,
        "explanation": "Convert temperatures to Kelvin. Source T1 = 627 + 273 = 900 K. Sink T2 = 27 + 273 = 300 K. Efficiency η = 1 - (T2/T1) = 1 - (300/900) = 1 - 1/3 = 2/3. In percentage, 2/3 * 100 = 66.6%."
    },
    {
        "id": "S134",
        "subject": "Science",
        "topic": "Physics - Mechanics",
        "difficulty": "Hard",
        "question": "A satellite is orbiting just above the surface of the earth. What is its orbital velocity if the radius of the earth is R and acceleration due to gravity is g?",
        "options": [
            "√gR",
            "√(2gR)",
            "gR",
            "gR²"
        ],
        "correctIndex": 0,
        "explanation": "Centripetal force is provided by gravity: mv²/R = mg. Therefore, v² = gR, which means v = √gR. Note that √(2gR) is the escape velocity."
    },
    {
        "id": "S135",
        "subject": "Science",
        "topic": "Chemistry - States of Matter",
        "difficulty": "Hard",
        "question": "At what temperature will the root mean square (rms) velocity of an oxygen molecule be equal to that of a hydrogen molecule at -73°C?",
        "options": [
            "1600 K",
            "3200 K",
            "800 K",
            "273 K"
        ],
        "correctIndex": 1,
        "explanation": "V_rms = √(3RT/M). For V_rms(O2) to equal V_rms(H2), T_O2 / M_O2 = T_H2 / M_H2. Temperature of H2 = -73 + 273 = 200 K. Molar mass of H2 = 2 g/mol, O2 = 32 g/mol. T_O2 / 32 = 200 / 2 => T_O2 = 100 * 32 = 3200 K."
    },
    {
        "id": "S136",
        "subject": "Science",
        "topic": "Chemistry - Organic",
        "difficulty": "Hard",
        "question": "Which of the following compounds is the most acidic?",
        "options": [
            "Phenol",
            "m-Nitrophenol",
            "p-Nitrophenol",
            "p-Cresol"
        ],
        "correctIndex": 2,
        "explanation": "Acidity is determined by the stability of the conjugate base (phenoxide ion). The Nitro group (-NO2) is highly electron-withdrawing (-I and -M effects), which stabilizes the negative charge. The -M effect is active at ortho and para positions but not meta. Therefore, p-Nitrophenol has the strongest resonance stabilization and is most acidic. (p-Cresol has a +I methyl group, making it less acidic than phenol)."
    },
    {
        "id": "S137",
        "subject": "Science",
        "topic": "Chemistry - P-Block Elements",
        "difficulty": "Hard",
        "question": "The correct order of boiling points for Group 15 hydrides is:",
        "options": [
            "NH3 < PH3 < AsH3 < SbH3 < BiH3",
            "PH3 < AsH3 < NH3 < SbH3 < BiH3",
            "BiH3 < SbH3 < AsH3 < PH3 < NH3",
            "PH3 < NH3 < AsH3 < SbH3 < BiH3"
        ],
        "correctIndex": 1,
        "explanation": "Generally, boiling point increases down the group due to increasing van der Waals forces (molecular mass). So PH3 < AsH3 < SbH3 < BiH3. However, NH3 forms strong intermolecular hydrogen bonds, significantly raising its boiling point above PH3 and AsH3, but it's still lower than SbH3 and BiH3. Thus: PH3 < AsH3 < NH3 < SbH3 < BiH3."
    },
    {
        "id": "S138",
        "subject": "Science",
        "topic": "Chemistry - Electrochemistry",
        "difficulty": "Hard",
        "question": "The standard reduction potentials for Zn²⁺/Zn, Ni²⁺/Ni, and Fe²⁺/Fe are -0.76 V, -0.23 V, and -0.44 V respectively. The reaction X + Y²⁺ → X²⁺ + Y will be spontaneous when:",
        "options": [
            "X = Ni, Y = Fe",
            "X = Ni, Y = Zn",
            "X = Fe, Y = Zn",
            "X = Zn, Y = Ni"
        ],
        "correctIndex": 3,
        "explanation": "For the reaction to be spontaneous, the cell potential E°_cell must be positive. E°_cell = E°_cathode(reduction) - E°_anode(oxidation). Here, Y is reduced, X is oxidized. So we need E°(Y²⁺/Y) > E°(X²⁺/X). Meaning Y must have a higher reduction potential than X. Among the options, Zn (-0.76V) has the lowest reduction potential, making it the strongest reducing agent (best X). Ni (-0.23V) has the highest (best Y). Thus X = Zn, Y = Ni works (-0.23 - (-0.76) = +0.53 V)."
    },
    {
        "id": "S139",
        "subject": "Science",
        "topic": "Biology - Plant Physiology",
        "difficulty": "Hard",
        "question": "In C4 plants, the primary CO2 acceptor is:",
        "options": [
            "RuBP (Ribulose 1,5-bisphosphate)",
            "PEP (Phosphoenolpyruvate)",
            "OAA (Oxaloacetic acid)",
            "PGA (Phosphoglyceric acid)"
        ],
        "correctIndex": 1,
        "explanation": "In C4 plants, carbon fixation occurs first in the mesophyll cells where the primary CO2 acceptor is a 3-carbon molecule called Phosphoenolpyruvate (PEP), catalyzed by PEP carboxylase, to form the 4-carbon OAA."
    },
    {
        "id": "S140",
        "subject": "Science",
        "topic": "Biology - Human Reproduction",
        "difficulty": "Hard",
        "question": "The hormone that triggers ovulation in human females is a massive surge of:",
        "options": [
            "Estrogen",
            "Progesterone",
            "Luteinizing Hormone (LH)",
            "Follicle Stimulating Hormone (FSH)"
        ],
        "correctIndex": 2,
        "explanation": "Around the 14th day of a normal menstrual cycle, a sudden massive surge in the secretion of Luteinizing Hormone (LH) from the anterior pituitary gland triggers the rupture of the Graafian follicle, leading to ovulation."
    },
    {
        "id": "S141",
        "subject": "Science",
        "topic": "Biology - Biomolecules",
        "difficulty": "Hard",
        "question": "Which of the following bonds are formed during the linking of amino acids to form a protein?",
        "options": [
            "Glycosidic bonds",
            "Phosphodiester bonds",
            "Peptide bonds",
            "Ester bonds"
        ],
        "correctIndex": 2,
        "explanation": "Amino acids are linked together by peptide bonds, which are formed via a dehydration synthesis (condensation) reaction between the carboxyl group of one amino acid and the amino group of another."
    },
    {
        "id": "S142",
        "subject": "Science",
        "topic": "Biology - Immunology",
        "difficulty": "Hard",
        "question": "Which class of antibodies is primarily involved in allergic reactions and asthma?",
        "options": [
            "IgG",
            "IgA",
            "IgM",
            "IgE"
        ],
        "correctIndex": 3,
        "explanation": "Immunoglobulin E (IgE) binds to allergens and triggers the degranulation of mast cells and basophils, releasing histamine and other inflammatory mediators that cause allergic symptoms."
    },
    {
        "id": "S143",
        "subject": "Science",
        "topic": "Physics - Kinematics",
        "difficulty": "Hard",
        "question": "A stone is dropped from a balloon rising upwards with a velocity of 12 m/s. If the stone takes 10 seconds to reach the ground, what was the height of the balloon when the stone was dropped? (g = 10 m/s²)",
        "options": [
            "380 m",
            "500 m",
            "620 m",
            "400 m"
        ],
        "correctIndex": 0,
        "explanation": "When dropped, the stone inherits the balloon's upward velocity. Initial velocity u = +12 m/s (upward). Acceleration a = -10 m/s² (downward). Time t = 10 s. Displacement s = ut + 1/2 at² = (12)(10) + 1/2(-10)(100) = 120 - 500 = -380 m. The negative sign indicates displacement is downwards. Height = 380 m."
    },
    {
        "id": "S144",
        "subject": "Science",
        "topic": "Physics - Simple Harmonic Motion",
        "difficulty": "Hard",
        "question": "A simple pendulum has a time period T. If the mass of the bob is doubled and length is made four times, its new time period will be:",
        "options": [
            "T",
            "2T",
            "4T",
            "T/2"
        ],
        "correctIndex": 1,
        "explanation": "Time period of a simple pendulum T = 2π√(L/g). It is entirely independent of the mass of the bob. If the length L becomes 4L, the new time period T' = 2π√(4L/g) = 2 * 2π√(L/g) = 2T."
    },
    {
        "id": "S145",
        "subject": "Science",
        "topic": "Chemistry - Solid State",
        "difficulty": "Hard",
        "question": "F-centers in an ionic crystal are:",
        "options": [
            "Interstitial transition metal ions",
            "Lattice sites containing extra positive ions",
            "Anion vacancies occupied by unpaired electrons",
            "Cation vacancies occupied by holes"
        ],
        "correctIndex": 2,
        "explanation": "F-centers (Farbe centers) are a type of crystallographic defect in which an anionic vacancy in a crystal lattice is occupied by one or more unpaired electrons. These electrons absorb light in the visible spectrum, imparting color to the crystal (e.g., yellow color of NaCl heated with Na vapor)."
    },
    {
        "id": "S146",
        "subject": "Science",
        "topic": "Chemistry - Kinetics",
        "difficulty": "Hard",
        "question": "A first-order reaction is 75% complete in 60 minutes. Find the half-life of the reaction.",
        "options": [
            "20 minutes",
            "30 minutes",
            "45 minutes",
            "15 minutes"
        ],
        "correctIndex": 1,
        "explanation": "For a first-order reaction, the time required for 75% completion (which leaves 25%, or 1/4 of the original amount) is exactly two half-lives (t_75% = 2 * t_1/2). Since 2 * t_1/2 = 60 mins, t_1/2 = 30 minutes."
    },
    {
        "id": "S147",
        "subject": "Science",
        "topic": "Biology - Animal Kingdom",
        "difficulty": "Hard",
        "question": "Which of the following is considered a 'living fossil' among arthropods?",
        "options": [
            "Locust",
            "Limulus (King crab)",
            "Peripatus",
            "Lepisma (Silverfish)"
        ],
        "correctIndex": 1,
        "explanation": "Limulus, commonly known as the horseshoe crab, is an ancient arthropod that has remained morphologically unchanged for millions of years. It is classified as a living fossil."
    },
    {
        "id": "S148",
        "subject": "Science",
        "topic": "Biology - Excretory System",
        "difficulty": "Hard",
        "question": "The condition of accumulation of urea in the blood is known as:",
        "options": [
            "Hematuria",
            "Glycosuria",
            "Uremia",
            "Ketonuria"
        ],
        "correctIndex": 2,
        "explanation": "Uremia is a severe medical condition characterized by elevated levels of urea and other nitrogenous waste products in the blood, usually due to kidney failure. (Hematuria is blood in urine, Glycosuria is glucose in urine)."
    },
    {
        "id": "S149",
        "subject": "Science",
        "topic": "Physics - Optics",
        "difficulty": "Hard",
        "question": "Myopia (short-sightedness) is caused by the elongation of the eyeball. Which lens is used to correct it?",
        "options": [
            "Convex lens",
            "Concave lens",
            "Cylindrical lens",
            "Bifocal lens"
        ],
        "correctIndex": 1,
        "explanation": "In myopia, the image of distant objects is formed in front of the retina. A concave (diverging) lens is placed in front of the eye to diverge the incoming rays slightly, shifting the focal point backward onto the retina."
    },
    {
        "id": "S150",
        "subject": "Science",
        "topic": "Chemistry - Environmental",
        "difficulty": "Hard",
        "question": "Photochemical smog is formed primarily by the action of sunlight on:",
        "options": [
            "SO2 and particulates",
            "Oxides of nitrogen and hydrocarbons",
            "CO2 and CFCs",
            "Ozone and PAN"
        ],
        "correctIndex": 1,
        "explanation": "Photochemical smog occurs in warm, sunny, and dry climates. The main components reacting to sunlight are nitrogen oxides (NOx) and volatile organic compounds (hydrocarbons) released from vehicle exhaust, which lead to secondary pollutants like ozone and PAN (peroxyacetyl nitrate)."
    },
    {
        "id": "S183",
        "subject": "Science",
        "topic": "Biology - Neural System",
        "difficulty": "Hard",
        "question": "The resting membrane potential of a neuron is primarily maintained by:",
        "options": [
            "Passive diffusion of Na+ ions into the cell",
            "Active transport of 3 Na+ outwards and 2 K+ inwards",
            "Active transport of 2 Na+ outwards and 3 K+ inwards",
            "Passive diffusion of K+ ions into the cell"
        ],
        "correctIndex": 1,
        "explanation": "The Sodium-Potassium pump (Na+/K+ ATPase) maintains the resting membrane potential by actively transporting 3 Sodium (Na+) ions out of the cell for every 2 Potassium (K+) ions pumped into the cell, using ATP. This creates a net negative charge inside."
    },
    {
        "id": "S184",
        "subject": "Science",
        "topic": "Biology - Endocrine System",
        "difficulty": "Hard",
        "question": "Which of the following hormones is an amino-acid derivative?",
        "options": [
            "Estrogen",
            "Epinephrine",
            "Testosterone",
            "Progesterone"
        ],
        "correctIndex": 1,
        "explanation": "Epinephrine (Adrenaline) and Thyroxine are amino-acid derivatives (specifically derived from tyrosine). Estrogen, Testosterone, and Progesterone are steroid hormones derived from cholesterol."
    },
    {
        "id": "S185",
        "subject": "Science",
        "topic": "Physics - Optics",
        "difficulty": "Hard",
        "question": "An air bubble inside water behaves like a:",
        "options": [
            "Convex lens",
            "Concave lens",
            "Plano-convex lens",
            "Concave mirror"
        ],
        "correctIndex": 1,
        "explanation": "The refractive index of air (inside the bubble) is less than that of the surrounding medium (water). When light travels from a denser medium to a rarer medium through a convex surface, it diverges. Thus, the air bubble acts as a diverging (concave) lens."
    },
    {
        "id": "S186",
        "subject": "Science",
        "topic": "Physics - Work, Energy & Power",
        "difficulty": "Hard",
        "question": "A particle moves in a circular path with a decreasing speed. Which of the following is correct regarding its acceleration?",
        "options": [
            "It has only centripetal acceleration",
            "It has only tangential acceleration",
            "The angle between velocity and acceleration is strictly 90°",
            "The angle between velocity and total acceleration is greater than 90°"
        ],
        "correctIndex": 3,
        "explanation": "Since it is in a circular path, it has centripetal acceleration (a_c) pointing towards the center. Since speed is decreasing, it has tangential acceleration (a_t) pointing opposite to the velocity. The resultant acceleration vector points inward and backward, making an angle greater than 90° (obtuse) with the velocity vector."
    },
    {
        "id": "S187",
        "subject": "Science",
        "topic": "Physics - Electricity",
        "difficulty": "Hard",
        "question": "If the temperature of a semiconductor is increased, its electrical conductivity:",
        "options": [
            "Increases",
            "Decreases",
            "Remains constant",
            "First increases then decreases"
        ],
        "correctIndex": 0,
        "explanation": "Unlike metals (conductors) where resistance increases with temperature due to increased atomic collisions, in semiconductors, an increase in temperature breaks more covalent bonds. This creates more electron-hole pairs, drastically increasing the charge carrier density and thus increasing electrical conductivity."
    },
    {
        "id": "S188",
        "subject": "Science",
        "topic": "Physics - Modern Physics",
        "difficulty": "Hard",
        "question": "The phenomenon of photoelectric effect proves that:",
        "options": [
            "Light consists of electromagnetic waves",
            "Light has a particle nature",
            "Light travels at a constant speed",
            "Electrons exhibit wave nature"
        ],
        "correctIndex": 1,
        "explanation": "The photoelectric effect cannot be explained by classical wave theory (which predicts emission at any frequency given enough intensity/time). It is explained by Einstein using quantum theory, where light consists of discrete energy packets (photons/particles) that transfer energy instantaneously."
    },
    {
        "id": "S189",
        "subject": "Science",
        "topic": "Chemistry - Thermodynamics",
        "difficulty": "Hard",
        "question": "Which of the following is NOT a thermodynamic state function?",
        "options": [
            "Internal Energy (U)",
            "Enthalpy (H)",
            "Work (W)",
            "Entropy (S)"
        ],
        "correctIndex": 2,
        "explanation": "A state function depends only on the current state of the system (initial and final states), not on the path taken to reach that state. Internal Energy, Enthalpy, and Entropy are state functions. Work (W) and Heat (Q) are path functions; their values depend on the specific process path."
    },
    {
        "id": "S190",
        "subject": "Science",
        "topic": "Chemistry - Atomic Structure",
        "difficulty": "Hard",
        "question": "The number of radial nodes for a 3p orbital is:",
        "options": [
            "0",
            "1",
            "2",
            "3"
        ],
        "correctIndex": 1,
        "explanation": "The formula for the number of radial (spherical) nodes is (n - l - 1). For a 3p orbital, principal quantum number n = 3, and azimuthal quantum number l = 1. Number of radial nodes = 3 - 1 - 1 = 1."
    },
    {
        "id": "S191",
        "subject": "Science",
        "topic": "Chemistry - Electrochemistry",
        "difficulty": "Hard",
        "question": "During the charging of a lead-acid storage battery:",
        "options": [
            "PbSO4 on both the anode and cathode is converted back to Pb and PbO2",
            "Sulfuric acid is consumed",
            "The concentration of water increases",
            "Lead dioxide is reduced"
        ],
        "correctIndex": 0,
        "explanation": "During discharging, both electrodes become coated with Lead(II) sulfate (PbSO4), and sulfuric acid is consumed. During charging, the reverse happens: electrical energy forces PbSO4 at the cathode to reduce to spongy Lead (Pb), and PbSO4 at the anode to oxidize to Lead dioxide (PbO2), regenerating sulfuric acid."
    },
    {
        "id": "S192",
        "subject": "Science",
        "topic": "Chemistry - Periodic Table",
        "difficulty": "Hard",
        "question": "Which of the following elements has the highest first ionization enthalpy?",
        "options": [
            "Oxygen",
            "Nitrogen",
            "Carbon",
            "Fluorine"
        ],
        "correctIndex": 3,
        "explanation": "Generally, ionization enthalpy increases across a period. Fluorine is the most electronegative and smallest atom in the options, meaning its valence electrons are held very tightly by the nucleus, requiring the maximum energy to remove. (Note: N > O due to N's half-filled stability, but F > N)."
    },
    {
        "id": "S193",
        "subject": "Science",
        "topic": "Biology - Evolution",
        "difficulty": "Hard",
        "question": "Industrial melanism in the peppered moth (Biston betularia) is a classic example of:",
        "options": [
            "Artificial selection",
            "Directional natural selection",
            "Disruptive selection",
            "Stabilizing selection"
        ],
        "correctIndex": 1,
        "explanation": "Before the industrial revolution, light-colored moths were favored (camouflaged against lichen). Soot darkened the trees, and the environment changed directionally. The dark-colored moths gained a survival advantage, causing the population allele frequency to shift entirely in one direction. This is Directional Selection."
    },
    {
        "id": "S194",
        "subject": "Science",
        "topic": "Physics - Sound",
        "difficulty": "Hard",
        "question": "When a sound wave travels from air into water, which of its following parameters remains unchanged?",
        "options": [
            "Velocity",
            "Wavelength",
            "Frequency",
            "Amplitude"
        ],
        "correctIndex": 2,
        "explanation": "Frequency is a fundamental property of the source generating the wave. When a wave passes from one medium to another, its velocity changes (sound travels faster in water than in air). Since v = fλ and f is constant, the wavelength (λ) also changes to match the velocity change."
    },
    {
        "id": "S195",
        "subject": "Science",
        "topic": "Chemistry - States of Matter",
        "difficulty": "Hard",
        "question": "At the critical temperature, which of the following properties of a liquid and its vapor become identical?",
        "options": [
            "Viscosity",
            "Refractive Index",
            "Density",
            "All of the above"
        ],
        "correctIndex": 3,
        "explanation": "At the critical point (critical temperature and pressure), the meniscus separating the liquid and vapor phases disappears. The two phases merge into a single supercritical fluid, meaning all intense physical properties—including density, refractive index, and viscosity—become identical."
    },
    {
        "id": "S196",
        "subject": "Science",
        "topic": "Biology - Cytology",
        "difficulty": "Hard",
        "question": "Which of the following cellular organelles possesses its own circular DNA and 70S ribosomes?",
        "options": [
            "Lysosome",
            "Golgi Body",
            "Mitochondria",
            "Endoplasmic Reticulum"
        ],
        "correctIndex": 2,
        "explanation": "Mitochondria (and Chloroplasts in plants) are semi-autonomous organelles. According to the endosymbiotic theory, they originated from free-living prokaryotes. Thus, they contain their own circular, double-stranded DNA and prokaryotic-like 70S ribosomes."
    },
    {
        "id": "S197",
        "subject": "Science",
        "topic": "Physics - Electromagnetism",
        "difficulty": "Hard",
        "question": "A choke coil is preferred over a pure resistor for controlling current in an AC circuit because:",
        "options": [
            "It is cheaper",
            "It consumes very little average power",
            "It increases the frequency of AC",
            "It blocks AC completely"
        ],
        "correctIndex": 1,
        "explanation": "A pure resistor consumes real power (P = I²R) and dissipates it as heat. A choke coil is an inductor with high reactance (XL) and very low resistance. The average power consumed by a pure inductor in an AC circuit over a complete cycle is zero (P = VI cos(90°) = 0), making it highly energy-efficient for controlling AC."
    },
    {
        "id": "S198",
        "subject": "Science",
        "topic": "Chemistry - Solutions",
        "difficulty": "Hard",
        "question": "A mixture of two completely miscible liquids A and B showing a highly positive deviation from Raoult's Law will form an:",
        "options": [
            "Maximum boiling azeotrope",
            "Minimum boiling azeotrope",
            "Ideal solution",
            "Immiscible layer"
        ],
        "correctIndex": 1,
        "explanation": "A positive deviation means the A-B interactions are weaker than A-A and B-B interactions. The escaping tendency of molecules increases, causing the vapor pressure to be higher than expected. Higher vapor pressure means the mixture boils at a lower temperature than either pure component, forming a minimum boiling azeotrope (e.g., Ethanol + Water)."
    },
    {
        "id": "S199",
        "subject": "Science",
        "topic": "Biology - Immunology",
        "difficulty": "Hard",
        "question": "Active immunity is acquired through:",
        "options": [
            "Receiving pre-formed antibodies (like anti-tetanus serum)",
            "Transfer of antibodies across the placenta from mother to fetus",
            "Direct infection with a pathogen or receiving a vaccine",
            "Drinking mother's colostrum"
        ],
        "correctIndex": 2,
        "explanation": "Active immunity is developed when the host's own immune system is stimulated by an antigen (either through natural infection or an artificial vaccine) to produce antibodies and memory cells. The other three options are examples of passive immunity, where ready-made antibodies are directly given."
    },
    {
        "id": "S200",
        "subject": "Science",
        "topic": "Physics - Waves",
        "difficulty": "Hard",
        "question": "In a stationary wave, the distance between a node and the nearest antinode is:",
        "options": [
            "λ",
            "λ/2",
            "λ/4",
            "2λ"
        ],
        "correctIndex": 2,
        "explanation": "In a stationary (standing) wave, a node is a point of zero amplitude, and an antinode is a point of maximum amplitude. The distance between two consecutive nodes is λ/2. The antinode is exactly midway between two nodes, making the distance between a node and the adjacent antinode half of λ/2, which is λ/4."
    },
    {
        "id": "GS101",
        "subject": "General Studies",
        "topic": "History - Modern",
        "difficulty": "Hard",
        "question": "Which of the following Acts introduced the principle of 'Dyarchy' at the provincial level in British India?",
        "options": [
            "Indian Councils Act, 1909",
            "Government of India Act, 1919",
            "Government of India Act, 1935",
            "Indian Independence Act, 1947"
        ],
        "correctIndex": 1,
        "explanation": "The Government of India Act, 1919 (Montagu-Chelmsford Reforms) introduced Dyarchy in the provinces, dividing provincial subjects into 'Reserved' (handled by Governor) and 'Transferred' (handled by Indian ministers). Dyarchy at the center was later proposed by the 1935 Act."
    },
    {
        "id": "GS102",
        "subject": "General Studies",
        "topic": "History - Modern",
        "difficulty": "Hard",
        "question": "The 'August Offer' of 1940 was made by which Viceroy of India?",
        "options": [
            "Lord Linlithgow",
            "Lord Wavell",
            "Lord Mountbatten",
            "Lord Irwin"
        ],
        "correctIndex": 0,
        "explanation": "The August Offer was made by Viceroy Lord Linlithgow in 1940. It promised the expansion of the Executive Council to include more Indians, the establishment of an advisory war council, and recognized the right of Indians to frame their own constitution after WWII."
    },
    {
        "id": "GS103",
        "subject": "General Studies",
        "topic": "History - Ancient",
        "difficulty": "Hard",
        "question": "The famous 'Uttaramerur Inscription' of the Chola period provides detailed information regarding:",
        "options": [
            "Military conquests of Rajendra Chola",
            "Naval expeditions to Southeast Asia",
            "Village administration and local self-government",
            "Revenue collection system of the empire"
        ],
        "correctIndex": 2,
        "explanation": "The Uttaramerur inscription (dating back to Parantaka Chola I) is famous for its highly detailed description of the village assembly (Sabha) and the democratic process of local self-government, including the election of committees (Variyams) and qualifications for candidates."
    },
    {
        "id": "GS104",
        "subject": "General Studies",
        "topic": "History - Medieval",
        "difficulty": "Hard",
        "question": "During the reign of which Mughal Emperor did the Maratha leader Shivaji Maharaj escape from Agra?",
        "options": [
            "Akbar",
            "Jahangir",
            "Shah Jahan",
            "Aurangzeb"
        ],
        "correctIndex": 3,
        "explanation": "Chhatrapati Shivaji Maharaj was placed under house arrest in Agra by Mughal Emperor Aurangzeb in 1666. He famously escaped with his son Sambhaji by hiding in baskets of sweets, severely humiliating Aurangzeb and the Mughal empire."
    },
    {
        "id": "GS105",
        "subject": "General Studies",
        "topic": "History - Modern",
        "difficulty": "Hard",
        "question": "Who among the following was the founder of the 'Servants of India Society' in 1905?",
        "options": [
            "Bal Gangadhar Tilak",
            "Gopal Krishna Gokhale",
            "Annie Besant",
            "Lala Lajpat Rai"
        ],
        "correctIndex": 1,
        "explanation": "Gopal Krishna Gokhale, a senior leader of the moderate faction of the INC and the political guru of Mahatma Gandhi, founded the Servants of India Society in Pune in 1905 to unite and train Indians of different ethnicities and religions in welfare work."
    },
    {
        "id": "GS106",
        "subject": "General Studies",
        "topic": "Polity - Constitution",
        "difficulty": "Hard",
        "question": "The concept of 'Concurrent List' in the Indian Constitution was borrowed from the constitution of:",
        "options": [
            "USA",
            "Canada",
            "Australia",
            "Ireland"
        ],
        "correctIndex": 2,
        "explanation": "The Constitution of India borrowed the concept of the Concurrent List (where both Union and State governments can legislate) from the Australian Constitution. It ensures uniformity across the country on certain subjects while allowing regional adaptation."
    },
    {
        "id": "GS107",
        "subject": "General Studies",
        "topic": "Polity - Fundamental Rights",
        "difficulty": "Hard",
        "question": "Which of the following writs is issued by a higher court to a lower court to transfer a pending case to itself or to squash the order of the lower court?",
        "options": [
            "Habeas Corpus",
            "Mandamus",
            "Certiorari",
            "Quo Warranto"
        ],
        "correctIndex": 2,
        "explanation": "Certiorari means 'to be certified'. It is issued by the Supreme Court or a High Court to a lower court or tribunal to transfer a case pending with them or to squash their order in a case. It is both preventive and curative, usually issued on grounds of excess of jurisdiction or error of law."
    },
    {
        "id": "GS108",
        "subject": "General Studies",
        "topic": "Polity - Executive",
        "difficulty": "Hard",
        "question": "Which Article of the Constitution empowers the President of India to promulgate Ordinances during the recess of Parliament?",
        "options": [
            "Article 111",
            "Article 123",
            "Article 213",
            "Article 356"
        ],
        "correctIndex": 1,
        "explanation": "Article 123 of the Indian Constitution grants the President the legislative power to promulgate Ordinances when either of the two Houses of Parliament is not in session, and immediate action is required. These ordinances have the same force as an Act of Parliament. (Article 213 gives similar power to Governors)."
    },
    {
        "id": "GS109",
        "subject": "General Studies",
        "topic": "Polity - Judiciary",
        "difficulty": "Hard",
        "question": "In the context of the Supreme Court of India, what does 'Curative Petition' mean?",
        "options": [
            "A petition filed to review a judgment before it is passed",
            "A final legal remedy available after the dismissal of a Review Petition",
            "A petition to transfer a case from one High Court to another",
            "A petition filed directly by the President for legal advice"
        ],
        "correctIndex": 1,
        "explanation": "The concept of a 'Curative Petition' was evolved by the Supreme Court of India in the 'Rupa Ashok Hurra vs. Ashok Hurra' case (2002). It is the absolute last judicial resort available for grievance redressal in court, filed after a Review Petition is dismissed, to prevent gross miscarriage of justice."
    },
    {
        "id": "GS110",
        "subject": "General Studies",
        "topic": "Polity - Amendments",
        "difficulty": "Hard",
        "question": "The 97th Constitutional Amendment Act of 2011 gave constitutional status and protection to:",
        "options": [
            "Panchayati Raj Institutions",
            "Municipalities",
            "Co-operative Societies",
            "Tribal Advisory Councils"
        ],
        "correctIndex": 2,
        "explanation": "The 97th Constitutional Amendment Act gave constitutional status to Co-operative Societies. It made the right to form cooperative societies a fundamental right (Article 19), added a new Directive Principle (Article 43B), and added a new Part IX-B to the Constitution."
    },
    {
        "id": "GS111",
        "subject": "General Studies",
        "topic": "Geography - Climatology",
        "difficulty": "Hard",
        "question": "Which of the following local winds is known as the 'Doctor Wind' due to its cooling and comforting effect on the humid West African coast?",
        "options": [
            "Sirocco",
            "Harmattan",
            "Chinook",
            "Foehn"
        ],
        "correctIndex": 1,
        "explanation": "The Harmattan is a dry and dusty northeasterly trade wind that blows from the Sahara Desert over West Africa. Despite the dust, its extreme dryness provides massive relief from the oppressive tropical humidity of the Guinea coast, earning it the nickname 'The Doctor'."
    },
    {
        "id": "GS112",
        "subject": "General Studies",
        "topic": "Geography - Oceanography",
        "difficulty": "Hard",
        "question": "Which of the following ocean currents is a 'Cold Current'?",
        "options": [
            "Kuroshio Current",
            "Gulf Stream",
            "Agulhas Current",
            "Benguela Current"
        ],
        "correctIndex": 3,
        "explanation": "The Benguela Current is a broad, northward flowing cold ocean current that forms the eastern portion of the South Atlantic Ocean gyre, running along the west coast of southern Africa. Kuroshio, Gulf Stream, and Agulhas are all major warm currents."
    },
    {
        "id": "GS113",
        "subject": "General Studies",
        "topic": "Geography - India",
        "difficulty": "Hard",
        "question": "The 'Karewas' formations, which are highly useful for the cultivation of Zafran (a local variety of saffron), are found in:",
        "options": [
            "Kashmir Himalayas",
            "Garhwal Himalayas",
            "Nepal Himalayas",
            "Eastern Himalayas"
        ],
        "correctIndex": 0,
        "explanation": "Karewas are thick deposits of glacial clay and other materials embedded with moraines. They are specific to the Kashmir Valley (Kashmir Himalayas) and are famous for the cultivation of Zafran (saffron), almonds, and walnuts."
    },
    {
        "id": "GS114",
        "subject": "General Studies",
        "topic": "Geography - Physical",
        "difficulty": "Hard",
        "question": "The discontinuity between the crust and the mantle of the Earth is known as:",
        "options": [
            "Conrad Discontinuity",
            "Mohorovičić Discontinuity",
            "Repetti Discontinuity",
            "Gutenberg Discontinuity"
        ],
        "correctIndex": 1,
        "explanation": "The Mohorovičić (Moho) Discontinuity is the boundary between the Earth's crust and the underlying mantle. Seismic waves abruptly change velocity at this boundary. (Conrad separates upper/lower crust; Repetti separates upper/lower mantle; Gutenberg separates mantle/outer core)."
    },
    {
        "id": "GS115",
        "subject": "General Studies",
        "topic": "Geography - India",
        "difficulty": "Hard",
        "question": "Which of the following rivers is NOT a right-bank tributary of the Ganga?",
        "options": [
            "Yamuna",
            "Son",
            "Punpun",
            "Gandak"
        ],
        "correctIndex": 3,
        "explanation": "Yamuna, Son, and Punpun join the Ganga from the south (right bank). The Gandak, along with the Ramganga, Gomti, Ghaghara, and Kosi, originates in the Himalayas and joins the Ganga from the north (left bank)."
    },
    {
        "id": "GS116",
        "subject": "General Studies",
        "topic": "Economics",
        "difficulty": "Hard",
        "question": "In macroeconomics, the 'Phillips Curve' represents the inverse relationship between:",
        "options": [
            "Inflation and Unemployment",
            "Economic Growth and Income Inequality",
            "Tax Rates and Tax Revenue",
            "Interest Rates and Investment"
        ],
        "correctIndex": 0,
        "explanation": "The Phillips Curve is an economic concept developed by A.W. Phillips stating that inflation and unemployment have a stable and inverse relationship. As economic growth increases, inflation rises, and unemployment decreases, though this often breaks down during 'stagflation'."
    },
    {
        "id": "GS117",
        "subject": "General Studies",
        "topic": "Economics",
        "difficulty": "Hard",
        "question": "Which of the following authorities decides the 'Statutory Liquidity Ratio' (SLR) in India?",
        "options": [
            "Ministry of Finance",
            "Reserve Bank of India (RBI)",
            "Securities and Exchange Board of India (SEBI)",
            "NITI Aayog"
        ],
        "correctIndex": 1,
        "explanation": "The Reserve Bank of India (RBI), under the Banking Regulation Act, sets the Statutory Liquidity Ratio (SLR). It is the minimum percentage of deposits that commercial banks must maintain in the form of liquid cash, gold, or government-approved securities."
    },
    {
        "id": "GS118",
        "subject": "General Studies",
        "topic": "General Knowledge",
        "difficulty": "Hard",
        "question": "The 'Ramsar Convention', an international treaty, is primarily associated with the conservation of:",
        "options": [
            "Ozone Layer",
            "Endangered Species",
            "Wetlands",
            "Coral Reefs"
        ],
        "correctIndex": 2,
        "explanation": "The Ramsar Convention on Wetlands of International Importance is an international treaty for the conservation and sustainable use of wetlands. It is named after the city of Ramsar in Iran, where the convention was signed in 1971."
    },
    {
        "id": "GS119",
        "subject": "General Studies",
        "topic": "Defense",
        "difficulty": "Hard",
        "question": "The 'BrahMos' missile, jointly developed by India and Russia, is a:",
        "options": [
            "Subsonic cruise missile",
            "Supersonic cruise missile",
            "Intercontinental ballistic missile",
            "Anti-tank guided missile"
        ],
        "correctIndex": 1,
        "explanation": "BrahMos is a medium-range ramjet supersonic cruise missile that can be launched from submarines, ships, aircraft, or land. It is currently the fastest supersonic cruise missile in the world, flying at speeds of Mach 2.8 to 3.0."
    },
    {
        "id": "GS120",
        "subject": "General Studies",
        "topic": "General Knowledge",
        "difficulty": "Hard",
        "question": "Which Indian state shares its borders with three countries: Nepal, Bhutan, and China?",
        "options": [
            "Arunachal Pradesh",
            "West Bengal",
            "Uttarakhand",
            "Sikkim"
        ],
        "correctIndex": 3,
        "explanation": "Sikkim is a landlocked state situated in the Himalayas. It is bordered by Nepal to the west, China's Tibet Autonomous Region to the north and east, and Bhutan to the east. The Indian state of West Bengal lies to its south."
    },
    {
        "id": "GS121",
        "subject": "General Studies",
        "topic": "History - Ancient",
        "difficulty": "Hard",
        "question": "The ancient text 'Mudrarakshasa' written by Vishakhadatta deals with which historical event?",
        "options": [
            "The military campaigns of Samudragupta",
            "The socio-economic conditions during the Harsha Empire",
            "The ascent of Chandragupta Maurya to power by overthrowing the Nandas",
            "The philosophical debates between Buddhists and Brahmins"
        ],
        "correctIndex": 2,
        "explanation": "Mudrarakshasa is a Sanskrit historical play by Vishakhadatta that narrates the political maneuvering and ascent of king Chandragupta Maurya to power in India, assisted by his brilliant mentor Chanakya, overthrowing the Nanda dynasty."
    },
    {
        "id": "GS122",
        "subject": "General Studies",
        "topic": "History - Medieval",
        "difficulty": "Hard",
        "question": "In the context of the Delhi Sultanate, what was 'Iqta'?",
        "options": [
            "A religious tax levied on non-Muslims",
            "A cavalry unit maintained by nobles",
            "A territorial assignment given to military commanders in lieu of salary",
            "A specific type of silver coin introduced by Iltutmish"
        ],
        "correctIndex": 2,
        "explanation": "The Iqta system was a unique agrarian and administrative system in the Delhi Sultanate. Lands (Iqtas) were assigned to nobles and military commanders (Iqtadars), who collected revenue from the land, kept a portion for their salary and troops, and remitted the surplus to the Sultan."
    },
    {
        "id": "GS123",
        "subject": "General Studies",
        "topic": "History - Modern",
        "difficulty": "Hard",
        "question": "The Ilbert Bill Controversy (1883) during the viceroyalty of Lord Ripon was regarding:",
        "options": [
            "The introduction of vernacular languages in universities",
            "The removal of disqualification on Indian judges to try European offenders",
            "The reduction of the age limit for the Indian Civil Services exam",
            "The imposition of heavy taxes on indigenous cotton mills"
        ],
        "correctIndex": 1,
        "explanation": "The Ilbert Bill proposed to amend the Criminal Procedure Code to allow Indian magistrates and judges to try British/European subjects in criminal cases. It faced massive racist opposition from Europeans in India, forcing Lord Ripon to heavily compromise the bill."
    },
    {
        "id": "GS124",
        "subject": "General Studies",
        "topic": "History - Modern",
        "difficulty": "Hard",
        "question": "The 'Tebhaga Movement' (1946) was a peasant uprising that occurred primarily in:",
        "options": [
            "Punjab",
            "Bengal",
            "Kerala",
            "Awadh"
        ],
        "correctIndex": 1,
        "explanation": "The Tebhaga movement was a significant peasant agitation initiated in Bengal by the Kisan Sabha (peasant front of the Communist Party of India) in 1946. The sharecroppers demanded that the landlords' share of the harvest be reduced from one-half to one-third (tebhaga means two-thirds for the peasant)."
    },
    {
        "id": "GS125",
        "subject": "General Studies",
        "topic": "History - Modern",
        "difficulty": "Hard",
        "question": "Which Indian revolutionary threw a bomb in the Central Legislative Assembly in Delhi in 1929 along with Bhagat Singh?",
        "options": [
            "Chandrashekhar Azad",
            "Sukhdev",
            "Rajguru",
            "Batukeshwar Dutt"
        ],
        "correctIndex": 3,
        "explanation": "On April 8, 1929, Bhagat Singh and Batukeshwar Dutt threw non-lethal smoke bombs into the corridors of the Central Legislative Assembly to protest against the draconian Public Safety Bill and the Trade Dispute Act, shouting 'Inquilab Zindabad'."
    },
    {
        "id": "GS126",
        "subject": "General Studies",
        "topic": "Polity - Constitution",
        "difficulty": "Hard",
        "question": "Which Schedule of the Indian Constitution contains provisions related to the administration of Scheduled Areas and Scheduled Tribes (excluding certain NE states)?",
        "options": [
            "Fifth Schedule",
            "Sixth Schedule",
            "Seventh Schedule",
            "Ninth Schedule"
        ],
        "correctIndex": 0,
        "explanation": "The Fifth Schedule of the Indian Constitution deals with the administration and control of Scheduled Areas and Scheduled Tribes in states other than Assam, Meghalaya, Tripura, and Mizoram. The administration of these specific four North-Eastern states falls under the Sixth Schedule."
    },
    {
        "id": "GS127",
        "subject": "General Studies",
        "topic": "Polity - Fundamental Rights",
        "difficulty": "Hard",
        "question": "The Right to Property, which was originally a Fundamental Right under Article 31, was removed and made a legal right under Article 300A by which Amendment?",
        "options": [
            "42nd Amendment Act (1976)",
            "44th Amendment Act (1978)",
            "73rd Amendment Act (1992)",
            "86th Amendment Act (2002)"
        ],
        "correctIndex": 1,
        "explanation": "The 44th Constitutional Amendment Act, enacted by the Morarji Desai government in 1978, abolished the Right to Property as a Fundamental Right to prevent excessive litigation stalling public infrastructure projects, shifting it to a constitutional/legal right under Article 300A."
    },
    {
        "id": "GS128",
        "subject": "General Studies",
        "topic": "Polity - Parliament",
        "difficulty": "Hard",
        "question": "In the parliamentary proceedings of India, what is the maximum duration of the 'Zero Hour'?",
        "options": [
            "30 minutes",
            "1 hour",
            "2 hours",
            "There is no fixed maximum duration specified in the rules"
        ],
        "correctIndex": 3,
        "explanation": "Unlike the Question Hour, the Zero Hour is an Indian innovation and is not formally mentioned in the Rules of Procedure. It starts immediately after the Question Hour. While informally it usually lasts for an hour, technically there is no strict maximum duration specified in parliamentary rulebooks."
    },
    {
        "id": "GS129",
        "subject": "General Studies",
        "topic": "Polity - Federalism",
        "difficulty": "Hard",
        "question": "The Inter-State Council in India was established in 1990 based on the recommendations of which commission?",
        "options": [
            "Kothari Commission",
            "Sarkaria Commission",
            "Punchhi Commission",
            "Rajamannar Committee"
        ],
        "correctIndex": 1,
        "explanation": "The Sarkaria Commission, appointed to review center-state relations in 1983, strongly recommended the establishment of a permanent Inter-State Council under Article 263 of the Constitution. It was subsequently formed by a Presidential Order in 1990."
    },
    {
        "id": "GS130",
        "subject": "General Studies",
        "topic": "Polity - Judiciary",
        "difficulty": "Hard",
        "question": "The 'Basic Structure Doctrine' limiting the amending power of the Parliament was laid down by the Supreme Court in which landmark case?",
        "options": [
            "Golaknath Case (1967)",
            "Kesavananda Bharati Case (1973)",
            "Minerva Mills Case (1980)",
            "S.R. Bommai Case (1994)"
        ],
        "correctIndex": 1,
        "explanation": "In the historic Kesavananda Bharati vs. State of Kerala case (1973), a 13-judge bench of the Supreme Court ruled that while Parliament has wide powers to amend the Constitution (Article 368), it cannot alter or destroy its 'Basic Structure' (e.g., secularism, federalism, judicial review)."
    },
    {
        "id": "GS131",
        "subject": "General Studies",
        "topic": "Geography - Climatology",
        "difficulty": "Hard",
        "question": "What is 'Albedo' in the context of physical geography?",
        "options": [
            "The specific heat capacity of ocean water",
            "The measure of the diffuse reflection of solar radiation out of the total solar radiation received by an astronomical body",
            "The rate at which temperature decreases with increasing altitude",
            "A type of violent atmospheric storm found in the mid-latitudes"
        ],
        "correctIndex": 1,
        "explanation": "Albedo is the fraction of solar energy (shortwave radiation) reflected from the Earth back into space. It is a measure of the reflectivity of the earth's surface. Ice and snow have a very high albedo, while oceans and forests have a low albedo."
    },
    {
        "id": "GS132",
        "subject": "General Studies",
        "topic": "Geography - India",
        "difficulty": "Hard",
        "question": "The 'Rohtang Pass', critical for military transport, connects the Kullu Valley with:",
        "options": [
            "Kashmir Valley",
            "Lahaul and Spiti Valleys",
            "Kathmandu Valley",
            "Zanskar Valley"
        ],
        "correctIndex": 1,
        "explanation": "Rohtang Pass (elevation 3,978 m) is a high mountain pass on the eastern Pir Panjal Range of the Himalayas around 51 km from Manali. It crucially connects the Kullu Valley with the Lahaul and Spiti Valleys of Himachal Pradesh."
    },
    {
        "id": "GS133",
        "subject": "General Studies",
        "topic": "Geography - World",
        "difficulty": "Hard",
        "question": "The Strait of Hormuz connects which two major water bodies?",
        "options": [
            "Red Sea and Gulf of Aden",
            "Persian Gulf and Gulf of Oman",
            "Mediterranean Sea and Atlantic Ocean",
            "Black Sea and Sea of Marmara"
        ],
        "correctIndex": 1,
        "explanation": "The Strait of Hormuz is a strategically highly important strait between the Persian Gulf and the Gulf of Oman. It is the only sea passage from the Persian Gulf to the open ocean and is one of the world's most important oil chokepoints."
    },
    {
        "id": "GS134",
        "subject": "General Studies",
        "topic": "Geography - Geomorphology",
        "difficulty": "Hard",
        "question": "Which of the following is an example of a 'Block Mountain' formed by faulting?",
        "options": [
            "The Himalayas",
            "The Andes",
            "The Vosges",
            "The Rockies"
        ],
        "correctIndex": 2,
        "explanation": "Block mountains form when large areas of bedrock are broken by faults, causing large blocks of land to be displaced vertically. The Vosges mountains in France and the Black Forest in Germany are classic examples of block mountains (horsts) separated by a rift valley (graben)."
    },
    {
        "id": "GS135",
        "subject": "General Studies",
        "topic": "Geography - Soil",
        "difficulty": "Hard",
        "question": "Laterite soils in India are widely known for being rich in iron and aluminum, but they are critically deficient in:",
        "options": [
            "Silica only",
            "Nitrogen, Potash, and Organic matter",
            "Calcium and Magnesium",
            "Iron oxides"
        ],
        "correctIndex": 1,
        "explanation": "Laterite soils develop in areas with high temperature and heavy rainfall (intense leaching). While rich in iron oxide and aluminum (making them hard and brick-like), they are severely deficient in organic matter, nitrogen, phosphate, and calcium, making them generally poor for agriculture without heavy fertilizers."
    },
    {
        "id": "GS136",
        "subject": "General Studies",
        "topic": "Defense",
        "difficulty": "Hard",
        "question": "Which of the following lines demarks the boundary between India and China specifically in the eastern sector (Arunachal Pradesh)?",
        "options": [
            "Radcliffe Line",
            "Durand Line",
            "McMahon Line",
            "Line of Control (LoC)"
        ],
        "correctIndex": 2,
        "explanation": "The McMahon Line is the effective boundary between China and India, specifically delineating the eastern Himalayan region (Tibet and Northeast India/Arunachal Pradesh). It was proposed by Sir Henry McMahon at the 1914 Simla Convention."
    },
    {
        "id": "GS137",
        "subject": "General Studies",
        "topic": "General Knowledge",
        "difficulty": "Hard",
        "question": "The 'Sengol', recently installed in the new Parliament building of India, is historically associated with which ancient empire?",
        "options": [
            "Mauryan Empire",
            "Gupta Empire",
            "Chola Empire",
            "Vijayanagara Empire"
        ],
        "correctIndex": 2,
        "explanation": "The Sengol is a historical silver sceptre, plated with gold, passed down through the Chola dynasty as a symbol of 'transfer of power' and righteous rule (dharma). It was first given to Jawaharlal Nehru in 1947 by the priests of the Thiruvaduthurai Adheenam (a Saivite matha) to symbolize independence."
    },
    {
        "id": "GS138",
        "subject": "General Studies",
        "topic": "Defense",
        "difficulty": "Hard",
        "question": "Project 15B of the Indian Navy is related to the construction of:",
        "options": [
            "Nuclear Submarines",
            "Guided Missile Destroyers",
            "Aircraft Carriers",
            "Frigates"
        ],
        "correctIndex": 1,
        "explanation": "Project 15B (the Visakhapatnam-class) is a class of stealth guided-missile destroyers currently being built for the Indian Navy. Ships in this class include INS Visakhapatnam, INS Mormugao, INS Imphal, and INS Surat."
    },
    {
        "id": "GS139",
        "subject": "General Studies",
        "topic": "General Knowledge",
        "difficulty": "Hard",
        "question": "In the context of international organizations, what is the 'G20 Troika'?",
        "options": [
            "The three largest economies in the G20",
            "The previous, current, and incoming presidencies of the G20",
            "The three founding nations of the G20",
            "A special military alliance within the G20"
        ],
        "correctIndex": 1,
        "explanation": "The G20 does not have a permanent secretariat. Its agenda and work are coordinated by representatives of the past, present, and future chairs, known collectively as the Troika, ensuring continuity in the G20's agenda."
    },
    {
        "id": "GS140",
        "subject": "General Studies",
        "topic": "General Knowledge",
        "difficulty": "Hard",
        "question": "The UN Security Council has 5 permanent members with veto power. Which of the following is NOT one of them?",
        "options": [
            "France",
            "United Kingdom",
            "Russia",
            "Germany"
        ],
        "correctIndex": 3,
        "explanation": "The 5 permanent members (P5) of the United Nations Security Council are China, France, Russia, the United Kingdom, and the United States. Germany, despite being a major global economy, is not a permanent member."
    },
    {
        "id": "GS141",
        "subject": "General Studies",
        "topic": "History - Ancient",
        "difficulty": "Hard",
        "question": "In the context of ancient Indian history, 'Sreni' refers to:",
        "options": [
            "A guild or association of merchants and artisans",
            "A unit of land measurement during the Gupta period",
            "A sacred ritual performed by Vedic priests",
            "A military rank in the Mauryan army"
        ],
        "correctIndex": 0,
        "explanation": "Srenis were complex, highly organized guilds of merchants, artisans, and craftsmen in ancient India. They had their own laws, immense economic power, and acted as banks, protecting members and regulating trade and prices."
    },
    {
        "id": "GS142",
        "subject": "General Studies",
        "topic": "Polity - Constitution",
        "difficulty": "Hard",
        "question": "Who among the following holds office 'during the pleasure of the President'?",
        "options": [
            "Comptroller and Auditor General of India",
            "Chief Election Commissioner",
            "Governor of a State",
            "Judge of the Supreme Court"
        ],
        "correctIndex": 2,
        "explanation": "According to Article 156 of the Constitution, the Governor of a State holds office during the pleasure of the President. The CAG, CEC, and Supreme Court Judges have security of tenure and can only be removed through a stringent impeachment-like process by Parliament."
    },
    {
        "id": "GS143",
        "subject": "General Studies",
        "topic": "Geography - India",
        "difficulty": "Hard",
        "question": "The 'Saddle Peak', the highest peak of Andaman and Nicobar Islands, is located in:",
        "options": [
            "Great Nicobar",
            "Middle Andaman",
            "Little Andaman",
            "North Andaman"
        ],
        "correctIndex": 3,
        "explanation": "Saddle Peak, reaching an elevation of 731 meters, is the highest point in the Andaman and Nicobar Islands. It is located on North Andaman Island within the Saddle Peak National Park."
    },
    {
        "id": "GS144",
        "subject": "General Studies",
        "topic": "History - Modern",
        "difficulty": "Hard",
        "question": "Who was the founder of the 'Satya Shodhak Samaj' in 1873?",
        "options": [
            "B.R. Ambedkar",
            "Jyotirao Phule",
            "Swami Vivekananda",
            "Raja Ram Mohan Roy"
        ],
        "correctIndex": 1,
        "explanation": "Jyotirao Phule founded the Satyashodhak Samaj (Truth Seekers' Society) in Pune, Maharashtra, in 1873. Its primary mission was education, increased social rights, and political access for underprivileged groups, especially women, Shudras, and Dalits."
    },
    {
        "id": "GS145",
        "subject": "General Studies",
        "topic": "Economics",
        "difficulty": "Hard",
        "question": "If the Reserve Bank of India wants to increase the money supply in the economy, it will most likely:",
        "options": [
            "Increase the Cash Reserve Ratio (CRR)",
            "Sell government securities in the open market",
            "Decrease the Repo Rate",
            "Increase the Bank Rate"
        ],
        "correctIndex": 2,
        "explanation": "Decreasing the Repo Rate makes borrowing cheaper for commercial banks. They pass this on to consumers via lower interest rates on loans, which encourages borrowing and investment, thereby increasing the money supply in the economy. (Increasing CRR/Bank Rate or selling securities would absorb liquidity and decrease money supply)."
    },
    {
        "id": "GS146",
        "subject": "General Studies",
        "topic": "Polity - Local Government",
        "difficulty": "Hard",
        "question": "The mandatory reservation of one-third of seats for women in Panchayati Raj institutions was introduced by which Constitutional Amendment?",
        "options": [
            "71st Amendment Act",
            "72nd Amendment Act",
            "73rd Amendment Act",
            "74th Amendment Act"
        ],
        "correctIndex": 2,
        "explanation": "The 73rd Constitutional Amendment Act (1992) revolutionized local self-government in rural India by mandating the creation of a three-tier Panchayati Raj system. Crucially, it mandated that at least one-third of all seats and chairperson positions be reserved for women."
    },
    {
        "id": "GS147",
        "subject": "General Studies",
        "topic": "Geography - World",
        "difficulty": "Hard",
        "question": "The 'Sargasso Sea' is unique because:",
        "options": [
            "It has the highest salinity of any sea",
            "It is entirely frozen year-round",
            "It has no land boundaries",
            "It is the deepest point in the Atlantic Ocean"
        ],
        "correctIndex": 2,
        "explanation": "The Sargasso Sea is a vast region within the North Atlantic Ocean that is completely surrounded by ocean currents (the North Atlantic Gyre) rather than landmasses. It is famous for its distinct, deep blue water and dense mats of free-floating Sargassum seaweed."
    },
    {
        "id": "GS148",
        "subject": "General Studies",
        "topic": "History - Modern",
        "difficulty": "Hard",
        "question": "The 'Wood's Despatch' of 1854 is primarily associated with reforms in:",
        "options": [
            "Military organization",
            "Revenue collection",
            "Educational system",
            "Railway expansion"
        ],
        "correctIndex": 2,
        "explanation": "Wood's Despatch (drafted by Charles Wood) is widely considered the 'Magna Carta of English Education in India'. It recommended the creation of a structured educational hierarchy, from primary schools teaching in vernacular languages to universities (like Calcutta, Bombay, Madras) teaching in English."
    },
    {
        "id": "GS149",
        "subject": "General Studies",
        "topic": "Polity - Fundamental Duties",
        "difficulty": "Hard",
        "question": "The Fundamental Duties in the Indian Constitution were added upon the recommendation of the:",
        "options": [
            "Sarkaria Commission",
            "Swaran Singh Committee",
            "Kothari Commission",
            "Punchhi Commission"
        ],
        "correctIndex": 1,
        "explanation": "The Swaran Singh Committee was set up during the National Emergency in 1976. Based on its recommendations, the 42nd Amendment Act added Part IV-A (Article 51A) to the Constitution, initially specifying 10 Fundamental Duties for citizens (an 11th was added later in 2002)."
    },
    {
        "id": "GS150",
        "subject": "General Studies",
        "topic": "General Knowledge",
        "difficulty": "Hard",
        "question": "In India, the 'Highest Peacetime Gallantry Award' is the:",
        "options": [
            "Param Vir Chakra",
            "Maha Vir Chakra",
            "Ashoka Chakra",
            "Shaurya Chakra"
        ],
        "correctIndex": 2,
        "explanation": "The Ashoka Chakra is India's highest peacetime military decoration awarded for valor, courageous action, or self-sacrifice away from the battlefield. (The Param Vir Chakra is the highest wartime gallantry award)."
    }
];

// Auto-push into ndaData.quizBank if already defined
if (typeof ndaData !== 'undefined' && ndaData.quizBank) {
    ndaData.quizBank.push(...ndaScienceGsHardQuestions);
}
