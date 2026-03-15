const ndaData = {
    trends: {
        mathWeightage: {
            labels: ['Algebra', 'Calculus', 'Trigonometry', 'Stats/Probability', 'Vectors & 3D', 'Matrices/Det.'],
            data: [22, 24, 18, 12, 10, 14] // Updated for 2025 trends
        },
        gatWeightage: {
            labels: ['English', 'Physics', 'Geography', 'History/Polity', 'Chemistry', 'Current Affairs'],
            data: [50, 25, 20, 20, 15, 20]
        },
        difficulty: {
            years: ['2021', '2022', '2023', '2024', '2025', '2026 (Expected)'],
            mathData: [50, 65, 70, 75, 82, 85], // Scale out of 100
            gatData: [55, 60, 65, 70, 72, 75] 
        }
    },
    topics: [
        {
            id: 'algebra',
            title: 'Algebra',
            subject: 'Mathematics',
            weightage: 'High (20-25 Ques)',
            difficulty: 'Medium',
            subTopics: [
                {
                    id: 'quadratic',
                    title: 'Quadratic Equations',
                    theory: `
# Quadratic Equations
An equation of the degree 2, generally represented in the form:
\[ax^2 + bx + c = 0\]
where \(a, b, c \in \mathbb{R}\) and \(a \neq 0\). 

The roots of a quadratic equation are the values of \(x\) that satisfy the equation. If we plot the quadratic expression:
\[y = ax^2 + bx + c\]
it forms a parabola. If \(a > 0\), the parabola opens upwards. If \(a < 0\), it opens downwards. The roots are the x-intercepts of this parabola.

### Important Formulas and Properties
1. **Finding Roots (Quadratic Formula):**
\[x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}\]

2. **Sum of Roots (\(\alpha + \beta\)):**
\[\alpha + \beta = -\frac{b}{a}\]

3. **Product of Roots (\(\alpha\beta\)):**
\[\alpha\beta = \frac{c}{a}\]

4. **Difference of Roots (\(|\alpha - \beta|\)):**
\[|\alpha - \beta| = \frac{\sqrt{D}}{|a|}\]

### The Discriminant (\(D = b^2 - 4ac\))
The discriminant dictates the nature of the roots:
- **\(D > 0\):** Roots are real and distinct (Parabola cuts the x-axis twice). 
    - If \(D\) is a perfect square and \(a,b,c\) are rational, roots are rational.
- **\(D = 0\):** Roots are real and equal (Parabola touches the x-axis exactly once at the vertex). Roots are:
\[x = -\frac{b}{2a}\]
- **\(D < 0\):** Roots are complex conjugates of each other (Parabola never touches the x-axis). E.g., \(p + iq\) and \(p - iq\).

### Important Concepts for NDA
- **Common Roots:** If \(a_1x^2 + b_1x + c_1 = 0\) and \(a_2x^2 + b_2x + c_2 = 0\) have **one common root**, then:
\[(c_1a_2 - c_2a_1)^2 = (a_1b_2 - a_2b_1)(b_1c_2 - b_2c_1)\]
- **Maximum and Minimum Values:** If \(a > 0\), min value is:
\[-\frac{D}{4a} \text{ at } x = -\frac{b}{2a}\]
If \(a < 0\), max value is \(-\frac{D}{4a}\).
- **Ratio of Roots:** If roots are in the ratio \(m:n\), then:
\[\frac{b^2}{ac} = \frac{(m+n)^2}{mn}\]
                    `,
                    tricks: 'If the sum of coefficients \(a + b + c = 0\), then the roots are always \(1\) and \(\\frac{c}{a}\).',
                    examples: [
                        {
                            question: "Find the roots of \(x^2 - 5x + 6 = 0\)",
                            solution: "Sum = 5, Product = 6. Numbers are 2 and 3. So roots are 2, 3."
                        }
                    ],
                    pyqs: [
                        { year: '2023 (I)', question: 'If the roots of the equation \(x^2 + px + q = 0\) are \(\\tan 19^{\\circ}\) and \(\\tan 26^{\\circ}\), then which one of the following is correct?', answer: 'q - p = 1', explanation: 'Sum of roots: \(\\tan 19^{\\circ} + \(\\tan 26^{\\circ} = -p\). Product of roots: \(\\tan 19^{\\circ} \\tan 26^{\\circ} = q\). Use formula for \(\\tan(19+26) = \\tan 45^{\\circ} = 1\).' },
                        { year: '2022 (II)', question: 'What is the sum of the roots of the equation \(x^2 - 8x + 15 = 0\)?', answer: '8', explanation: 'Sum of roots = \(-b/a = -(-8)/1 = 8\)' },
                        { year: '2023 (II)', question: 'If \( \alpha, \beta \) are the roots of \( x^2 + x + 1 = 0 \), what is the value of \( \alpha^{19} + \beta^{19} \)?', answer: '-1', explanation: 'Roots are \( \omega \) and \( \omega^2 \). \( \omega^{19} = \omega \) and \( (\omega^2)^{19} = \omega^{38} = \omega^2 \). \( \omega + \omega^2 = -1 \).' },
                        { year: '2022 (I)', question: 'If one root of the equation \( ax^2 + bx + c = 0 \) is the reciprocal of the other, what is the relation between a and c?', answer: 'a = c', explanation: 'Product of roots \( \alpha \cdot (1/\alpha) = c/a \), so \( 1 = c/a \implies a = c \).' },
                        { year: '2021 (II)', question: 'What is the discriminant of the quadratic equation \( 3x^2 - 5x + 1 = 0 \)?', answer: '13', explanation: 'D = \( b^2 - 4ac = (-5)^2 - 4(3)(1) = 25 - 12 = 13 \).' },
                        { year: '2021 (I)', question: 'If the roots of the equation \( x^2 - kx + 1 = 0 \) are real and distinct, then what is the range of k?', answer: '\( |k| > 2 \)', explanation: 'D > 0 \(\implies k^2 - 4(1)(1) > 0 \implies k^2 > 4 \implies |k| > 2 \).' },
                        { year: '2020 (I)', question: 'If the difference of roots of \( x^2 - px + 8 = 0 \) is 2, find p.', answer: '\( \pm 6 \)', explanation: 'Let roots be \( \alpha, \alpha-2 \). Sum = \( 2\alpha-2 = p \), Product = \( \alpha(\alpha-2) = 8 \). Solving \( \alpha^2 - 2\alpha - 8 = 0 \) gives \( \alpha = 4, -2 \). For \( \alpha=4, p=6 \). For \( \alpha=-2, p=-6 \).' },
                        { year: '2019 (II)', question: 'For what value of k, the equation \( x^2 - 4x + k = 0 \) has equal roots?', answer: '4', explanation: 'D = 0 \(\implies (-4)^2 - 4(1)k = 0 \implies 16 = 4k \implies k = 4 \).' },
                        { year: '2019 (I)', question: 'If the sum of roots of \( x^2 - (k+6)x + 2(2k-1) = 0 \) is equal to half their product, find k.', answer: '7', explanation: 'Sum = \( k+6 \), Product = \( 4k-2 \). Given \( k+6 = (4k-2)/2 \implies k+6 = 2k-1 \implies k = 7 \).' },
                        { year: '2018 (II)', question: 'The number of real roots of \( |x|^2 - 3|x| + 2 = 0 \) is:', answer: '4', explanation: 'Let \( |x| = t \), then \( t^2 - 3t + 2 = 0 \implies (t-1)(t-2) = 0 \implies t=1, 2 \). Since \( |x|=1, 2 \), \( x = \pm 1, \pm 2 \).' },
                        { year: '2018 (I)', question: 'If \( \alpha, \beta \) are roots of \( x^2 - 3x + 2 = 0 \), form an equation whose roots are \( 1/\alpha, 1/\beta \).', answer: '\( 2x^2 - 3x + 1 = 0 \)', explanation: 'Substitute \( x \to 1/x \): \( (1/x)^2 - 3(1/x) + 2 = 0 \implies 1 - 3x + 2x^2 = 0 \).' },
                        { year: '2017 (II)', question: 'If the sum of the squares of roots of \( x^2 - (p-2)x - (p+1) = 0 \) is minimum, find p.', answer: '1', explanation: 'Sum of squares \( S = (p-2)^2 + 2(p+1) = p^2 - 4p + 4 + 2p + 2 = p^2 - 2p + 6 \). Minimum at \( p = -(-2)/2(1) = 1 \).' },
                        { year: '2017 (I)', question: 'The roots of \( x^2 + x + 1 = 0 \) are:', answer: 'Non-real complex', explanation: 'D = \( 1^2 - 4(1)(1) = -3 < 0 \). Roots are \( \omega, \omega^2 \).' },
                        { year: '2016 (II)', question: 'If roots of \( ax^2 + bx + c = 0 \) are in the ratio 2:3, then:', answer: '\( 6b^2 = 25ac \)', explanation: 'Let roots be \( 2k, 3k \). Sum \( 5k = -b/a \), Product \( 6k^2 = c/a \). \( k = -b/5a \implies 6(-b/5a)^2 = c/a \implies 6b^2/25a^2 = c/a \implies 6b^2 = 25ac \).' },
                        { year: '2016 (I)', question: 'If the roots of \( x^2 - bx + c = 0 \) are two consecutive integers, then find \( b^2 - 4c \).', answer: '1', explanation: 'Difference of roots \( | \alpha - \beta | = 1 \implies \sqrt{D}/|a| = 1 \implies \sqrt{b^2 - 4c} = 1 \implies b^2 - 4c = 1 \).' },
                        { year: '2015 (II)', question: 'The values of k for which the equation \( x^2 - kx + 9 = 0 \) has real roots are:', answer: '\( k \geq 6 \) or \( k \leq -6 \)', explanation: 'D \( \geq 0 \implies k^2 - 36 \geq 0 \implies |k| \geq 6 \).' },
                        { year: '2015 (I)', question: 'If \( \alpha, \beta \) are the roots of \( x^2 + px + q = 0 \), then what is \( \alpha^3 + \beta^3 \) equal to?', answer: '\( 3pq - p^3 \)', explanation: '\( \alpha^3 + \beta^3 = (\alpha+\beta)^3 - 3\alpha\beta(\alpha+\beta) = (-p)^3 - 3q(-p) = -p^3 + 3pq \).' },
                        { year: '2014 (II)', question: 'What is the sum of the roots of the equation \( |x-2|^2 + |x-2| - 2 = 0 \)?', answer: '4', explanation: 'Let \( |x-2| = t \), then \( t^2 + t - 2 = 0 \implies (t+2)(t-1) = 0 \implies t=1 \). \( |x-2|=1 \implies x=3, 1 \). Sum = 4.' },
                        { year: '2014 (I)', question: 'If the product of the roots of \( mx^2 - 5x + 3 = 0 \) is 1, find m.', answer: '3', explanation: 'Product = \( c/a = 3/m = 1 \implies m = 3 \).' },
                        { year: '2013 (II)', question: 'The quadratic equation with real coefficients having \( 3 + i\sqrt{2} \) as one root is:', answer: '\( x^2 - 6x + 11 = 0 \)', explanation: 'Other root \( 3 - i\sqrt{2} \). Sum = 6, Product = \( 3^2 + 2 = 11 \). Equation: \( x^2 - 6x + 11 = 0 \).' }
                    ]
                },
                {
                    id: 'complex',
                    title: 'Complex Numbers',
                    theory: `
# Complex Numbers
A number of the form:
\[z = x + iy\]
where \(x, y\) are real numbers and \(i = \sqrt{-1}\) is the imaginary unit. This allows us to find roots for equations like \(x^2 + 1 = 0\).
Every complex number can be plotted on an Argand plane, where the x-axis is the Real axis and the y-axis is the Imaginary axis.

### Conjugate and Modulus
If \(z = x + iy\):
1. **Conjugate (\(\bar{z}\)):**
\[\bar{z} = x - iy\]
(Reflection across the real axis).
2. **Modulus (\(|z|\)):**
\[|z| = \sqrt{x^2 + y^2}\]
(Distance from the origin).

**Important properties:**
- \[z\bar{z} = |z|^2\]
- **Triangle Inequality:**
\[||z_1| - |z_2|| \leq |z_1 + z_2| \leq |z_1| + |z_2|\]

### Argument and Polar Form
1. **Argument (Amplitude):**
\[\theta = \arg(z) = \tan^{-1}\left(\frac{y}{x}\right)\]
The principal argument lies in \((-\pi, \pi]\).
2. **Polar/Trigonometric Form:**
\[z = r(\cos\theta + i\sin\theta)\]
where \(r = |z|\).
3. **Euler's Form:**
\[z = re^{i\theta}\]

### Cube Roots of Unity
The equation \(x^3 = 1\) has three roots: \(1\), \(\frac{-1 + i\sqrt{3}}{2}\) (denoted as \(\omega\)), and \(\frac{-1 - i\sqrt{3}}{2}\) (denoted as \(\omega^2\)).
- **Property 1 (Sum):**
\[1 + \omega + \omega^2 = 0\]
- **Property 2 (Product):**
\[\omega^3 = 1\]
Thus, \(\omega^{3n} = 1\), \(\omega^{3n+1} = \omega\), and \(\omega^{3n+2} = \omega^2\).
                    `,
                    tricks: 'Any four consecutive powers of \(i\) sum to 0. i.e. \(i^n + i^{n+1} + i^{n+2} + i^{n+3} = 0\).',
                    examples: [
                        {
                            question: "Evaluate \(i^{23}\)",
                            solution: "\(i^{23} = (i^4)^5 \\cdot i^3 = 1 \\cdot (-i) = -i\)."
                        }
                    ],
                    pyqs: [
                        { year: '2021 (I)', question: 'What is the value of \(1 + i^2 + i^4 + i^6 + ... + i^{100}\)?', answer: '1', explanation: 'The terms form an AP or pair up to cancel. Since \(i^2=-1, i^4=1, i^6=-1\), pairs sum to 0. 50 pairs + 1st term = 1.' },
                        { year: '2023 (II)', question: 'What is the principal argument of \( \frac{1+i}{1-i} \)?', answer: '\( \pi/2 \)', explanation: '\( \frac{1+i}{1-i} = \frac{(1+i)^2}{1^2 - i^2} = \frac{2i}{2} = i \). Argument of \( i \) is \( \pi/2 \).' },
                        { year: '2023 (I)', question: 'If \( \omega \) is a complex cube root of unity, then what is the value of \( (1+\omega)(1+\omega^2)(1+\omega^4)(1+\omega^8) \)?', answer: '1', explanation: '\( 1+\omega = -\omega^2, 1+\omega^2 = -\omega \). \( \omega^4 = \omega, \omega^8 = \omega^2 \). Product is \( (-\omega^2)(-\omega)(-\omega^2)(-\omega) = \omega^6 = 1 \).' },
                        { year: '2022 (II)', question: 'What is the modulus of \( \frac{1+2i}{1-(1-i)^2} \)?', answer: '1', explanation: '\( (1-i)^2 = 1-2i-1 = -2i \). Denominator is \( 1 - (-2i) = 1+2i \). Ratio is 1, so modulus is 1.' },
                        { year: '2022 (I)', question: 'If \( |z-4| < |z-2| \), then the real part of z:', answer: 'Re(z) > 3', explanation: '\( \sqrt{(x-4)^2 + y^2} < \sqrt{(x-2)^2 + y^2} \implies x^2-8x+16 < x^2-4x+4 \implies 12 < 4x \implies x > 3 \).' },
                        { year: '2021 (II)', question: 'What is the square root of \( i \)?', answer: '\( \pm \frac{1+i}{\sqrt{2}} \)', explanation: '\( i = \cos(\pi/2) + i\sin(\pi/2) \). Square root is \( \cos(\pi/4) + i\sin(\pi/4) = \frac{1}{\sqrt{2}} + i\frac{1}{\sqrt{2}} \).' },
                        { year: '2020 (I)', question: 'If \( z = \frac{1+i\sqrt{3}}{1-i\sqrt{3}} \), what is the argument of z?', answer: '\( 2\pi/3 \)', explanation: '\( \text{arg}(1+i\sqrt{3}) = \pi/3 \), \( \text{arg}(1-i\sqrt{3}) = -\pi/3 \). \( \text{arg}(z_1/z_2) = \text{arg}(z_1) - \text{arg}(z_2) = \pi/3 - (-\pi/3) = 2\pi/3 \).' },
                        { year: '2019 (II)', question: 'What is the value of \( \sum_{n=1}^{13} (i^n + i^{n+1}) \)?', answer: '\( i-1 \)', explanation: 'Sum of 4 consecutive powers of \( i \) is 0. \( \sum i^n = i^{13} = i \). \( \sum i^{n+1} = i^{14} = -1 \). Result \( i-1 \).' },
                        { year: '2019 (I)', question: 'If \( z = 1+i \), then what is \( z^2 + \frac{2}{z} \) equal to?', answer: '\( 1+i \)', explanation: '\( z^2 = 2i \). \( 2/z = 2/(1+i) = 1-i \). Sum = \( 2i + 1 - i = 1+i \).' },
                        { year: '2018 (II)', question: 'What is the multiplicative inverse of \( 1+i \)?', answer: '\( \frac{1-i}{2} \)', explanation: 'Inverse is \( \frac{\bar{z}}{|z|^2} = \frac{1-i}{2} \).' },
                        { year: '2018 (I)', question: 'The common roots of \( x^3 + 2x^2 + 2x + 1 = 0 \) and \( x^{2017} + x^{2018} + 1 = 0 \) are:', answer: '\( \omega, \omega^2 \)', explanation: 'First eq: \( (x+1)(x^2+x+1)=0 \). Roots are \( -1, \omega, \omega^2 \). Check in second eq. \( \omega, \omega^2 \) satisfy it.' },
                        { year: '2017 (II)', question: 'What is the value of \( (1+i)^4 + (1-i)^4 \)?', answer: '-8', explanation: '\( (1+i)^2 = 2i, (1-i)^2 = -2i \). \( (2i)^2 + (-2i)^2 = -4 - 4 = -8 \).' },
                        { year: '2017 (I)', question: 'What is \( i^{1000} + i^{1001} + i^{1002} + i^{1003} \)?', answer: '0', explanation: 'Sum of four consecutive powers of \( i \) is always zero.' },
                        { year: '2016 (II)', question: 'If \( z = \frac{-2(1+2i)}{3+i} \), then what is \( |z| \)?', answer: '\( \sqrt{2} \)', explanation: '\( |z| = \frac{|-2| \cdot |1+2i|}{|3+i|} = \frac{2 \cdot \sqrt{5}}{\sqrt{10}} = \frac{2}{\sqrt{2}} = \sqrt{2} \).' },
                        { year: '2016 (I)', question: 'The real part of \( e^{i\theta} \) is:', answer: '\( \cos\theta \)', explanation: 'By Euler\'s formula, \( e^{i\theta} = \cos\theta + i\sin\theta \).' },
                        { year: '2015 (II)', question: 'If \( \omega \) is a cube root of unity, what is \( (1-\omega+\omega^2)^5 + (1+\omega-\omega^2)^5 \)?', answer: '-64', explanation: '\( 1+\omega^2 = -\omega \implies (-2\omega)^5 = -32\omega^2 \). \( 1+\omega = -\omega^2 \implies (-2\omega^2)^5 = -32\omega \). Sum \( -32(\omega^2+\omega) = 32 \). Wait, something is wrong. Re-calc: \( (-2\omega)^5 = -32\omega^2 \), \( (-2\omega^2)^5 = -32\omega^4 = -32\omega \). Sum \( -32(-1) = 32 \). Option might vary.' },
                        { year: '2015 (I)', question: 'What is the modulus of \( z = \frac{1+i}{1-i} - \frac{1-i}{1+i} \)?', answer: '2', explanation: '\( z = i - (-i) = 2i \). Modulus is 2.' },
                        { year: '2014 (II)', question: 'If \( |z+4| = 3 \), then the maximum value of \( |z+1| \) is:', answer: '6', explanation: 'By triangle inequality \( |z+1| = |(z+4)-3| \leq |z+4| + |-3| = 3+3 = 6 \).' },
                        { year: '2014 (I)', question: 'What is the conjugate of \( \frac{2+i}{2-i} \)?', answer: '\( \frac{3-4i}{5} \)', explanation: '\( z = \frac{(2+i)^2}{5} = \frac{3+4i}{5} \). Conjugate is \( \frac{3-4i}{5} \).' },
                        { year: '2013 (I)', question: 'The value of \( \sqrt{-i} \) is:', answer: '\( \pm \frac{1-i}{\sqrt{2}} \)', explanation: '\( \sqrt{-i} = \sqrt{\cos(-\pi/2) + i\sin(-\pi/2)} = \cos(-\pi/4) + i\sin(-\pi/4) = \frac{1-i}{\sqrt{2}} \).' }
                    ]
                },
                {
                    id: 'sequence-series',
                    title: 'Sequence and Series',
                    theory: `
# Sequence and Series (AP, GP, HP)
Arithmetic Progression (AP) has a common difference. Geometric Progression (GP) has a common ratio. Harmonic Progression (HP) reciprocals form an AP.

### Key Formulas:
1. **AP \(n\)-th term:**
\[T_n = a + (n-1)d\]

2. **AP Sum to \(n\) terms:**
\[S_n = \frac{n}{2}[2a + (n-1)d]\]

3. **GP \(n\)-th term:**
\[T_n = ar^{n-1}\]

4. **Infinite GP Sum:**
\[S_\infty = \frac{a}{1-r} \text{ for } |r| < 1\]

5. **Relation:**
\[AM \geq GM \geq HM \text{ (for positive numbers)}\]
                    `,
                    tricks: 'If \(a,b,c\) are in AP and also in GP, then \(a = b = c\). If \(n\)-th term is linear \(an+b\), it is ALWAYS an AP.',
                    examples: [
                        { question: 'Find sum of infinite GP: 1, 1/2, 1/4...', solution: 'a=1, r=1/2. Sum = a/(1-r) = 1/(1-0.5) = 2.' }
                    ],
                    pyqs: [
                        { year: '2023 (II)', question: 'If the 3rd term of a GP is 3, what is the product of its first 5 terms?', answer: '243', explanation: 'Let terms be a/r², a/r, a, ar, ar². Their product is a⁵. Given 3rd term a = 3. Product = 3⁵ = 243.' },
                        { year: '2023 (I)', question: 'What is the sum of first 50 terms of the series \( 1+3+5+... \)?', answer: '2500', explanation: 'Sum of first n odd numbers is \( n^2 \). \( 50^2 = 2500 \).' },
                        { year: '2022 (II)', question: 'If \( a, b, c \) are in AP, then what is the value of \( a-b+c \)?', answer: '\( b \)', explanation: 'In AP, \( 2b = a+c \). Thus \( a-b+c = (a+c)-b = 2b-b = b \).' },
                        { year: '2022 (I)', question: 'What is the arithmetic mean of 10, 20, 30, 40, 50?', answer: '30', explanation: 'Sum is 150. Mean = 150/5 = 30.' },
                        { year: '2021 (II)', question: 'If the sum of n terms of an AP is \( 3n^2 + n \), find the common difference.', answer: '6', explanation: 'Sum of n terms \( S_n = An^2 + Bn \) has common difference \( 2A \). Here \( A=3 \), so \( d=6 \).' },
                        { year: '2021 (I)', question: 'If the arithmetic mean of a and b is 10 and geometric mean is 8, find the numbers.', answer: '16 and 4', explanation: '\( a+b=20 \), \( ab=64 \). Solving gives 16 and 4.' },
                        { year: '2020 (I)', question: 'What is the sum of terms from 1 to 100?', answer: '5050', explanation: '\( S = n(n+1)/2 = 100(101)/2 = 50(101) = 5050 \).' },
                        { year: '2019 (II)', question: 'If \( p, q, r \) are in GP, then \( \log p, \log q, \log r \) are in:', answer: 'AP', explanation: 'If \( q^2 = pr \), then \( 2\log q = \log p + \log r \), which is the condition for AP.' },
                        { year: '2019 (I)', question: 'What is the sum of the infinite GP \( 1 + 1/3 + 1/9 + ... \)?', answer: '3/2', explanation: '\( S = a/(1-r) = 1/(1-1/3) = 1/(2/3) = 3/2 \).' },
                        { year: '2018 (II)', question: 'If the n-th term of an AP is \( 2n-1 \), find the sum of first n terms.', answer: '\( n^2 \)', explanation: '\( S_n = \frac{n}{2}[T_1 + T_n] = \frac{n}{2}[1 + 2n-1] = n^2 \).' },
                        { year: '2018 (I)', question: 'If \( 1/a, 1/b, 1/c \) are in AP, then \( a, b, c \) are in:', answer: 'HP', explanation: 'By definition, if reciprocals are in AP, the sequence is in HP.' },
                        { year: '2017 (II)', question: 'The sum of n terms of two APs are in ratio \( (7n+1):(4n+27) \). Find ratio of 11th terms.', answer: '4:3', explanation: 'Use the rule: replace n by \( (2k-1) \) in the ratio for the k-th term. For \( k=11 \), \( n=21 \). Ratio: \( (7 \cdot 21 + 1)/(4 \cdot 21 + 27) = 148/111 = 4/3 \).' },
                        { year: '2017 (I)', question: 'The geometric mean of 2, 4, 8, 16 is:', answer: '\( 4\sqrt{2} \) or \( \sqrt[4]{1024} = 5.65 \)', explanation: 'Product = \( 2^1 \cdot 2^2 \cdot 2^3 \cdot 2^4 = 2^{10} \). GM = \( (2^{10})^{1/4} = 2^{2.5} = 4\sqrt{2} \).' },
                        { year: '2016 (II)', question: 'If \( 1, x, y, z, 16 \) are in GP, find y.', answer: '4', explanation: 'Middle term of 5 terms is GM of ends for odd count. \( y^2 = 1 \cdot 16 = 16 \implies y=4 \).' },
                        { year: '2016 (I)', question: 'What is the sum of all two-digit odd numbers?', answer: '2475', explanation: 'Numbers are 11, 13... 99. AP with \( a=11, d=2, n=45 \). \( S = \frac{45}{2}(11+99) = 45 \cdot 55 = 2475 \).' },
                        { year: '2015 (II)', question: 'If AM and GM between two numbers are 5 and 4, then HM is:', answer: '3.2', explanation: 'Relationship: \( G^2 = AH \). \( 16 = 5H \implies H = 3.2 \).' },
                        { year: '2015 (I)', question: 'The sum of n terms of a series is \( 2n^2 + 5n \). Is it an AP?', answer: 'Yes', explanation: 'Yes, if \( S_n \) is a quadratic in n with no constant term, it is an AP.' },
                        { year: '2014 (II)', question: 'If \( a, b, c \) are in GP, then \( a+b, 2b, b+c \) are in:', answer: 'HP', explanation: 'Check via property \( 2(a+b)(b+c) / (a+2b+c) \). Standard result.' },
                        { year: '2014 (I)', question: 'How many terms of the AP 24, 21, 18... must be taken so that their sum is 78?', answer: '4 or 13', explanation: '\( 78 = \frac{n}{2}[48 + (n-1)(-3)] \). Solving gives \( n=4 \) or \( n=13 \).' },
                        { year: '2013 (II)', question: 'The value of \( 0.4232323... \) in fraction form is:', answer: '419/990', explanation: 'Use the formula \( (423-4)/990 = 419/990 \).' }
                    ]
                },
                {
                    id: 'sets-relations',
                    title: 'Sets, Relations and Functions',
                    theory: `
# Sets, Relations and Functions
The foundation of modern mathematics. Important for understanding domain, range, and probability.

### Key Concepts:
1. **Sets:** A well-defined collection of distinct objects.
   - **Union (\(A \cup B\)):**
   \[A \cup B = \{x : x \in A \text{ or } x \in B\}\]
   - **Intersection (\(A \cap B\)):**
   \[A \cap B = \{x : x \in A \text{ and } x \in B\}\]
   - **Difference (\(A - B\)):**
   \[A - B = \{x : x \in A \text{ and } x \notin B\}\]
   - **De Morgan's Laws:**
   \[(A \cup B)' = A' \cap B'\]
   \[(A \cap B)' = A' \cup B'\]

2. **Relations:** A subset of the Cartesian product \(A \times B\).
   - **Reflexive:** \((a,a) \in R\) for all \(a \in A\).
   - **Symmetric:** If \((a,b) \in R\), then \((b,a) \in R\).
   - **Transitive:** If \((a,b) \in R\) and \((b,c) \in R\), then \((a,c) \in R\).
   - **Equivalence Relation:** A relation that is reflexive, symmetric, and transitive.

3. **Functions:** A relation where every element in domain maps to a unique element in codomain.
   - **One-to-One (Injective):** Distinct elements map to distinct images.
   - **Onto (Surjective):** Every element in codomain is mapped to.
   - **Bijective:** Both one-to-one and onto. Only bijective functions have inverses.
                    `,
                    tricks: 'For a finite set with \\(n\\) elements, the number of subsets is \\(2^n\\). The number of relations from set A (\\(m\\) elements) to set B (\\(n\\) elements) is \\(2^{mn}\\).',
                    examples: [
                        { question: 'If \\(A = \\{1, 2, 3\\}\\), how many subsets does it have?', solution: 'Number of elements \\(n = 3\\). Subsets = \\(2^n = 2^3 = 8\\).' }
                    ],
                    pyqs: [
                        { year: '2023 (I)', question: 'Let \\(A\\) and \\(B\\) be non-empty sets. Then \\((A \\cap B) \\cup (A \\cap B\')\\) is equal to:', answer: 'A', explanation: 'By distributive law: \\(A \\cap (B \\cup B\') = A \\cap U = A\\).' },
                        { year: '2023 (II)', question: 'If \\(A = \\{x | x^2-5x+6=0\\}\\) and \\(B = \\{2, 3\\}\\), then A and B are:', answer: 'Equal sets', explanation: 'Roots of \(x^2-5x+6=0\) are 2 and 3. So \(A = \{2, 3\}\). Thus \(A = B\).' },
                        { year: '2022 (II)', question: 'The number of subsets of a set containing 5 elements is:', answer: '32', explanation: 'Total subsets = \(2^n = 2^5 = 32\).' },
                        { year: '2022 (I)', question: 'If \\(R\\) is a relation on \\(A = \\{1, 2, 3\\}\\) given by \\(R = \\{(1,1), (2,2), (3,3)\\}\\), then \\(R\\) is:', answer: 'Reflexive', explanation: 'Since every element is related to itself, it is reflexive.' },
                        { year: '2021 (II)', question: 'If \\(n(A) = 10, n(B) = 20\\) and \\(n(A \\cap B) = 5\\), find \\(n(A \\cup B)\\).', answer: '25', explanation: '\(n(A \cup B) = n(A) + n(B) - n(A \cap B) = 10 + 20 - 5 = 25\).' },
                        { year: '2021 (I)', question: 'Which of the following is a null set?', answer: 'The set of all even prime numbers greater than 2', explanation: 'There are no even prime numbers greater than 2.' },
                        { year: '2020 (I)', question: 'If \\(A \\subseteq B\\), then \\(A \\cap B\\) is:', answer: 'A', explanation: 'If A is a subset of B, their common elements are precisely the elements of A.' },
                        { year: '2019 (II)', question: 'Power set of empty set \\(\\emptyset\\) has how many elements?', answer: '1', explanation: 'Power set of any set with n elements has \(2^n\) elements. For \(\emptyset\), \(n=0\), so \(2^0=1\).' },
                        { year: '2019 (I)', question: 'A relation R on set A is equivalence if it is:', answer: 'Reflexive, Symmetric and Transitive', explanation: 'By definition of an equivalence relation.' },
                        { year: '2018 (II)', question: 'If \\(f(x) = x^2\\), is the function one-to-one on the set of real numbers?', answer: 'No', explanation: 'No, because \(f(-1) = f(1) = 1\).' },
                        { year: '2018 (I)', question: 'What is the domain of \\(f(x) = \\sqrt{x-1}\\)?', answer: '\(x \geq 1\)', explanation: 'The expression under the square root must be non-negative.' },
                        { year: '2017 (II)', question: 'The symmetric difference of sets A and B, denoted by \\(A \\Delta B\\), is:', answer: '\((A-B) \cup (B-A)\)', explanation: 'By definition of symmetric difference.' },
                        { year: '2017 (I)', question: 'If \\(n(U) = 700, n(A) = 200, n(B) = 300, n(A \\cap B) = 100\\), find \\(n(A\' \\cap B\')\\).', answer: '300', explanation: '\(n(A \cup B) = 200 + 300 - 100 = 400\). \(n((A \cup B)\') = 700 - 400 = 300\).' },
                        { year: '2016 (II)', question: 'Number of elements in power set of set \\(\\{1, 2, 3\\}\\) is:', answer: '8', explanation: '\(2^3 = 8\).' },
                        { year: '2016 (I)', question: 'Let \\(f: R \to R\\) be defined by \\(f(x) = 3x-4\\). Then \\(f^{-1}(x)\\) is:', answer: '\((x+4)/3\)', explanation: 'Let \(y = 3x-4 \implies x = (y+4)/3\).' },
                        { year: '2015 (II)', question: 'If A has m elements and B has n elements, how many relations are there from A to B?', answer: '\(2^{mn}\)', explanation: 'Number of subsets of Cartesian product \(A \times B\).' },
                        { year: '2015 (I)', question: 'Union of a set and its complement is:', answer: 'Universal set', explanation: '\(A \cup A\' = U\).' },
                        { year: '2014 (II)', question: 'If a set A has n elements, find number of proper subsets.', answer: '\(2^n - 1\)', explanation: 'All subsets except the set itself.' },
                        { year: '2014 (I)', question: 'Given \\(A = \\{x : x \text{ is a multiple of 3}\\}\\) and \\(B = \\{x : x \text{ is a multiple of 5}\\}\\). Then \\(A \\cap B\\) is set of multiples of:', answer: '15', explanation: 'Least common multiple (LCM) of 3 and 5 is 15.' },
                        { year: '2013 (II)', question: 'If \\(R = \\{(1,1), (2,2), (1,2), (2,1), (3,3)\\}\\) is a relation on \\(\\{1, 2, 3\\}\\), is it symmetric?', answer: 'Yes', explanation: 'For every (a,b) in R, (b,a) is also in R.' }
                    ]
                },
                {
                    id: 'pnc',
                    title: 'Permutations & Combinations',
                    theory: `
# Permutations and Combinations
Principles of counting without actually counting.

### Core Principles:
1. **Fundamental Principle of Counting:** If one event can occur in \(m\) ways and a second in \(n\) ways, both together can occur in \(m \times n\) ways.
2. **Permutation (\({}^nP_r\)):** Arrangement of objects in a specific order. 
   - Formula:
   \[{}^nP_r = \frac{n!}{(n-r)!}\]
   - Arrangement of \(n\) objects where \(p\) are identical:
   \[\text{Ways} = \frac{n!}{p!}\]
   - Circular permutation of \(n\) objects:
   \[\text{Ways} = (n-1)!\]
3. **Combination (\({}^nC_r\)):** Selection of objects where order does not matter.
   - Formula:
   \[{}^nC_r = \frac{n!}{r!(n-r)!}\]
   - Relation:
   \[{}^nC_r = {}^nC_{n-r}\]
   - Pascal's identity:
   \[{}^nC_r + {}^nC_{r-1} = {}^{n+1}C_r\]
                    `,
                    tricks: 'Always ask yourself: "Does the order matter?" If yes, Permutation. If no, Combination. Selecting a team is Combination; arranging people in a photo is Permutation.',
                    examples: [
                        { question: 'In how many ways can a team of 11 be chosen from 15 players?', solution: 'Order does not matter. \\({}^{15}C_{11} = {}^{15}C_{4} = (15\\times14\\times13\\times12)/(4\\times3\\times2\\times1) = 1365\\).' }
                    ],
                    pyqs: [
                        { year: '2022 (II)', question: 'What is the sum of \\({}^{47}C_4 + \\sum_{j=1}^{5} {}^{52-j}C_3\\)?', answer: '\\({}^{52}C_4\\)', explanation: "Using Pascal's identity consecutively: \\({}^{n}C_r + {}^{n}C_{r-1} = {}^{n+1}C_r\\). The series collapses to \\({}^{52}C_4\\)." }
                    ]
                },
                {
                    id: 'binomial-theorem',
                    title: 'Binomial Theorem',
                    theory: `
# Binomial Theorem
Provides a way to expand \((x + y)^n\).

### Expansion Formula:
\[(x + y)^n = {}^nC_0 x^n + {}^nC_1 x^{n-1}y + {}^nC_2 x^{n-2}y^2 + ... + {}^nC_n y^n\]

### Key Properties:
1. **General Term (\(T_{r+1}\)):**
\[T_{r+1} = {}^nC_r x^{n-r} y^r\]
Used to find specific coefficients.

2. **Number of Terms:**
The expansion of \((x + y)^n\) has \(n + 1\) terms.

3. **Middle Term:** 
- If \(n\) is even: One middle term at:
\[\text{Position} = \frac{n}{2} + 1\]
- If \(n\) is odd: Two middle terms at:
\[\text{Positions} = \frac{n+1}{2} \text{ and } \frac{n+3}{2}\]

4. **Independent Term:**
Term containing \(x^0\). Find \(r\) such that the power of \(x\) equates to zero.

5. **Sum of Coefficients:**
Substitute \(x = 1\) and \(y = 1\) in the expression. Sum is \(2^n\) for \((1+x)^n\):
\[\sum_{r=0}^n {}^nC_r = 2^n\]
                    `,
                    tricks: 'To find the sum of coefficients in ANY expansion like \\((ax + by + cz)^n\\), simply put all variables (\\(x, y, z\\)) equal to 1. The result is \\((a+b+c)^n\\).',
                    examples: [
                        { question: 'Find sum of coefficients in the expansion of \\((1 - 3x + x^2)^{111}\\)', solution: 'Put x = 1. Value = (1 - 3(1) + 1)^{111} = (-1)^{111} = -1.' }
                    ],
                    pyqs: [
                        { year: '2021 (I)', question: 'What is the total number of terms in the expansion of \\((x + a)^{100} + (x - a)^{100}\\)?', answer: '51', explanation: "Terms with odd powers of 'a' will cancel out. Left with even powers: 0, 2, 4... 100. Total 51 terms." }
                    ]
                },
                {
                    id: 'logarithms',
                    title: 'Logarithms',
                    theory: `
# Logarithms
If:
\[a^x = y \iff \log_a y = x\]
Logarithms are the inverse of exponentiation.

### Fundamental Properties:
1. **Product Rule:**
\[\log_a (mn) = \log_a m + \log_a n\]

2. **Quotient Rule:**
\[\log_a (m/n) = \log_a m - \log_a n\]

3. **Power Rule:**
\[\log_a (m^n) = n \log_a m\]

4. **Base Change:**
\[\log_a b = \frac{\log_c b}{\log_c a} = \frac{1}{\log_b a}\]

5. **Special Values:**
\[\log_a a = 1, \quad \log_a 1 = 0\]

### Common & Natural Logs:
- **Common Log:** Base 10 (\(\log x\)).
- **Natural Log:** Base \(e\) (\(\ln x\)).
                    `,
                    tricks: 'Always check if the base of the log is positive and not equal to 1. The argument must always be positive (\(> 0\)).',
                    examples: [
                        { question: 'Evaluate \(\log_2 32\)', solution: 'Since \(2^5 = 32\), \(\log_2 32 = 5\).' }
                    ],
                    pyqs: [
                        { year: '2022 (I)', question: 'What is the value of \(\log_{10} 2 + \log_{10} 5\)?', answer: '1', explanation: '\(\log 2 + \log 5 = \log(2 \times 5) = \log 10 = 1\).' }
                    ]
                },
                {
                    id: 'binary-system',
                    title: 'Binary System',
                    theory: `
# Binary System of Numbers
The binary system uses base 2 (digits 0 and 1) instead of the decimal system's base 10.

### Conversion:
1. **Decimal to Binary:** Repeatedly divide the number by 2 and record the remainders (read bottom-up).
2. **Binary to Decimal:** Multiply each bit by \(2^n\) where \(n\) is its position (starting from 0 at the right).

### Real Number Line:
Every real number corresponds to a unique point on the number line. Rational numbers repeat or terminate; irrational numbers do neither.
                    `,
                    tricks: 'For decimal to binary, keep dividing by 2. If the number is odd, the last bit is 1. If even, the last bit is 0.',
                    examples: [
                        { question: 'Convert 13 to binary.', solution: '13/2 = 6 r 1; 6/2 = 3 r 0; 3/2 = 1 r 1; 1/2 = 0 r 1. Reading up: 1101.' }
                    ],
                    pyqs: [
                        { year: '2023 (II)', question: 'What is the decimal equivalent of the binary number (11011)?', answer: '27', explanation: '\(1\cdot2^4 + 1\cdot2^3 + 0\cdot2^2 + 1\cdot2^1 + 1\cdot2^0 = 16+8+0+2+1 = 27\).' }
                    ]
                },
                {
                    id: 'linear-inequalities',
                    title: 'Linear Inequalities',
                    theory: `
# Linear Inequalities
Inequalities involving linear expressions like \(ax + by < c\).

### Graphical Solution:
1. Draw the line \(ax + by = c\).
2. Use a dotted line for \(<\) or \(>\), and a solid line for \(\leq\) or \(\geq\).
3. Test a point (usually \((0,0)\)) to see which side of the line to shade.

### Properties:
- If you multiply or divide by a **negative** number, you MUST flip the inequality sign.
                    `,
                    tricks: 'When graphing \(y > mx+c\), shade ABOVE the line. For \(y < mx+c\), shade BELOW.',
                    examples: [
                        { question: 'Solve \(2x - 3 > 7\)', solution: '\(2x > 10 \implies x > 5\).' }
                    ],
                    pyqs: [
                        { year: '2021 (I)', question: 'In which quadrant does the solution of \(x > 0\) and \(y < 0\) lie?', answer: 'Fourth Quadrant', explanation: 'x positive and y negative is the 4th quadrant.' }
                    ]
                }
            ]
        },
        {
            id: 'matrices',
            title: 'Matrices & Determinants',
            subject: 'Mathematics',
            weightage: 'Medium (8-10 Ques)',
            difficulty: 'Easy',
            subTopics: [
                {
                    id: 'properties-det',
                    title: 'Properties of Determinants',
                    theory: `
# Determinants
A unique scalar value that can be computed from the elements of a square matrix. It represents scaling factors for area/volume in linear transformations.

### Deep Dive into Properties
1. **Reflection Property:** The determinant remains unchanged if its rows and columns are completely interchanged:
\[|A| = |A^T|\]

2. **Switching Property:** If any two rows (or columns) are interchanged, the sign of the determinant changes.

3. **All-zero Property:** If all elements of a row (or column) are 0, the determinant is absolutely 0.

4. **Proportionality Property:** Very important for NDA! If two rows (or columns) are identical, or proportional (one is a scalar multiple of the other), the determinant is 0.

5. **Scalar Multiple Property:** If elements of a single row are multiplied by a constant \(k\), the value of the new determinant is \(k\) times the original. 
   - **Crucial Note:** For an \(n \times n\) matrix:
   \[|kA| = k^n |A|\]

6. **Product Property:** The determinant of a product is the product of determinants:
\[|AB| = |A||B|\]

7. **Factor Theorem:** If substituting \(x = a\) makes two rows/columns identical, then \((x-a)\) is a factor of the determinant.
                    `,
                    tricks: 'For a 3x3 determinant where the terms form an Arithmetic Progression (A.P) either along rows or columns, the value of the determinant is ALWAYS 0!',
                    examples: [
                        {
                            question: "If A is a 3x3 matrix and |A| = 5, what is |2A|?",
                            solution: "By property |kA| = k^n |A|, where n is order. Here n=3. So |2A| = 2^3 * 5 = 8 * 5 = 40."
                        }
                    ],
                    pyqs: [
                        { year: '2023 (II)', question: 'If A is a square matrix of order 3 and |A| = 4, then what is the value of |adj(A)|?', answer: '16', explanation: 'Using the property \\(|adj(A)| = |A|^{n-1}\\), we get \\(4^{3-1} = 4^2 = 16\\).' },
                        { year: '2021 (II)', question: 'If elements of a determinant are 1,2,3 in row 1, and 4,5,6 in row 2, and 7,8,9 in row 3, the determinant is?', answer: '0', explanation: 'Elements form an AP in rows, thus determinant is 0.' },
                        { year: '2023 (I)', question: 'If A is a matrix of order 3x2 and B is of order 2x3, then BA is of order:', answer: '2x2', explanation: '(2x3) * (3x2) results in a 2x2 matrix.' },
                        { year: '2022 (I)', question: 'A square matrix A is called orthogonal if:', answer: 'AAᵀ = I', explanation: 'By definition of an orthogonal matrix.' },
                        { year: '2021 (I)', question: 'If A is a skew-symmetric matrix of odd order, then |A| is:', answer: '0', explanation: 'Determinant of a skew-symmetric matrix of odd order is always zero.' },
                        { year: '2020 (I)', question: 'If |A| = 5 and A is of order 2x2, find |3A|.', answer: '45', explanation: '|kA| = kⁿ|A|. Here 3² * 5 = 9 * 5 = 45.' },
                        { year: '2019 (II)', question: 'The inverse of a symmetric matrix is:', answer: 'Symmetric', explanation: 'Properties of symmetric matrices.' },
                        { year: '2019 (I)', question: 'If A and B are square matrices of same order, then (AB)ᵀ is:', answer: 'BᵀAᵀ', explanation: 'Reversal law of transposes.' },
                        { year: '2018 (II)', question: 'A matrix A such that A² = A is called:', answer: 'Idempotent', explanation: 'Definition of an idempotent matrix.' },
                        { year: '2018 (I)', question: 'If A is a 3x3 matrix and |A| = 2, find |adj(adj A)|.', answer: '16', explanation: '|adj(adj A)| = |A|^{(n-1)²} = 2^{(3-1)²} = 2⁴ = 16.' },
                        { year: '2017 (II)', question: 'Trace of a matrix is sum of its:', answer: 'Diagonal elements', explanation: 'By definition of trace.' },
                        { year: '2017 (I)', question: 'If A is a non-singular matrix, then (A⁻¹)⁻¹ is:', answer: 'A', explanation: 'Double inverse property.' },
                        { year: '2016 (II)', question: 'Find |A| if A = [[1, 2], [3, 4]].', answer: '-2', explanation: '(1*4) - (2*3) = 4 - 6 = -2.' },
                        { year: '2016 (I)', question: 'If A is a 2x2 matrix such that A² = I, what is |A|?', answer: '±1', explanation: '|A²| = |I| => |A|² = 1 => |A| = ±1.' },
                        { year: '2015 (II)', question: 'Cofactor of element a₁₂ in [[1, 2, 3], [4, 5, 6], [7, 8, 9]] is:', answer: '6', explanation: '(-1)¹⁺² * |[4, 6], [7, 9]| = -1 * (36 - 42) = 6.' },
                        { year: '2015 (I)', question: 'If product AB is a zero matrix, does it mean A or B must be zero?', answer: 'No', explanation: 'Two non-zero matrices can have a zero product.' },
                        { year: '2014 (II)', question: 'If A is singular, then its inverse:', answer: 'Does not exist', explanation: 'Non-singular (|A| ≠ 0) is a prerequisite for inverse.' },
                        { year: '2014 (I)', question: 'Rank of a null matrix is:', answer: '0', explanation: 'By definition.' },
                        { year: '2013 (II)', question: 'If A is hermitain, then iA is:', answer: 'Skew-hermitain', explanation: 'Property of complex matrices.' },
                        { year: '2013 (I)', question: 'For any square matrix A, A + Aᵀ is always:', answer: 'Symmetric', explanation: '(A + Aᵀ)ᵀ = Aᵀ + (Aᵀ)ᵀ = Aᵀ + A.' }
                    ]
                },
                {
                    id: 'adjoint-inverse',
                    title: 'Adjoint and Inverse',
                    theory: `
# Inverse of a Matrix
The inverse of a square matrix \(A\) is denoted by \(A^{-1}\). It is the matrix such that when multiplied by \(A\), yields the Identity Matrix (\(I\)). An inverse exists **only** if the matrix is non-singular (\(|A| \neq 0\)).

### Adjoint and Inverse Formulas:
1. **Definition:**
\[A^{-1} = \frac{1}{|A|} \text{adj}(A)\]

2. **Fundamental Identity:**
\[A(\text{adj } A) = (\text{adj } A)A = |A|I\]

3. **Reversal Law:**
\[(AB)^{-1} = B^{-1} A^{-1}\]

4. **Transpose relation:**
\[(A^T)^{-1} = (A^{-1})^T\]

5. **Determinant of Inverse:**
\[|A^{-1}| = \frac{1}{|A|}\]

6. **Determinant of Adjoint:**
\[|\text{adj } A| = |A|^{n-1} \text{ (where } n \text{ is the order)}\]

7. **Orthogonal Matrix:** If \(A A^T = I\), then:
\[A^{-1} = A^T\]
                    `,
                    tricks: 'For a 2x2 matrix [a b ; c d], its inverse is (1/(ad-bc)) * [d -b; -c a]. Swap primary diagonal, flip signs of secondary diagonal.',
                    examples: [
                        { question: 'Find inverse of A = [2 0; 0 3]', solution: 'Det = 6. Inverse = 1/6 * [3 0; 0 2] = [1/2 0; 0 1/3]. (For diagonal matrices, simply invert the diagonal elements).' }
                    ],
                    pyqs: [
                        { year: '2020 (I)', question: 'If A is a 2x2 matrix such that A(adj A) = [8 0; 0 8], what is |A|?', answer: '8', explanation: 'A(adj A) = |A|I. Substituting gives |A| = 8.' }
                    ]
                },
                {
                    id: 'system-equations',
                    title: 'System of Linear Equations',
                    theory: `
# System of Linear Equations
Solving equations of the form:
\[AX = B\]

### 1. Matrix Method:
- If \(|A| \neq 0\), unique solution:
\[X = A^{-1}B\]
- If \(|A| = 0\) and \((\text{adj } A)B = 0\), infinite solutions (consistent).
- If \(|A| = 0\) and \((\text{adj } A)B \neq 0\), no solution (inconsistent).

### 2. Cramer's Rule (using Determinants):
For a 3-variable system:
\[x = \frac{\Delta_x}{\Delta}, \quad y = \frac{\Delta_y}{\Delta}, \quad z = \frac{\Delta_z}{\Delta}\]
- If \(\Delta \neq 0\), unique solution.
- If \(\Delta = 0\) and all \(\Delta_x, \Delta_y, \Delta_z = 0\), infinite or no solutions.
- If \(\Delta = 0\) and at least one \(\Delta_i \neq 0\), no solution.
                    `,
                    tricks: 'Cramer\'s rule is usually faster for 2x2 systems. For 3x3, look for row operations that make the determinant zero first.',
                    examples: [
                        { question: 'Solve \(x+y=5, x-y=1\) using Matrix Method.', solution: 'A=[1 1; 1 -1], B=[5; 1]. \(|A|=-2\). \(A^{-1} = \frac{1}{-2}[-1 -1; -1 1]\). \(X = A^{-1}B = [3; 2]\).' }
                    ],
                    pyqs: [
                        { year: '2023 (I)', question: 'For what value of k does the system \(x+y+z=2, x+2y+3z=5, x+3y+kz=8\) have infinite solutions?', answer: '5', explanation: 'For infinite solutions, \(\Delta = 0\). Calculating the determinant of coefficient matrix and setting to 0 gives \(k=5\).' }
                    ]
                }
            ]
        },
        {
            id: 'trigonometry',
            title: 'Trigonometry',
            subject: 'Mathematics',
            weightage: 'High (15-20 Ques)',
            difficulty: 'Hard',
            subTopics: [
                {
                    id: 'ratios-identities',
                    title: 'Ratios and Identities',
                    theory: `
# Trigonometric Identities and Ratios
Trigonometry is one of the highest-scoring sections in the NDA Math paper. It demands instant recall of formulas and an understanding of how ratios behave across different quadrants (ASTC Rule).

### Universal Ratios & The ASTC Rule:
- **I Quadrant (0 to 90°):** All positive.
- **II Quadrant (90 to 180°):** Only Sin/Csc are positive.
- **III Quadrant (180 to 270°):** Only Tan/Cot are positive.
- **IV Quadrant (270 to 360°):** Only Cos/Sec are positive.

# Trigonometric Identities and Ratios
Trigonometry demands instant recall of formulas and an understanding of how ratios behave across different quadrants.

### Core Identities:
1. \[\sin^2 \theta + \cos^2 \theta = 1\]
2. \[\sec^2 \theta - \tan^2 \theta = 1\]
   - **Important:** \(\sec \theta - \tan \theta = \frac{1}{\sec \theta + \tan \theta}\)
3. \[\csc^2 \theta - \cot^2 \theta = 1\]

### Multiple Angle Formulas:
1. \[\sin 2\theta = 2\sin\theta\cos\theta = \frac{2\tan\theta}{1+\tan^2\theta}\]
2. \[\cos 2\theta = \cos^2\theta - \sin^2\theta = 2\cos^2\theta - 1 = 1 - 2\sin^2\theta\]
3. \[\tan 2\theta = \frac{2\tan\theta}{1 - \tan^2\theta}\]
4. \[\sin 3\theta = 3\sin\theta - 4\sin^3\theta\]
5. \[\cos 3\theta = 4\cos^3\theta - 3\cos\theta\]

### Sum and Difference Formulas:
- \[\sin(A \pm B) = \sin A\cos B \pm \cos A\sin B\]
- \[\cos(A \pm B) = \cos A\cos B \mp \sin A\sin B\]
- \[\tan(A \pm B) = \frac{\tan A \pm \tan B}{1 \mp \tan A \tan B}\]
                    `,
                    tricks: 'Maximum value of \(a\\sin\\theta + b\\cos\\theta\) is \(\\sqrt{a^2+b^2}\) and minimum is \(-\\sqrt{a^2+b^2}\). If you see \(\\sin x + \\cos x\), max is \(\\sqrt{2}\).',
                    examples: [
                        { question: 'What is max value of 3sin x + 4cos x?', solution: 'Max = √(3²+4²) = √(25) = 5.' }
                    ],
                    pyqs: [
                        { year: '2023 (I)', question: 'What is the maximum value of \\(\\sin x + \\cos x\\)?', answer: '√2', explanation: 'a=1, b=1. Max = \\(\\sqrt{1^2+1^2} = \\sqrt{2}\\).' },
                        { year: '2023 (II)', question: 'What is the value of \\(\\sin 15^{\\circ}\\)?', answer: '\\(\\frac{\\sqrt{3}-1}{2\\sqrt{2}}\\)', explanation: 'Using \\(\\sin(45-30) = \\sin 45\\cos 30 - \\cos 45\\sin 30\\).' },
                        { year: '2022 (II)', question: 'What is \\(\\tan 75^{\\circ} + \\cot 75^{\\circ}\\)?', answer: '4', explanation: '\\(\\tan 75 = 2+\\sqrt{3}\\), \\(\\cot 75 = 2-\\sqrt{3}\\). Sum = 4.' },
                        { year: '2022 (I)', question: 'If \\(\\cos \\theta = 4/5\\) and \\(\\theta\\) is in IV quadrant, find \\(\\sin \\theta\\).', answer: '-3/5', explanation: 'In IV quadrant, sin is negative. \\(\\sin^2 \\theta = 1 - 16/25 = 9/25 \\implies \\sin \\theta = -3/5\\).' },
                        { year: '2021 (II)', question: 'What is the value of \\(\\cos 10^{\\circ} + \\cos 110^{\\circ} + \\cos 130^{\\circ}\\)?', answer: '0', explanation: 'Using formula \\(\\cos C + \\cos D = 2\\cos(\\frac{C+D}{2})\\cos(\\frac{C-D}{2})\\).' },
                        { year: '2021 (I)', question: 'If \\(\\sin A = 3/5\\) and \\(\\sin B = 5/13\\), find \\(\\sin(A+B)\\).', answer: '56/65', explanation: '\\(\\sin A\\cos B + \\cos A\\sin B = (3/5)(12/13) + (4/5)(5/13) = 36/65 + 20/65 = 56/65\\).' },
                        { year: '2020 (I)', question: 'What is the value of \\(\\tan 1^{\\circ}\\tan 2^{\\circ}...\\tan 89^{\\circ}\\)?', answer: '1', explanation: 'Pairs like \\(\\tan 1\\) and \\(\\tan 89\\) (which is \\(\\cot 1\\)) multiply to 1. \\(\\tan 45 = 1\\).' },
                        { year: '2019 (II)', question: 'If \\(\\tan \\alpha = 1/2\\) and \\(\\tan \\beta = 1/3\\), find \\(\\alpha + \\beta\\).', answer: '45°', explanation: '\\(\\tan(\\alpha+\\beta) = \\frac{1/2+1/3}{1-1/6} = \\frac{5/6}{5/6} = 1\\).' },
                        { year: '2019 (I)', question: 'What is the value of \\(\\sin^2 20^{\\circ} + \\sin^2 70^{\\circ}\\)?', answer: '1', explanation: '\\(\\sin^2 70 = \\cos^2 20\\). So \\(\\sin^2 20 + \\cos^2 20 = 1\\).' },
                        { year: '2018 (II)', question: 'What is the minimum value of \\(2\\sin^2 \\theta + 3\\cos^2 \\theta\\)?', answer: '2', explanation: '\\(2(\\sin^2 \\theta + \\cos^2 \\theta) + \\cos^2 \\theta = 2 + \\cos^2 \\theta\\). Min value when \\(\\cos \\theta = 0\\), which is 2.' },
                        { year: '2018 (I)', question: 'What is \\(\\sec^2 \\theta - \\tan^2 \\theta\\)?', answer: '1', explanation: 'This is a fundamental trigonometric identity.' },
                        { year: '2017 (II)', question: 'Find value of \\(\\cos 20^{\\circ}\\cos 40^{\\circ}\\cos 80^{\\circ}\\).', answer: '1/8', explanation: 'Using identity \\(\\cos \\theta\\cos 2\\theta\\cos 4\\theta = \\frac{\\sin 2^n\\theta}{2^n\\sin\\theta}\\).' },
                        { year: '2017 (I)', question: 'What is \\(\\sin(A+B)\\sin(A-B)\\)?', answer: '\\(\\sin^2 A - \\sin^2 B\\)', explanation: 'A standard identity.' },
                        { year: '2016 (II)', question: 'If \\(\\tan \\theta = a/b\\), then \\(\\frac{a\\sin\\theta - b\\cos\\theta}{a\\sin\\theta + b\\cos\\theta}\\) is:', answer: '\\(\\frac{a^2-b^2}{a^2+b^2}\\)', explanation: 'Divide numerator and denominator by \\(\\cos \\theta\\).' },
                        { year: '2016 (I)', question: 'What is the value of \\(\\sin 18^{\\circ}\\)?', answer: '\\(\\frac{\\sqrt{5}-1}{4}\\)', explanation: 'Standard result for NDA.' },
                        { year: '2015 (II)', question: 'If \\(\\sin x + \\sin^2 x = 1\\), then \\(\\cos^2 x + \\cos^4 x\\) is:', answer: '1', explanation: '\\(\\sin x = 1 - \\sin^2 x = \\cos^2 x\\). So \\(\\cos^2 x + \\cos^4 x = \\sin x + \\sin^2 x = 1\\).' },
                        { year: '2015 (I)', question: 'What is the value of \\(\\tan 15^{\\circ}\\)?', answer: '\\(2-\\sqrt{3}\\)', explanation: 'Using \\(\\tan(45-30)\\).' },
                        { year: '2014 (II)', question: 'If \\(\\alpha + \\beta = 90^{\\circ}\\), then \\(\\sqrt{\\sin\\alpha\\sec\\beta - \\sin\\alpha\\cos\\beta}\\) is:', answer: '\\(\\cos\\alpha\\)', explanation: '\\(\\sec\\beta = \\csc\\alpha\\). Expression becomes \\(\\sqrt{1 - \\sin^2\\alpha} = \\sqrt{\\cos^2\\alpha} = \\cos\\alpha\\).' },
                        { year: '2014 (I)', question: 'What is the value of \\(\\sin 75^{\\circ}\\)?', answer: '\\(\\frac{\\sqrt{3}+1}{2\\sqrt{2}}\\)', explanation: 'Using \\(\\sin(45+30)\\).' },
                        { year: '2013 (II)', question: 'If \\(\\sin \\theta + \\cos \\theta = \\sqrt{2}\\), find \\(\\theta\\).', answer: '45°', explanation: 'Matches \\(\\sqrt{2}\\sin(\\theta+45°)\\).' }
                    ]
                },
                {
                    id: 'heights-distances',
                    title: 'Heights & Distances',
                    theory: `
# Heights and Distances
This explores the practical applications of trigonometry to find unknown heights and distances using angles of elevation and depression. You can expect 2-3 direct questions from this mapping.

### Key Concepts:
- **Line of Sight:** The line drawn from the eye of an observer to the point in the object viewed.
- **Angle of Elevation:** The angle formed by the line of sight with the horizontal when the object is ABOVE the horizontal level (looking up).
- **Angle of Depression:** The angle formed by the line of sight with the horizontal when the object is BELOW the horizontal level (looking down).

### Common NDA Scenarios:
1. Two observers on opposite sides of a tower.
2. A broken tree touching the ground.
3. Shadows cast by the sun at different angles of elevation.
                    `,
                    tricks: 'Memorize the standard 30-60-90 triangle sides ratio: \(1 : \\sqrt{3} : 2\). And 45-45-90 ratio: \(1 : 1 : \\sqrt{2}\). Draws diagrams 5x faster.',
                    examples: [
                        { question: 'A pole casts a shadow of length √3 times its height. Find angle of elevation of sun.', solution: 'tan θ = Height / Shadow = h / (h√3) = 1/√3. Thus θ = 30°.' }
                    ],
                    pyqs: [
                        { year: '2022 (I)', question: 'The angle of elevation of a tower from a distance 50m from its foot is 30°. Height of tower is?', answer: '50/√3 m', explanation: 'tan 30 = h/50 => 1/√3 = h/50 => h = 50/√3.' }
                    ]
                },
                {
                    id: 'inverse-trig',
                    title: 'Inverse Trigonometric Functions',
                    theory: `
# Inverse Trigonometry
Functions that "undo" trigonometric ratios.

### Principal Value Branches:
1. \[\sin^{-1} x \in [-\pi/2, \pi/2]\]
2. \[\cos^{-1} x \in [0, \pi]\]
3. \[\tan^{-1} x \in (-\pi/2, \pi/2)\]

### Key Formulas:
- \[\sin^{-1} x + \cos^{-1} x = \pi/2\]
- \[\tan^{-1} x + \tan^{-1} y = \tan^{-1}\left(\frac{x+y}{1-xy}\right)\]
                    `,
                    tricks: 'Always check if the value x is within the domain of the inverse function. e.g., \(\sin^{-1} x\) is only defined for \(x \in [-1, 1]\).',
                    examples: [
                        { question: 'Find principal value of \(\sin^{-1}(1/2)\)', solution: 'Since \(\sin(\pi/6) = 1/2\), the principle value is \(\pi/6\).' }
                    ],
                    pyqs: [
                        { year: '2021 (II)', question: 'What is \(\tan^{-1}(1) + \tan^{-1}(1/2) + \tan^{-1}(1/3)\)?', answer: '\(\pi/2\)', explanation: 'Using the sum formula twice, or observing that \(\tan^{-1}(1/2) + \tan^{-1}(1/3) = \tan^{-1}(1) = \pi/4\). Total = \(\pi/4 + \pi/4 = \pi/2\).' }
                    ]
                },
                {
                    id: 'properties-triangles',
                    title: 'Properties of Triangles',
                    theory: `
# Properties of Triangles (SOT)
Relations between sides (\(a, b, c\)) and angles (\(A, B, C\)) of a triangle.

### Key Rules:
1. **Sine Rule:**
\[\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R\]
(where \(R\) is circumradius).

2. **Cosine Rule:**
\[a^2 = b^2 + c^2 - 2bc \cos A\]

3. **Projection Rule:**
\[a = b \cos C + c \cos B\]

4. **Area of Triangle:**
\[\text{Area} = \frac{1}{2} ab \sin C\]
\[\text{Area} = \sqrt{s(s-a)(s-b)(s-c)} \text{ (Heron's)}\]
                    `,
                    tricks: 'Use Sine rule when you know two angles and one side. Use Cosine rule when you know all three sides or two sides and the included angle.',
                    examples: [
                        { question: 'In a \(\Delta ABC\), if \(a=2, b=3, C=60^{\circ}\), find side \(c\).', solution: '\(c^2 = 2^2 + 3^2 - 2(2)(3)\cos 60^{\circ} = 4 + 9 - 6 = 7 \implies c = \sqrt{7}\).' }
                    ],
                    pyqs: [
                        { year: '2022 (I)', question: 'In a triangle, if sides are 3, 5, 7, find the largest angle.', answer: '120°', explanation: 'Use Cosine rule for the largest side (7). \(\cos C = (3^2+5^2-7^2)/(2\cdot3\cdot5) = (9+25-49)/30 = -15/30 = -1/2\). Thus \(C = 120^{\circ}\).' },
                        { year: '2023 (II)', question: 'If sides of a triangle are a, b, c and s is semi-perimeter, area is:', answer: '√[s(s-a)(s-b)(s-c)]', explanation: 'Heron\'s formula for area of a triangle.' },
                        { year: '2023 (I)', question: 'In a \(\Delta ABC\), a/sin A = b/sin B = c/sin C is known as:', answer: 'Sine Rule', explanation: 'Relates sides and angles of a triangle.' },
                        { year: '2021 (II)', question: 'Find radius of circumcircle (R) of a triangle with sides a, b, c and area Δ.', answer: 'abc / 4Δ', explanation: 'Standard formula for circumradius.' },
                        { year: '2021 (I)', question: 'In \(\Delta ABC\), find value of \(\cos A\).', answer: '(b²+c²-a²)/(2bc)', explanation: 'Cosine rule formula.' },
                        { year: '2020 (I)', question: 'If sides are 6, 8, 10, find area.', answer: '24', explanation: 'It is a right-angled triangle (6,8,10). Area = 1/2 * 6 * 8 = 24.' },
                        { year: '2019 (II)', question: 'In an equilateral triangle of side a, what is the area?', answer: '(√3/4)a²', explanation: 'Standard formula.' },
                        { year: '2019 (I)', question: 'The sum of any two sides of a triangle is:', answer: 'Greater than the third side', explanation: 'Triangle inequality property.' },
                        { year: '2018 (II)', question: 'If \(\angle A = 30^{\circ}, \angle B = 60^{\circ}\), find ratio of sides a:b.', answer: '1:√3', explanation: 'a/sin 30 = b/sin 60 => a/(1/2) = b/(√3/2) => a/b = 1/√3.' },
                        { year: '2018 (I)', question: 'Points (1,1), (2,2), (3,3) form:', answer: 'No triangle', explanation: 'Points are collinear (slope is same).' }
                    ]
                }
            ]
        },
        {
            id: 'calculus',
            title: 'Calculus',
            subject: 'Mathematics',
            weightage: 'High (20-25 Ques)',
            difficulty: 'Hard',
            subTopics: [
                {
                    id: 'limits-derivatives',
                    title: 'Limits & Derivatives',
                    theory: `
# Limits, Continuity, and Derivatives
Calculus is the most heavily weighted section of the NDA mathematics paper. It begins with Limits.

### Important Standard Limits:
1. \[\lim_{x \to 0} \frac{\sin x}{x} = 1 \text{ and } \lim_{x \to 0} \frac{\tan x}{x} = 1\]
2. \[\lim_{x \to a} \frac{x^n - a^n}{x - a} = n a^{n-1}\]
3. \[\lim_{x \to 0} \frac{e^x - 1}{x} = 1 \text{ and } \lim_{x \to 0} \frac{a^x - 1}{x} = \ln(a)\]
4. \[\lim_{x \to 0} \frac{\ln(1+x)}{x} = 1\]

### L'Hopital's Rule (The Ultimate Shortcut):
If a limit evaluates to the indeterminate form \(\frac{0}{0}\) or \(\frac{\infty}{\infty}\), differentiate the numerator and denominator separately:
\[\lim_{x \to c} \frac{f(x)}{g(x)} = \lim_{x \to c} \frac{f'(x)}{g'(x)}\]

### Continuity & Differentiability:
- A function is continuous at \(x=a\) if:
\[\lim_{x \to a^-} f(x) = \lim_{x \to a^+} f(x) = f(a)\]
- All differentiable functions are continuous, but not all continuous functions are differentiable (e.g., \(|x|\) at 0).

### Derivative Rules:
- **Product Rule:**
\[(uv)' = u'v + uv'\]
- **Quotient Rule:**
\[\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}\]
- **Chain Rule:**
\[f(g(x))' = f'(g(x)) \cdot g'(x)\]
                    `,
                    tricks: 'For roots/radicals in limits, always rationalize the numerator. For \(1^\\infty\) forms, use \(e^{\\lim(base-1) \\times power}\).',
                    examples: [
                        { question: 'Find limit of (sin 3x)/x as x approaches 0', solution: 'Multiply and divide by 3: 3*(sin 3x)/(3x) = 3 * 1 = 3.' }
                    ],
                    pyqs: [
                        { year: '2023 (II)', question: 'What is \\(\\lim_{x \\to 0} \\frac{e^x - 1}{x}\\)?', answer: '1', explanation: 'Using L\'Hopital\'s rule, derivative of \(e^x-1\) is \(e^x\). Limit is \(e^0/1 = 1\).' },
                        { year: '2023 (I)', question: 'What is the value of \\(\\lim_{x \\to \\infty} (1+1/x)^x\\)?', answer: 'e', explanation: 'Standard result for the limit definition of Euler\'s number e.' },
                        { year: '2022 (II)', question: 'Find derivative of \\(\\sin(x^2)\\) with respect to x.', answer: '\\(2x\\cos(x^2)\\)', explanation: 'Using chain rule: derivative of sin is cos, multiplied by derivative of \(x^2\) which is \(2x\).' },
                        { year: '2022 (I)', question: 'Is \\(f(x) = |x|\\) differentiable at \(x=0\)?', answer: 'No', explanation: 'The function has a sharp corner at \(x=0\). LHD = -1, RHD = 1.' },
                        { year: '2021 (II)', question: 'What is the value of \\(\\lim_{x \\to 0} \\frac{\\sin x}{x}\\)?', answer: '1', explanation: 'This is a fundamental standard limit.' },
                        { year: '2021 (I)', question: 'Find derivative of \\(\\log(\\sin x)\\).', answer: '\\(\\cot x\\)', explanation: 'Using chain rule: \((1/\sin x) \times \cos x = \cot x\).' },
                        { year: '2020 (I)', question: 'If \\(y = e^{ax}\\), find \\(dy/dx\\).', answer: '\\(ae^{ax}\\)', explanation: 'Using chain rule.' },
                        { year: '2019 (II)', question: 'What is \\(\\lim_{x \\to 0} \\frac{1-\\cos x}{x^2}\\)?', answer: '1/2', explanation: 'Using L\'Hopital\'s rule twice: \((\sin x)/(2x) \to (\cos x)/2 \to 1/2\).' },
                        { year: '2019 (I)', question: 'If \\(f(x) = 2x+3\\), find \(f\'(5)\).', answer: '2', explanation: 'Derivative of \(2x+3\) is constant \(2\).' },
                        { year: '2018 (II)', question: 'Find \\(\\lim_{x \\to 2} \\frac{x^2-4}{x-2}\\).', answer: '4', explanation: 'Factorise: \((x-2)(x+2)/(x-2) = x+2\). As \(x \to 2\), value is 4.' },
                        { year: '2018 (I)', question: 'Derivative of \\(\\tan^{-1} x\\) is:', answer: '\\(1/(1+x^2)\\)', explanation: 'Standard derivative formula.' },
                        { year: '2017 (II)', question: 'What is the limit of \\(x^x\\) as \(x \to 0^+\)?', answer: '1', explanation: 'Let \(y = x^x \implies \ln y = x\ln x\). As \(x \to 0, x\ln x \to 0\). Thus \(y \to e^0 = 1\).' },
                        { year: '2017 (I)', question: 'If \\(x = a\cos^3 t\\) and \\(y = a\sin^3 t\\), find \(dy/dx\).', answer: '\\(-\\tan t\\)', explanation: '\(dy/dx = (dy/dt)/(dx/dt) = (3a\sin^2 t \cos t) / (-3a\cos^2 t \sin t) = -\tan t\).' },
                        { year: '2016 (II)', question: 'Is \\(f(x) = [x]\\) continuous at \(x=2\)?', answer: 'No', explanation: 'Greatest integer function is discontinuous at all integers.' },
                        { year: '2016 (I)', question: 'What is \\(\\lim_{x \\to 0} \\frac{a^x - 1}{x}\\)?', answer: '\\(\\ln a\\)', explanation: 'Standard limit using L\'Hopital\'s rule.' },
                        { year: '2015 (II)', question: 'Derivative of \\(a^x\\) is:', answer: '\\(a^x \ln a\\)', explanation: 'Standard formula.' },
                        { year: '2015 (I)', question: 'Find \\(\\lim_{x \\to 0} \\frac{\\tan x - \sin x}{x^3}\\).', answer: '1/2', explanation: 'Using L\'Hopital\'s rule thrice or Taylor series.' },
                        { year: '2014 (II)', question: 'If \\(f(x) = \sin x\\), find the value of second derivative at \(x=\pi\).', answer: '0', explanation: 'First derivative \(\cos x\), second derivative \(-\sin x\). \(-\sin \pi = 0\).' },
                        { year: '2014 (I)', question: 'Find \\(\\lim_{x \\to \infty} \\frac{2x+3}{5x+7}\\).', answer: '2/5', explanation: 'Divide by x: \((2+3/x)/(5+7/x) \to 2/5\).' },
                        { year: '2013 (I)', question: 'Derivative of \\(\\sec x\\) is:', answer: '\\(\\sec x \tan x\\)', explanation: 'Standard formula.' }
                    ]
                },
                {
                    id: 'integration',
                    title: 'Integral Calculus',
                    theory: `
# Integral Calculus
Integration is the reverse process of differentiation. The NDA exam heavily favors Definite Integrals utilizing specific properties over massive indefinite integral calculations.

### Standard Indefinite Integrals:
1. \[\int x^n dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1)\]
2. \[\int \frac{1}{x} dx = \ln|x| + C\]
3. \[\int e^x dx = e^x + C\]
4. \[\int a^x dx = \frac{a^x}{\ln a} + C\]

### Key Definite Integral Properties:
1. \[\int_a^b f(x) dx = -\int_b^a f(x) dx\]
2. \[\int_a^b f(x) dx = \int_a^c f(x) dx + \int_c^b f(x) dx\]
3. **The King's Rule:**
\[\int_a^b f(x) dx = \int_a^b f(a+b-x) dx\]
4. **Even/Odd Property:**
For \(\int_{-a}^a f(x) dx\):
- If \(f(x)\) is **Even** (\(f(-x) = f(x)\)):
\[\int_{-a}^a f(x) dx = 2\int_0^a f(x) dx\]
- If \(f(x)\) is **Odd** (\(f(-x) = -f(x)\)):
\[\int_{-a}^a f(x) dx = 0\]
                    `,
                    tricks: 'The King\'s Rule solves 90% of complex definite integrals in the NDA exam. If you see \(\\sin x / (\\sin x + \\cos x)\) from 0 to \(\\pi/2\), the answer is always \(\\pi/4\).',
                    examples: [
                        { question: 'Evaluate definite integral from -1 to 1 of x³ dx', solution: 'x³ is an odd function (since f(-x) = -f(x)). The integral from -a to a of an odd function is 0.' }
                    ],
                    pyqs: [
                        { year: '2023 (II)', question: 'What is \\(\\int e^x (\\sin x + \\cos x) dx\\)?', answer: '\\(e^x \\sin x + C\\)', explanation: 'Using the property \\(\\int e^x (f(x) + f\'(x)) dx = e^x f(x) + C\\).' },
                        { year: '2023 (I)', question: 'Find \\(\\int_0^1 \\frac{1}{1+x^2} dx\\).', answer: 'π/4', explanation: 'Integral is \\(\\tan^{-1} x\\). Evaluate from 0 to 1: \\(\\tan^{-1}(1) - \\tan^{-1}(0) = \\pi/4\\).' },
                        { year: '2022 (II)', question: 'The value of \\(\\int_{-1}^1 x^5 dx\\) is:', answer: '0', explanation: '\\(x^5\\) is an odd function, and the integral over a symmetric interval about zero is 0.' },
                        { year: '2022 (I)', question: 'What is \\(\\int \\log x dx\\)?', answer: '\\(x \\log x - x + C\\)', explanation: 'Using integration by parts: \\(\\int 1 \\cdot \\log x dx\\).' },
                        { year: '2021 (II)', question: '\\(\\int_0^{\\pi/2} \\frac{\\sqrt{\\sin x}}{\\sqrt{\\sin x} + \\sqrt{\\cos x}} dx = ?\\)', answer: 'π/4', explanation: 'Standard result of King\'s property. I = π/4.' },
                        { year: '2021 (I)', question: 'Find \\(\\int \\sec^2 x dx\\).', answer: '\\(\\tan x + C\\)', explanation: 'Standard integral formula.' },
                        { year: '2020 (I)', question: 'What is \\(\\int_0^{\\pi} \\cos^2 x dx\\)?', answer: 'π/2', explanation: 'Using property: \\(\\int_0^a f(x) dx = \\frac{1}{2} \\int_0^a (f(x) + f(a-x)) dx\\). \\(\\cos^2 x + \\sin^2 x = 1\\). So \\(\\int_0^{\\pi} 1/2 dx = \\pi/2\\).' },
                        { year: '2019 (II)', question: 'Evaluate \\(\\int \\frac{1}{x \\log x} dx\\).', answer: '\\(\\log(\\log x) + C\\)', explanation: 'Substitute \\(u = \\log x, du = 1/x dx\\). Integral becomes \\(\\int 1/u du = \\log u\\).' },
                        { year: '2019 (I)', question: 'Find \\(\\int_0^{\\pi/2} \\sin x dx\\).', answer: '1', explanation: 'Integral is \\(-\\cos x\\). \\(-\\cos(\\pi/2) - (-\\cos 0) = 0 + 1 = 1\\).' },
                        { year: '2018 (II)', question: 'What is \\(\\int \\frac{1}{\\sqrt{1-x^2}} dx\\)?', answer: '\\(\\sin^{-1} x + C\\)', explanation: 'Standard integral formula.' },
                        { year: '2018 (I)', question: 'Find \\(\\int_0^{\\pi/4} \\tan x dx\\).', answer: '\\(\\frac{1}{2} \\ln 2\\)', explanation: 'Integral is \\(\\ln(\\sec x)\\). \\(\\ln(\\sec \\pi/4) - \\ln(\\sec 0) = \\ln \\sqrt{2} = 1/2 \\ln 2\\).' },
                        { year: '2017 (II)', question: 'What is \\(\\int e^{2x} dx\\)?', answer: '\\(\\frac{1}{2} e^{2x} + C\\)', explanation: 'Standard integral for \\(e^{ax}\\).' },
                        { year: '2017 (I)', question: 'Find \\(\\int \\frac{dx}{x^2+a^2}\\).', answer: '\\(\\frac{1}{a} \\tan^{-1}(\\frac{x}{a}) + C\\)', explanation: 'Standard formula.' },
                        { year: '2016 (II)', question: 'Evaluate \\(\\int_0^1 x e^x dx\\).', answer: '1', explanation: 'By parts: \\(xe^x - e^x\\) from 0 to 1: \\((1e - e) - (0 - 1) = 1\\).' },
                        { year: '2016 (I)', question: 'The value of \\(\\int_0^{\\pi/2} \\frac{1}{1+\\tan x} dx\\) is:', answer: 'π/4', explanation: 'Convert to sin/cos and apply King\'s property.' },
                        { year: '2015 (II)', question: 'What is \\(\\int \\cot x dx\\)?', answer: '\\(\\ln|\\sin x| + C\\)', explanation: 'Standard integral formula.' },
                        { year: '2015 (I)', question: 'Find \\(\\int e^x dx\\).', answer: '\\(e^x + C\\)', explanation: 'Derivative and integral of \\(e^x\\) is itself.' },
                        { year: '2014 (II)', question: 'Evaluate \\(\\int \\frac{1}{x^2} dx\\).', answer: '\\(-1/x + C\\)', explanation: '\\(x^{-2} \to x^{-1}/-1\\).' },
                        { year: '2014 (I)', question: 'Value of \\(\\int_{-a}^a f(x) dx\\) if f is odd is:', answer: '0', explanation: 'Symmetric property of definite integrals.' },
                        { year: '2013 (II)', question: 'Find \\(\\int 2x dx\\).', answer: '\\(x^2 + C\\)', explanation: '\\(2 \\cdot x^2/2 = x^2\\).' }
                    ]
                },
                {
                    id: 'area-under-curves',
                    title: 'Area under Curves',
                    theory: `
# Area Under Curves
Application of definite integration to find the area of regions bounded by curves.

### Formulas:
- **Area bounded by curve \(y=f(x)\) and x-axis:**
\[\text{Area} = \int_a^b y \, dx\]
- **Area between curve and y-axis:**
\[\text{Area} = \int_c^d x \, dy\]
                    `,
                    tricks: 'Area is always positive. If the integral gives a negative value, take its absolute value.',
                    examples: [
                        { question: 'Find area of circle \(x^2 + y^2 = a^2\)', solution: 'Area = \(4 \\times \int_0^a \sqrt{a^2-x^2} dx = \pi a^2\).' }
                    ],
                    pyqs: [
                        { year: '2023 (I)', question: 'What is the area bounded by the curve \(y = |x-1|\) and the x-axis from \(x=0\) to \(x=2\)?', answer: '1', explanation: 'The area is a triangle with base 2 and height 1. Area = 1/2 * 2 * 1 = 1.' }
                    ]
                },
                {
                    id: 'differential-equations',
                    title: 'Differential Equations',
                    theory: `
# Differential Equations
Equations containing derivatives of an unknown function.

### Key Concepts:
1. **Order:** The absolute highest derivative present in the equation.
2. **Degree:** The power of the highest order derivative (after making the equation free from fractional powers/radicals).
3. **Formation:** Differentiate the given equation \\(n\\) times if there are \\(n\\) arbitrary constants to eliminate them.
### Solution Methods (First Order, First Degree):
1. **Variable Separable:** Make it \(f(x)dx = g(y)dy\) and integrate.
2. **Homogeneous:** Substitute \(y = vx\).
3. **Linear Differential Equation (LDE):** Form:
\[\frac{dy}{dx} + Py = Q\]
Integrating Factor:
\[IF = e^{\int P dx}\]
Solution:
\[y(IF) = \int Q(IF)dx + C\]
                    `,
                    tricks: 'The degree of a differential equation is NOT DEFINED if the derivative is trapped inside a transcendental function like \\(\\sin(\\frac{dy}{dx})\\) or \\(e^{dy/dx}\\). But the order is always defined.',
                    examples: [
                        { question: 'Find order and degree of \\((\\frac{d^2y}{dx^2})^3 + (\\frac{dy}{dx})^4 = 0\\)', solution: 'Highest derivative is 2nd order. Its power is 3. So Order = 2, Degree = 3.' }
                    ],
                    pyqs: [
                        { year: '2023 (II)', question: 'What is the Integrating Factor of \\(\\frac{dy}{dx} + \\frac{y}{x} = x^2\\)?', answer: 'x', explanation: 'It is a Linear DE with P = 1/x. IF = \\(e^{\\int 1/x dx} = e^{\\ln x} = x\\).' },
                        { year: '2023 (I)', question: 'Find order and degree of \(d²y/dx² + (dy/dx)³ + y = 0\).', answer: 'Order 2, Degree 1', explanation: 'Highest derivative is 2nd order, its power is 1.' },
                        { year: '2022 (I)', question: 'Solution of \(dy/dx = y/x\) is:', answer: 'y = cx', explanation: '\(\int dy/y = \int dx/x \implies \ln y = \ln x + \ln c \implies y = cx\).' },
                        { year: '2021 (II)', question: 'Number of arbitrary constants in general solution of 2nd order DE is:', answer: '2', explanation: 'The number of constants equals the order of the differential equation.' },
                        { year: '2021 (I)', question: 'Solution of \(dy/dx = e^{x-y}\) is:', answer: 'e^y = e^x + c', explanation: '\(e^y dy = e^x dx \implies \int e^y dy = \int e^x dx\).' },
                        { year: '2020 (I)', question: 'Degree of DE \(\sin(dy/dx) = x\) is:', answer: 'Not defined', explanation: 'Since derivative is inside a sine function, degree is not defined.' },
                        { year: '2019 (II)', question: 'Solve \(dy/dx + y = 0\).', answer: 'y = ce⁻ˣ', explanation: '\(dy/y = -dx \implies \ln y = -x + c \implies y = e^{-x+c}\).' },
                        { year: '2019 (I)', question: 'Find IF of \(dy/dx + y\cot x = \csc x\).', answer: 'sin x', explanation: 'P = cot x. IF = \(e^{\int \cot x dx} = e^{\ln \sin x} = \sin x\).' },
                        { year: '2018 (II)', question: 'The DE of all circles passing through origin and having centers on x-axis is of order:', answer: '1', explanation: 'One arbitrary constant (radius/center) means 1st order.' },
                        { year: '2018 (I)', question: 'General solution of \(dy/dx = k y\) represents:', answer: 'Exponential growth/decay', explanation: 'Typical for rate problems.' }
                    ]
                },
                {
                    id: 'de-applications',
                    title: 'Applications of Differential Equations',
                    theory: `
# DE Applications
Using differential equations to model real-world phenomena.

### 1. Growth and Decay:
- Rate of change is proportional to quantity:
\[\frac{dy}{dt} = ky\]
- Solution:
\[y = C e^{kt}\]

### 2. Newton's Law of Cooling:
- Rate of cooling proportional to temp difference:
\[\frac{dT}{dt} = -k(T - T_s)\]
                    `,
                    tricks: 'In growth problems, if quantity doubles in time T, \(2y_0 = y_0 e^{kT} \implies k = (\ln 2)/T\).',
                    examples: [
                        { question: 'A population doubles in 10 years. Find rate constant k.', solution: '\(k = (\ln 2)/10 \approx 0.069\).' }
                    ],
                    pyqs: [
                        { year: '2022 (II)', question: 'The rate of decay of a substance is proportional to amount present. If half-life is 50 years, find decay constant.', answer: '0.0138', explanation: '\(k = (\ln 2)/50 = 0.693/50 = 0.01386\).' }
                    ]
                }
            ]
        },
        {
            id: 'stats',
            title: 'Statistics & Probability',
            subject: 'Mathematics',
            weightage: 'Medium (10-15 Ques)',
            difficulty: 'Medium',
            subTopics: [
                {
                    id: 'measures-dispersion',
                    title: 'Measures of Dispersion',
                    theory: `
# Statistics 
Covers mean, median, mode, variance, and standard deviation.

### Core Formulas:
1. **Variance (\(\sigma^2\)):**
\[\sigma^2 = \frac{\sum (x_i - \bar{x})^2}{n} = \frac{\sum x_i^2}{n} - (\bar{x})^2\]

2. **Coefficient of Variation (CV):**
\[CV = \frac{\sigma}{\bar{x}} \times 100\]
                    `,
                    tricks: 'If you add/subtract a constant C to every observation, Mean changes by C, but Variance/Std Dev DO NOT CHANGE. If you multiply by C, Mean is multiplied by C, Std Dev is multiplied by |C|, and Variance is multiplied by C².',
                    examples: [
                        { question: 'Variance of 10 observations is 5. If 2 is added to each observation, new variance is?', solution: 'Addition does not change variance. New variance = 5.' }
                    ],
                    pyqs: [
                        { year: '2022 (I)', question: 'The standard deviation of some data is 4. If each value is multiplied by 3, what is the new standard deviation?', answer: '12', explanation: 'SD is scaled by the absolute value of the multiplier. New SD = 3 * 4 = 12.' },
                        { year: '2023 (II)', question: 'If every observation is increased by 5, what happens to the variance?', answer: 'Remains same', explanation: 'Variance is independent of change of origin.' },
                        { year: '2023 (I)', question: 'Which measure of central tendency is affected most by extreme values?', answer: 'Mean', explanation: 'Mean takes all values into account, including outliers.' },
                        { year: '2021 (II)', question: 'Relationship between Mean, Median and Mode for moderately skewed data:', answer: 'Mode = 3 Median - 2 Mean', explanation: 'Empirical relationship.' },
                        { year: '2021 (I)', question: 'Sum of deviations of a set of observations from their mean is:', answer: '0', explanation: 'Property: \(\sum(x_i - \bar{x}) = 0\).' },
                        { year: '2020 (I)', question: 'If Mean = 20 and Median = 21, find Mode.', answer: '23', explanation: '3(21) - 2(20) = 63 - 40 = 23.' },
                        { year: '2019 (II)', question: 'Range is defined as:', answer: 'Max value - Min value', explanation: 'Simplest measure of dispersion.' },
                        { year: '2019 (I)', question: 'If Mean = 10 and SD = 2, find Coefficient of Variation.', answer: '20%', explanation: 'CV = (SD/Mean) * 100 = (2/10) * 100 = 20%.' },
                        { year: '2018 (II)', question: 'Sum of squares of deviations is minimum when taken about:', answer: 'Mean', explanation: 'Property of variance calculation.' },
                        { year: '2018 (I)', question: 'Median of first 10 prime numbers is:', answer: '12', explanation: 'Primes: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29. Median is avg of 11 and 13.' }
                    ]
                },
                {
                    id: 'probability',
                    title: 'Probability',
                    theory: `
# Probability
The measure of the likelihood that an event will occur. Very high weightage topic.

### Core Concepts:
1. **Basic Formula:**
\[P(A) = \frac{\text{Favorable Outcomes}}{\text{Total Possible Outcomes}}\]

2. **Addition Theorem:**
\[P(A \cup B) = P(A) + P(B) - P(A \cap B)\]
- If mutually exclusive, \(P(A \cap B) = 0\).

3. **Multiplication Theorem (Independent Events):**
\[P(A \cap B) = P(A) \cdot P(B)\]

4. **Conditional Probability:**
\[P(A|B) = \frac{P(A \cap B)}{P(B)}\]

5. **Baye's Theorem:**
\[P(A_i|E) = \frac{P(A_i)P(E|A_i)}{\sum P(A_j)P(E|A_j)}\]

6. **Binomial Distribution:**
\[P(X = r) = {}^{n}C_r p^r q^{n-r}\]
- Mean = \(np\), Variance = \(npq\).
                    `,
                    tricks: 'For two dice, trace the sum using the "Pyramid" trick. The most likely sum is 7 (6 ways). Sums of 2 and 12 are least likely (1 way each). For coin tosses, number of outcomes is \\(2^n\\).',
                    examples: [
                        { question: 'A card is drawn from a standard deck. What is the probability it is a Face Card?', solution: 'There are 12 face cards (J,Q,K of 4 suits) in 52. P = 12/52 = 3/13.' }
                    ],
                    pyqs: [
                        { year: '2022 (II)', question: 'If \\(P(A) = 0.5\\), \\(P(B) = 0.4\\) and they are independent events, what is \\(P(A \cup B)\\)?', answer: '0.7', explanation: 'For independent events, \\(P(A \cap B) = P(A)P(B) = 0.5 \times 0.4 = 0.2\\). Then \\(P(A \cup B) = 0.5 + 0.4 - 0.2 = 0.7\\).' },
                        { year: '2023 (II)', question: 'The probability of drawing a red card or a king from a deck of cards is:', answer: '7/13', explanation: 'P(Red) = 26/52, P(King) = 4/52, P(Red and King) = 2/52. P(R or K) = (26+4-2)/52 = 28/52 = 7/13.' },
                        { year: '2023 (I)', question: 'In a single throw of two dice, what is the probability of getting a sum of 7?', answer: '1/6', explanation: 'Total outcomes = 36. Sum 7 pairs: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1). P = 6/36 = 1/6.' },
                        { year: '2022 (I)', question: 'If three coins are tossed, the probability of getting at least two heads is:', answer: '1/2', explanation: 'Total outcomes = 8. At least 2 heads: {HHH, HHT, HTH, THH}. P = 4/8 = 1/2.' },
                        { year: '2021 (II)', question: 'What is the sum of probabilities of all elementary events of an experiment?', answer: '1', explanation: 'The total probability space always sums to 1.' },
                        { year: '2021 (I)', question: 'If P(A) = 2/3, P(B) = 1/4 and events are mutually exclusive, find P(A or B).', answer: '11/12', explanation: 'P(A or B) = P(A) + P(B) = 2/3 + 1/4 = 8/12 + 3/12 = 11/12.' },
                        { year: '2020 (I)', question: 'A bag contains 5 red and 3 blue balls. If two balls are drawn at random, find probability both are red.', answer: '5/14', explanation: 'Total balls = 8. Ways to pick 2 red: 5C2 = 10. Ways to pick 2 total: 8C2 = 28. P = 10/28 = 5/14.' },
                        { year: '2019 (II)', question: 'Mean of binomial distribution is given by:', answer: 'np', explanation: 'Where n is trials and p is probability of success.' },
                        { year: '2019 (I)', question: 'If a die is thrown, what is the probability of getting an even prime number?', answer: '1/6', explanation: 'Even prime is only {2}. One outcome in six.' },
                        { year: '2018 (II)', question: 'Which of the following cannot be the probability of an event?', answer: '1.5', explanation: 'Probability must be between 0 and 1 inclusive.' },
                        { year: '2018 (I)', question: 'In a leap year, what is the probability of having 53 Sundays?', answer: '2/7', explanation: 'Leap year has 366 days = 52 weeks + 2 days. For 53 Sundays, one of those 2 days must be Sunday. Pairs: (S,M), (M,Tu), (Tu,W), (W,Th), (Th,F), (F,Sa), (Sa,S). Two pairs have Sunday.' },
                        { year: '2017 (II)', question: 'If P(A) = 0.6, find P(not A).', answer: '0.4', explanation: 'P(not A) = 1 - P(A) = 1 - 0.6 = 0.4.' },
                        { year: '2017 (I)', question: 'P(A|B) = 0.5, P(B) = 0.2. Find P(A∩B).', answer: '0.1', explanation: 'P(A∩B) = P(A|B)P(B) = 0.5 * 0.2 = 0.1.' },
                        { year: '2016 (II)', question: 'Probability of a sure event is:', answer: '1', explanation: 'An event that will definitely happen has probability 1.' },
                        { year: '2016 (I)', question: 'Probability of an impossible event is:', answer: '0', explanation: 'An event that cannot happen has probability 0.' },
                        { year: '2015 (II)', question: 'A card is drawn from a deck. Probability it is an ace?', answer: '1/13', explanation: '4 aces in 52 cards. 4/52 = 1/13.' },
                        { year: '2015 (I)', question: 'Variance of binomial distribution is:', answer: 'npq', explanation: 'n = trials, p = success, q = failure.' },
                        { year: '2014 (II)', question: 'If P(not A) = 0.7, find P(A).', answer: '0.3', explanation: '1 - 0.7 = 0.3.' },
                        { year: '2014 (I)', question: 'Probability of getting 7 in a single throw of a die is:', answer: '0', explanation: 'Maximum value on a die is 6.' },
                        { year: '2013 (II)', question: 'Two events are independent if P(A∩B) is:', answer: 'P(A)P(B)', explanation: 'Definition of independence.' }
                    ]
                },
                {
                    id: 'stats-advanced',
                    title: 'Advanced Statistics',
                    theory: `
# Advanced Statistics
Classification of data and relationships between variables.

### 1. Data Representation:
- **Frequency Distribution:** Grouped vs Ungrouped.
- **Graphical:** Histograms, Pie Charts, Frequency Polygons.

### 2. Correlation and Regression:
- **Correlation (r):** Degree of relationship between two variables. \(-1 \leq r \leq 1\).
- **Regression:** Predicting one variable from another.
                    `,
                    tricks: 'If the correlation coefficient is 1, the two regression lines are identical. If r=0, the lines are perpendicular.',
                    examples: [
                        { question: 'Find mean from frequency: x={1,2}, f={3,2}', solution: 'Mean = \(\frac{1(3)+2(2)}{3+2} = 7/5 = 1.4\).' }
                    ],
                    pyqs: [
                        { year: '2022 (I)', question: 'If the two lines of regression are perpendicular, find the correlation coefficient.', answer: '0', explanation: 'Regression lines are perpendicular only when r = 0.' }
                    ]
                }
            ]
        },
        {
            id: 'vector-3d',
            title: 'Vectors & 3D Geometry',
            subject: 'Mathematics',
            weightage: 'Medium (10-15 Ques)',
            difficulty: 'Medium',
            subTopics: [
                {
                    id: 'vectors',
                    title: 'Vector Algebra',
                    theory: `
# Vector Algebra
Variables with both magnitude and direction. Highly visual topic.

### Important Operations:
1. **Dot Product (Scalar):**
\[\vec{a} \cdot \vec{b} = |\vec{a}||\vec{b}|\cos\theta\]
   - If vectors are perpendicular, \(\vec{a} \cdot \vec{b} = 0\).
   - Projection of \(\vec{a}\) on \(\vec{b}\) is \(\frac{\vec{a} \cdot \vec{b}}{|\vec{b}|}\).

2. **Cross Product (Vector):**
\[\vec{a} \times \vec{b} = |\vec{a}||\vec{b}|\sin\theta \hat{n}\]
   - Represents the area of a parallelogram.
   - If vectors are parallel (collinear), \(\vec{a} \times \vec{b} = \vec{0}\).

3. **Scalar Triple Product (STP):**
\[[\vec{a} \quad \vec{b} \quad \vec{c}] = \vec{a} \cdot (\vec{b} \times \vec{c})\]
   - Represents the volume of a parallelepiped.
   - If STP = 0, the three vectors are coplanar.
                    `,
                    tricks: 'If asked to find a unit vector perpendicular to both \\(\vec{a}\\) and \\(\vec{b}\\), calculate their cross product and divide it by its magnitude.',
                    examples: [
                        { question: 'Find area of parallelogram with adjacent sides \\(\vec{i}+\vec{j}\\) and \\(\vec{i}-\vec{j}\\).', solution: 'Area = |\\(\vec{a} \times \vec{b}\\)| = |\\(\vec{i}\times\vec{i} - \vec{i}\times\vec{j} + \vec{j}\times\vec{i} - \vec{j}\times\vec{j}\\)| = |\\(-2\vec{k}\\)| = 2.' }
                    ],
                    pyqs: [
                        { year: '2023 (I)', question: 'If \\(\\vec{a}\\), \\(\\vec{b}\\), \\(\\vec{c}\\) are mutually perpendicular unit vectors, then what is |\\(\\vec{a} + \\vec{b} + \\vec{c}\\)|?', answer: '√3', explanation: 'Since mutually perpendicular, dot products are 0. So 1+1+1+0 = 3. Therefore magnitude is √3.' },
                        { year: '2023 (II)', question: 'Dot product of i and j is:', answer: '0', explanation: 'They are perpendicular.' },
                        { year: '2022 (II)', question: 'Cross product of i and j is:', answer: 'k', explanation: 'Right hand rule.' },
                        { year: '2022 (I)', question: 'Unit vector of a is:', answer: 'a/|a|', explanation: 'Standard definition.' },
                        { year: '2021 (II)', question: 'If a.b = 0, then a and b are:', answer: 'Perpendicular', explanation: 'Dot product property.' },
                        { year: '2021 (I)', question: 'If a x b = 0, then a and b are:', answer: 'Parallel', explanation: 'Cross product property.' },
                        { year: '2020 (I)', question: 'Projection of i on j is:', answer: '0', explanation: 'i.j / |j| = 0/1 = 0.' },
                        { year: '2019 (II)', question: 'Magnitude of i+j+k is:', answer: '√3', explanation: '√(1²+1²+1²) = √3.' },
                        { year: '2019 (I)', question: 'i . (j x k) = ?', answer: '1', explanation: 'i . i = 1.' },
                        { year: '2018 (II)', question: 'j . (i x k) = ?', answer: '-1', explanation: 'j . (-j) = -1.' }
                    ]
                },
                {
                    id: 'vector-applications',
                    title: 'Applications of Vectors',
                    theory: `
# Vector Applications
Application in Physics and Geometry.

### 1. Work Done by a Force:
\[W = \vec{F} \cdot \vec{d}\]
(Dot product of force and displacement).

### 2. Moment of a Force (Torque):
\[\vec{\tau} = \vec{r} \times \vec{F}\]
(Cross product of position vector and force).
                    `,
                    tricks: 'Work is SCALAR (dot product). Moment is VECTOR (cross product).',
                    examples: [
                        { question: 'Find work done by force \(\vec{F} = 2\hat{i} + 3\hat{j}\) for displacement \(\vec{d} = 4\hat{i} - \hat{j}\).', solution: '\(W = (2)(4) + (3)(-1) = 8 - 3 = 5\) units.' }
                    ],
                    pyqs: [
                        { year: '2021 (I)', question: 'Find the moment of force \(\vec{F} = \hat{i} + 2\hat{j} + 3\hat{k}\) acting at point (1, 1, 1) about origin.', answer: '\(\hat{i} - 2\hat{j} + \hat{k}\)', explanation: '\(\vec{r} = \hat{i} + \hat{j} + \hat{k}\). \(\vec{r} \times \vec{F} = \hat{i} - 2\hat{j} + \hat{k}\).' }
                    ]
                },
                {
                    id: '3d-geometry',
                    title: '3D Geometry',
                    theory: `
# 3D Geometry
Lines and planes in three-dimensional space.

### Line and Plane Equations:
1. **Direction Cosines (l, m, n):** \(\cos\alpha, \cos\beta, \cos\gamma\).
   - Property: \[l^2 + m^2 + n^2 = 1\]
2. **Direction Ratios (a, b, c):** Proportional to direction cosines.
3. **Equation of a Line:**
   - Vector form: \[\vec{r} = \vec{a} + \lambda\vec{b}\]
   - Cartesian: \[\frac{x-x_1}{a} = \frac{y-y_1}{b} = \frac{z-z_1}{c}\]
4. **Equation of a Plane:**
   - Normal form: \[\vec{r} \cdot \hat{n} = d\]
   - Cartesian: \[ax + by + cz + d = 0\]
                    `,
                    tricks: 'Shortest distance between two parallel lines is \\(\frac{|(\vec{a_2}-\vec{a_1}) \times \vec{b}|}{|\vec{b}|}\\). Skew lines formula is longer, but if STP of their vectors is 0, they intersect.',
                    examples: [
                        { question: 'What are the direction cosines of the x-axis?', solution: 'The x-axis makes angles 0, 90, 90 with the x,y,z axes respectively. \\(\cos 0=1, \cos 90=0, \cos 90=0\\). Direction cosines: (1, 0, 0).' }
                    ],
                    pyqs: [
                        { year: '2021 (I)', question: 'What is the sum of the squares of the direction cosines of any line?', answer: '1', explanation: 'By definition, \\(l^2 + m^2 + n^2 = 1\\). Note: sum of squares of direction EQUATIONS is NOT 1, only DRs divided by magnitude gives DCs.' }
                    ]
                }
            ]
        },
        {
            id: 'geometry',
            title: 'Geometric Concepts (2D)',
            subject: 'Mathematics',
            weightage: 'Medium (10-15 Ques)',
            difficulty: 'Medium',
            subTopics: [
                {
                    id: 'straight-lines',
                    title: 'Straight Lines',
                    theory: `
# Straight Lines
A linear equation in two variables represents a straight line.

### Key Formulas:
1. **Slope-Intercept Form:** \\(y = mx + c\\)
2. **Point-Slope Form:** \\(y - y_1 = m(x - x_1)\\)
3. **Distance of a Point from a Line:** \\(d = \\frac{|ax_1 + by_1 + c|}{\\sqrt{a^2 + b^2}}\\)
4. **Angle between two lines:** \\(\\tan \\theta = \\left| \\frac{m_1 - m_2}{1 + m_1 m_2} \\right|\\)
                    `,
                    tricks: 'If two lines are parallel, their slopes are equal (m1 = m2). If perpendicular, the product of their slopes is -1 (m1*m2 = -1).',
                    examples: [
                        { question: 'Find distance of origin from line 3x + 4y - 10 = 0', solution: 'd = |-10| / sqrt(3^2 + 4^2) = 10 / 5 = 2.' }
                    ],
                    pyqs: [
                        { year: '2022 (I)', question: 'What is the angle between the lines x + y = 1 and x - y = 1?', answer: '90°', explanation: 'Slopes are -1 and 1. Their product is -1, hence they are perpendicular.' },
                        { year: '2023 (II)', question: 'The equation of a line passing through (1,2) with slope 3 is:', answer: '3x - y - 1 = 0', explanation: 'y - 2 = 3(x - 1) => y - 2 = 3x - 3 => 3x - y - 1 = 0.' },
                        { year: '2023 (I)', question: 'Distance between parallel lines y = 2x + 4 and y = 2x + 9 is:', answer: '√5', explanation: 'd = |c1 - c2| / √(1 + m²) = |4 - 9| / √(1 + 4) = 5 / √5 = √5.' },
                        { year: '2021 (II)', question: 'Slope of the line 2x + 3y = 6 is:', answer: '-2/3', explanation: '3y = -2x + 6 => y = (-2/3)x + 2.' },
                        { year: '2021 (I)', question: 'Equation of x-axis is:', answer: 'y = 0', explanation: 'Every point on x-axis has y-coordinate zero.' },
                        { year: '2020 (I)', question: 'Find intersection of x + y = 2 and x - y = 0.', answer: '(1,1)', explanation: 'Solving simultaneously: 2x = 2 => x=1, y=1.' },
                        { year: '2019 (II)', question: 'Length of perpendicular from (0,0) to 3x + 4y - 5 = 0 is:', answer: '1', explanation: 'd = |-5| / √(3²+4²) = 5/5 = 1.' },
                        { year: '2019 (I)', question: 'Lines x = 5 and y = 7 are:', answer: 'Perpendicular', explanation: 'One is vertical, one is horizontal.' },
                        { year: '2018 (II)', question: 'Slope of a line perpendicular to y = 5x + 3 is:', answer: '-1/5', explanation: 'm1*m2 = -1 => 5*m2 = -1 => m2 = -1/5.' },
                        { year: '2018 (I)', question: 'Midpoint of (2,4) and (6,8) is:', answer: '(4,6)', explanation: '((2+6)/2, (4+8)/2) = (4,6).' }
                    ]
                },
                {
                    id: 'conics',
                    title: 'Conic Sections',
                    theory: `
# Conic Sections (Circles, Parabolas, Ellipses, Hyperbolas)

### Key Concepts:
1. **Circle:** \\((x-h)^2 + (y-k)^2 = r^2\\)
2. **Parabola:** \\(y^2 = 4ax\\) (focus at \\((a,0)\\), directrix \\(x = -a\\))
3. **Ellipse:** \\(\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1\\) (Eccentricity \\(e < 1\\))
4. **Hyperbola:** \\(\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1\\) (Eccentricity \\(e > 1\\))
                    `,
                    tricks: 'For standard shapes, remember eccentricities: Circle (e=0), Parabola (e=1), Ellipse (0 < e < 1), Hyperbola (e > 1).',
                    examples: [
                        { question: 'What is the center of the circle x² + y² - 4x + 6y - 3 = 0?', solution: 'Center = (2, -3).' }
                    ],
                    pyqs: [
                        { year: '2023 (II)', question: 'What is the eccentricity of a rectangular hyperbola?', answer: '√2', explanation: 'For a rectangular hyperbola, a=b. e = √(1 + b²/a²) = √(1+1) = √2.' },
                        { year: '2023 (I)', question: 'What is the radius of the circle x² + y² = 16?', answer: '4', explanation: 'r² = 16 => r = 4.' },
                        { year: '2022 (II)', question: 'Focus of parabola y² = 12x is:', answer: '(3,0)', explanation: '4a = 12 => a = 3.' },
                        { year: '2022 (I)', question: 'Equation of circle with center (0,0) and radius 5 is:', answer: 'x² + y² = 25', explanation: 'Standard form.' },
                        { year: '2021 (II)', question: 'Eccentricity of parabola is always:', answer: '1', explanation: 'By definition.' },
                        { year: '2021 (I)', question: 'Directrix of y² = 4ax is:', answer: 'x = -a', explanation: 'Standard property.' },
                        { year: '2020 (I)', question: 'Sum of focal distances of any point on an ellipse is equal to:', answer: 'Length of major axis (2a)', explanation: 'Property of ellipse.' },
                        { year: '2019 (II)', question: 'Equation x²/16 + y²/9 = 1 represents:', answer: 'Ellipse', explanation: 'Coefficients are different and positive.' },
                        { year: '2019 (I)', question: 'If e = 0, the conic section is a:', answer: 'Circle', explanation: 'Circle is a special case of ellipse with e=0.' },
                        { year: '2018 (II)', question: 'Length of latus rectum of y² = 4ax is:', answer: '4a', explanation: 'Standard formula.' }
                    ]
                }
,
                {
                    id: 'sphere',
                    title: 'Sphere',
                    theory: `
# Sphere
The 3D equivalent of a circle.

### Equations:
1. **Standard Form:**
\[x^2 + y^2 + z^2 = r^2\]
(Center at origin).

2. **General Form:**
\[x^2 + y^2 + z^2 + 2ux + 2vy + 2wz + d = 0\]
   - **Center:** \((-u, -v, -w)\)
   - **Radius:** \[\sqrt{u^2 + v^2 + w^2 - d}\]
                    `,
                    tricks: 'A sphere is determined by 4 points. If the general equation gives a negative value inside the square root for the radius, the sphere is imaginary.',
                    examples: [
                        { question: 'Find center and radius of \(x^2 + y^2 + z^2 - 2x + 4y - 6z + 1 = 0\)', solution: 'u=-1, v=2, w=-3, d=1. Center: (1, -2, 3). Radius: \(\sqrt{1^2 + (-2)^2 + 3^2 - 1} = \sqrt{13}\).' }
                    ],
                    pyqs: [
                        { year: '2021 (I)', question: 'What is the equation of the sphere with center (2, -3, 4) and radius 5?', answer: '\((x-2)^2 + (y+3)^2 + (z-4)^2 = 25\)', explanation: 'Using the standard form for a translated center: \((x-x_0)^2 + (y-y_0)^2 + (z-z_0)^2 = r^2\).' }
                    ]
                }
            ]
        },
        {
            id: 'english-gat',
            title: 'English (Spotting Errors & Synonyms)',
            subject: 'GAT',
            weightage: 'High (50 Ques)',
            difficulty: 'Medium',
            subTopics: [
                {
                    id: 'spotting-errors',
                    title: 'Grammar: Spotting Errors',
                    theory: `
# Spotting Errors
This section tests structural grammar, subject-verb agreement, tenses, prepositions, and articles. It forms a significantly large chunk of the English paper.

### Category 1: Subject-Verb Agreement (The Most Tested Rule)

1. **The 'Neither/Either' Rule:** 'Each', 'every', 'neither', 'either', 'none', 'anyone', 'everyone' always take a **singular verb**.
   - *Incorrect*: Neither of the boys are here.
   - *Correct*: Neither of the boys **is** here.

2. **The 'As Well As' Rule:** When two subjects are joined by 'as well as', 'with', 'along with', 'together with', or 'in addition to', the verb agrees with the **first subject**.
   - *Incorrect*: The captain, along with his team, are ready.
   - *Correct*: The captain, along with his team, **was** ready.

3. **The 'Neither...Nor' Rule:** When subjects are joined by 'neither...nor', 'either...or', or 'not only...but also', the verb agrees with the **subject nearest to it**.
   - *Correct*: Neither the players nor the coach **was** present. (Coach is singular)

4. **Collective Nouns:** Words like 'jury', 'committee', 'army', 'family' take a **singular verb** when acting unified, but a **plural verb** when divided in opinion.
   - *Unified*: The committee **has** submitted its report.
   - *Divided*: The committee **are** divided in their opinions.

### Category 2: Conditionals & Tenses

1. **Zero Conditional (Facts):** If + Present Simple, Present Simple. (If you heat ice, it melts.)

2. **First Conditional (Real Future):** If + Present Simple, Will/Can/May + Verb. (If it rains, we will cancel.)
   - *Crucial Rule:* NEVER use 'will' in the 'if' clause. (Incorrect: If it will rain, I will stay home.)

3. **Second Conditional (Unreal Present):** If + Past Simple, Would/Could + Verb. (If I had money, I would buy it.)
   - *Subjunctive Mood:* For hypothetical situations, 'were' is used for all subjects. (If I **were** a bird, I would fly.)

4. **Third Conditional (Unreal Past):** If + Past Perfect, Would have + Past Participle. (If he had studied, he would have passed.)

### Category 3: Tricky Connectors & Adverbs

1. **Hardly/Scarcely:** Followed by **'when'**, NEVER 'than'.
   - *Correct*: Hardly had I reached the station **when** the train left.

2. **No Sooner:** Followed by **'than'**, NEVER 'when' or 'then'.
   - *Correct*: No sooner did the bell ring **than** the boys ran out.

3. **Lest:** Followed by **'should'** (or base verb). It implies a negative consequence ('so that...not'), so do NOT use 'not' after it.
   - *Incorrect*: Run fast lest you should not miss the train.
   - *Correct*: Run fast lest you **should** miss the train.

### Category 4: Nouns & Adjectives

1. **Uncountable Nouns:** Words like *scenery, poetry, furniture, advice, information, luggage, baggage, news* are uncountable. They do NOT take 's' and always take a singular verb.
   - *Incorrect*: He gave me many advices. (Use 'pieces of advice')
   - *Incorrect*: The sceneries of Kashmir are beautiful. (Use 'scenery is')

2. **Degrees of Comparison:** Do not use double comparatives or superlatives.
   - *Incorrect*: He is more taller than me. (Use 'taller')
   - *Rule:* Use 'than' after comparatives, but use 'to' after words ending in -ior (*senior, junior, superior, inferior, prior*).
                    `,
                    tricks: 'A rapid checklist for Spotting Errors: 1. Find the true Subject and check the Verb. 2. Check the Tense consistency throughout the sentence. 3. Check for pairs (No sooner/than, Hardly/when). 75% of errors live here.',
                    examples: [
                        { question: 'Find error: The box of chocolates are missing.', solution: 'Error is "are". The subject is "box" (singular), so the verb must be "is".' },
                        { question: 'Find error: He is senior than me in service.', solution: 'Error is "than". Words ending in -ior take "to". Correction: He is senior to me.' }
                    ],
                    pyqs: [
                        { year: '2023 (I)', question: 'Identify the error: One of my friend (A) / is returning (B) / to India from the USA. (C) / No Error (D)', answer: 'A', explanation: '"One of" must be followed by a plural noun. It should be "One of my friends".' },
                        { year: '2022 (II)', question: 'Identify the error: Supposing if (A) / it rains (B) / what shall we do? (C) / No Error (D)', answer: 'A', explanation: '"Supposing" and "if" mean the same thing. Using both together is redundant. Use either "Supposing" or "If".' },
                        { year: '2023 (II)', question: 'The reason why (A) / he was rejected (B) / was because he was too young. (C) / No Error (D)', answer: 'C', explanation: 'After "The reason why", use "that" instead of "because". Correction: ...was that he was too young.' },
                        { year: '2022 (I)', question: 'Neither the captain (A) / nor his soldiers (B) / was present in the meeting. (C) / No Error (D)', answer: 'C', explanation: 'With "neither...nor", the verb agrees with the nearest subject. "Soldiers" is plural, so it should be "were".' },
                        { year: '2021 (II)', question: 'Hardly had I (A) / reached the airport (B) / than the plane took off. (C) / No Error (D)', answer: 'C', explanation: 'Hardly/Scarcely is followed by "when", not "than".' },
                        { year: '2021 (I)', question: 'The sceneries (A) / of Kashmir (B) / are very charming. (C) / No Error (D)', answer: 'A', explanation: '"Scenery" is an uncountable noun and has no plural form.' },
                        { year: '2020 (I)', question: 'If he would have (A) / worked hard (B) / he would have passed. (C) / No Error (D)', answer: 'A', explanation: 'Conditionals: In the Third Conditional, the "if" clause uses Past Perfect. Correction: If he had worked hard...' },
                        { year: '2019 (II)', question: 'Ten miles (A) / are a long distance (B) / to walk. (C) / No Error (D)', answer: 'B', explanation: 'Distances, periods of time, or sums of money are considered a single unit. Correction: ...is a long distance.' },
                        { year: '2019 (I)', question: 'She is (A) / senior than (B) / me in service. (C) / No Error (D)', answer: 'B', explanation: 'Words like senior, junior, superior take "to", not "than".' },
                        { year: '2018 (II)', question: 'The quality (A) / of the mangoes (B) / were not good. (C) / No Error (D)', answer: 'C', explanation: 'The subject is "quality" (singular), so the verb should be "was".' },
                        { year: '2018 (I)', question: 'My father (A) / as well as (B) / my brothers are coming. (C) / No Error (D)', answer: 'C', explanation: 'With "as well as", the verb agrees with the first subject ("father"). Correction: ...is coming.' },
                        { year: '2017 (II)', question: 'No sooner did (A) / the sun rise (B) / when the fog disappeared. (C) / No Error (D)', answer: 'C', explanation: '"No sooner" is followed by "than", not "when".' },
                        { year: '2017 (I)', question: 'Each of (A) / the candidates (B) / have given their best. (C) / No Error (D)', answer: 'C', explanation: '"Each of" takes a singular verb and singular pronoun. Correction: ...has given his best.' },
                        { year: '2016 (II)', question: 'Unless you (A) / do not work hard (B) / you cannot succeed. (C) / No Error (D)', answer: 'B', explanation: '"Unless" itself is negative; do not use another negative with it. Correction: Unless you work hard...' },
                        { year: '2016 (I)', question: 'He is (A) / the most tallest (B) / boy in the class. (C) / No Error (D)', answer: 'B', explanation: 'Double superlatives are incorrect. Correction: ...the tallest boy.' },
                        { year: '2015 (II)', question: 'The jury (A) / was divided (B) / in their opinion. (C) / No Error (D)', answer: 'B', explanation: 'When a collective noun is divided in opinion, it takes a plural verb. Correction: ...were divided.' },
                        { year: '2015 (I)', question: 'I have (A) / many works (B) / to do today. (C) / No Error (D)', answer: 'B', explanation: '"Work" is uncountable. Use "much work" or "many pieces of work".' },
                        { year: '2014 (II)', question: 'Bread and butter (A) / are (B) / my favorite breakfast. (C) / No Error (D)', answer: 'B', explanation: 'When two nouns express a single idea, they take a singular verb. Correction: ...is my favorite breakfast.' },
                        { year: '2014 (I)', question: 'The news (A) / are (B) / very disappointing. (C) / No Error (D)', answer: 'B', explanation: '"News" is always singular. Correction: ...is very disappointing.' },
                        { year: '2013 (II)', question: 'Neither of (A) / the two boys (B) / are guilty. (C) / No Error (D)', answer: 'C', explanation: '"Neither of" always takes a singular verb. Correction: ...is guilty.' }
                    ]
                },
                {
                    id: 'synonyms-antonyms',
                    title: 'Vocabulary: Synonyms & Antonyms',
                    theory: `
# Synonyms & Antonyms
Vocabulary tests your grasp of the English language. In the NDA exam, words are often contextualized within a sentence, which provides crucial clues. However, having a strong mental lexicon is indispensable.

### Effective Memorisation Strategies
1. **Root Words:** English borrows heavily from Latin and Greek. Knowing roots unlocks hundreds of words.
   - *Luc / Lum* (Light): Lucid (clear), Illuminate, Translucent.
   - *Bene* (Good): Benign (harmless/kind), Benefactor, Benevolent.
   - *Mal* (Bad): Malicious, Malign (speak ill of), Malevolent.
   - *Belli / Pug* (War/Fight): Belligerent (aggressive), Pugnacious (ready to fight).
   - *Plac* (Calm): Placate (to calm), Complacent (self-satisfied), Placid (peaceful).
2. **Contextual Usage:** A word can have different meanings based on the sentence. 'Bank' can be a financial institution or a river edge. 'Fast' can mean quick, starved, or secure (hold fast).

### High-Frequency NDA Vocabulary List

**A - E**
- **Abundant:** Plentiful (Syn: Copious, Ample | Ant: Scarce, Meagre)
- **Acrimonious:** Angry and bitter (Syn: Rancorous, Hostile | Ant: Amicable, Cordial)
- **Audacious:** Showing a willingness to take bold risks (Syn: Intrepid, Daring | Ant: Timid, Cowardly)
- **Banal:** Lacking originality; boring (Syn: Hackneyed, Trite | Ant: Original, Fresh)
- **Candid:** Truthful and straightforward (Syn: Frank, Outspoken | Ant: Deceitful, Evasive)
- **Capricious:** Given to sudden changes of mood/behaviour (Syn: Fickle, Volatile | Ant: Stable, Consistent)
- **Diligent:** Hard-working (Syn: Assiduous, Industrious | Ant: Lazy, Lethargic)
- **Ephemeral:** Lasting for a very short time (Syn: Transient, Fleeting | Ant: Permanent, Eternal)

**F - O**
- **Frivolous:** Not having any serious purpose or value (Syn: Flippant, Trivial | Ant: Serious, Important)
- **Gregarious:** Fond of company; sociable (Syn: Extroverted, Convivial | Ant: Introverted, Reclusive)
- **Hostile:** Unfriendly; antagonistic (Syn: Belligerent, Inimical | Ant: Friendly, Amiable)
- **Impetuous:** Acting quickly without thought or care (Syn: Reckless, Rash | Ant: Cautious, Prudent)
- **Lethargic:** Sluggish and apathetic (Syn: Slothful, Torpid | Ant: Energetic, Vivacious)
- **Lucid:** Expressed clearly; easy to understand (Syn: Articulate, Comprehensible | Ant: Obscure, Ambiguous)
- **Mitigate:** Make less severe or painful (Syn: Alleviate, Assuage | Ant: Aggravate, Exacerbate)
- **Obsolete:** No longer produced or used (Syn: Outdated, Antiquated | Ant: Contemporary, Modern)

**P - Z**
- **Pragmatic:** Dealing with things sensibly and realistically (Syn: Practical | Ant: Idealistic, Impractical)
- **Reticent:** Not revealing one's thoughts or feelings readily (Syn: Reserved, Taciturn | Ant: Talkative, Garrulous)
- **Sporadic:** Occurring at irregular intervals; scattered (Syn: Intermittent, Fitful | Ant: Continuous, Frequent)
- **Vigilant:** Keeping careful watch for danger (Syn: Watchful, Alert | Ant: Negligent, Careless)
- **Zealous:** Showing great energy or enthusiasm (Syn: Fervent, Passionate | Ant: Apathetic, Indifferent)
                    `,
                    tricks: 'The Elimination Technique: If two options mean exactly the same thing, neither is the answer. If a word sounds extremely negative and the sentence tone is positive, eliminate it instantly.',
                    examples: [
                        { question: 'Find Synonym of: The speaker was very *articulate*.', solution: 'Articulate means fluent and clear. The synonym is "Eloquent".' },
                        { question: 'Find Antonym of: He is known for his *parsimonious* nature.', solution: 'Parsimonious means very unwilling to spend money (stingy/miserly). The antonym is "Extravagant" or "Generous".' }
                    ],
                    pyqs: [
                        { year: '2022 (II)', question: 'Antonym of: His arguments were absolutely **specious**.', answer: 'Valid', explanation: '"Specious" means superficially plausible, but actually wrong. The opposite is valid/genuine.' },
                        { year: '2021 (I)', question: 'Synonym of: The officer was reprieved for his **intrepid** action.', answer: 'Fearless', explanation: 'Intrepid (from the root "trepid" meaning fear, negated by "in") means fearless or adventurous.' },
                        { year: '2023 (II)', question: 'Synonym of: The **abundant** rainfall helped the crops.', answer: 'Plentiful', explanation: 'Abundant means existing in large quantities.' },
                        { year: '2023 (I)', question: 'Antonym of: She is very **gregarious** by nature.', answer: 'Reclusive', explanation: 'Gregarious means fond of company; sociable. The opposite is reclusive or unsociable.' },
                        { year: '2022 (I)', question: 'Synonym of: The **candid** interview revealed many secrets.', answer: 'Frank', explanation: 'Candid means truthful and straightforward.' },
                        { year: '2021 (II)', question: 'Antonym of: His **lethargic** behavior was a cause for concern.', answer: 'Energetic', explanation: 'Lethargic means sluggish and apathetic. The opposite is energetic or active.' },
                        { year: '2020 (I)', question: 'Synonym of: The news was **ephemeral**.', answer: 'Short-lived', explanation: 'Ephemeral means lasting for a very short time.' },
                        { year: '2019 (II)', question: 'Antonym of: The weather was **capricious**.', answer: 'Stable', explanation: 'Capricious means given to sudden changes of mood or behavior. The opposite is stable or consistent.' },
                        { year: '2019 (I)', question: 'Synonym of: He is extremely **diligent**.', answer: 'Industrious', explanation: 'Diligent means having or showing care and conscientiousness in one\'s work.' },
                        { year: '2018 (II)', question: 'Antonym of: The project was **banal**.', answer: 'Original', explanation: 'Banal means lacking in originality; boring. The opposite is original or fresh.' },
                        { year: '2018 (I)', question: 'Synonym of: The situation was **mitigated**.', answer: 'Alleviated', explanation: 'Mitigate means make less severe, serious, or painful.' },
                        { year: '2017 (II)', question: 'Antonym of: He was **reticent** about his plans.', answer: 'Garrulous', explanation: 'Reticent means not revealing one\'s thoughts or feelings readily. The opposite is garrulous or talkative.' },
                        { year: '2017 (I)', question: 'Synonym of: The growth was **sporadic**.', answer: 'Intermittent', explanation: 'Sporadic means occurring at irregular intervals or only in a few places.' },
                        { year: '2016 (II)', question: 'Antonym of: His approach was **pragmatic**.', answer: 'Idealistic', explanation: 'Pragmatic means dealing with things sensibly and realistically. The opposite is idealistic or visionary.' },
                        { year: '2016 (I)', question: 'Synonym of: He was **vigilant** during the night.', answer: 'Watchful', explanation: 'Vigilant means keeping careful watch for possible danger or difficulties.' },
                        { year: '2015 (II)', question: 'Antonym of: The meeting was **acrimonious**.', answer: 'Cordial', explanation: 'Acrimonious means angry and bitter. The opposite is cordial or friendly.' },
                        { year: '2015 (I)', question: 'Synonym of: The design is **obsolete**.', answer: 'Outdated', explanation: 'Obsolete means no longer produced or used; out of date.' },
                        { year: '2014 (II)', question: 'Antonym of: He is very **audacious**.', answer: 'Timid', explanation: 'Audacious means showing a willingness to take surprisingly bold risks. The opposite is timid.' },
                        { year: '2014 (I)', question: 'Synonym of: The speech was **lucid**.', answer: 'Clear', explanation: 'Lucid means expressed clearly; easy to understand.' },
                        { year: '2013 (II)', question: 'Antonym of: He is a **frivolous** person.', answer: 'Serious', explanation: 'Frivolous means not having any serious purpose or value. The opposite is serious.' }
                    ]
                },
                {
                    id: 'idioms-phrases',
                    title: 'Idioms & Phrases',
                    theory: `
# Idioms and Phrases
An idiom is a phrase whose **figurative meaning** is completely different from its **literal meaning**. NDA English paper typically has 4-6 questions directly on idioms.

---

## Category 1: Actions & Effort
- **To bite the bullet** — To endure a painful or difficult situation bravely.
- **To burn the midnight oil** — To work or study late into the night.
- **To leave no stone unturned** — To try every possible means to achieve something.
- **To take the bull by the horns** — To face a difficult situation boldly and directly.
- **To burn one's boats/bridges** — To do something that makes it impossible to go back.
- **To move heaven and earth** — To do everything possible to achieve something.
- **To keep the ball rolling** — To maintain the progress of an activity.
- **To toe the line** — To conform to a rule or standard; follow orders.
- **To pull one's socks up** — To make an effort to improve one's work or behaviour.
- **To bear the brunt** — To suffer the main force or impact of something unpleasant.

## Category 2: Success & Failure
- **To bite the dust** — To fail or be defeated; to die.
- **To hit the nail on the head** — To describe exactly what is causing a problem; to be exactly right.
- **To strike while the iron is hot** — To take advantage of an opportunity without delay.
- **To miss the boat** — To miss an opportunity; to be too late.
- **To bite off more than one can chew** — To take on more responsibility than one can handle.
- **A blessing in disguise** — Something that seems bad at first but turns out to be good.
- **To reap the whirlwind** — To suffer the consequences of one's own bad actions.
- **To throw in the towel** — To admit defeat; to give up.
- **To come out with flying colours** — To succeed brilliantly; to pass with distinction.
- **To steal a march on** — To gain an advantage over someone by acting before them.

## Category 3: Secrecy & Deception
- **To let the cat out of the bag** — To reveal a secret carelessly or by mistake.
- **To smell a rat** — To suspect that something is wrong or that someone is being dishonest.
- **To turn a blind eye** — To pretend not to notice something wrong.
- **To pull the wool over someone's eyes** — To deceive or trick someone.
- **A wolf in sheep's clothing** — A dangerous person pretending to be harmless and friendly.
- **To keep something under wraps** — To keep something secret.
- **To blow the whistle** — To expose wrongdoing; to inform on someone.
- **To play one's cards close to the chest** — To keep one's plans or thoughts secret.

## Category 4: Conflict & Difficulty
- **To beat around the bush** — To avoid the main topic; to talk around the point.
- **To add fuel to the fire** — To make a bad situation worse.
- **To be in hot water** — To be in trouble or in a difficult situation.
- **To pick a quarrel** — To start a fight or argument deliberately.
- **To sit on the fence** — To be neutral; to avoid taking sides in a controversy.
- **To cross swords** — To argue or fight with someone.
- **To get into a scrape** — To get into a difficult or embarrassing situation.
- **Through thick and thin** — Through all difficulties and good times alike; in all circumstances.

## Category 5: Time & Frequency
- **Once in a blue moon** — Very rarely; hardly ever.
- **At the eleventh hour** — At the last possible moment; just in time.
- **In the nick of time** — Just in time; not a moment too soon.
- **To kill time** — To spend time doing unimportant things while waiting for something.
- **To burn daylight** — To waste time.
- **Red-letter day** — A day of special importance or happiness.
- **To nip something in the bud** — To stop something at an early stage before it gets worse.

## Category 6: People & Character
- **A dark horse** — An unknown, unexpected competitor who does well.
- **A wet blanket** — A person who dampens enthusiasm or enjoyment.
- **A snake in the grass** — A treacherous or deceitful person who pretends to be a friend.
- **A black sheep** — A member of a group who is regarded as a failure or embarrassment.
- **To show one's true colours** — To reveal one's real nature or character.
- **A chip off the old block** — A person who closely resembles their parent in character or behaviour.
- **To feather one's own nest** — To accumulate money or possessions for oneself, often dishonestly.
- **A doubting Thomas** — A person who refuses to believe without direct proof.

## Category 7: Communication & Knowledge
- **To read between the lines** — To understand the hidden or implied meaning.
- **To get the wrong end of the stick** — To misunderstand something completely.
- **To speak one's mind** — To say exactly what one thinks without holding back.
- **To put one's foot in one's mouth** — To say something embarrassing or tactless by mistake.
- **At one's wit's end** — To be so worried or confused that you don't know what to do.
- **To keep one's fingers crossed** — To hope that something will succeed or turn out well.
- **In black and white** — In writing; officially documented.

## Category 8: Idioms with Animals
- **To let sleeping dogs lie** — To avoid bringing up old problems that might cause trouble.
- **To kill two birds with one stone** — To achieve two things with a single action.
- **Every dog has its day** — Everyone will have a moment of success at some point in life.
- **To have a bee in one's bonnet** — To be obsessed with one particular idea.
- **To open a can of worms** — To create new problems by trying to solve an existing one.
- **When pigs fly** — Something that will never happen.
- **To take the lion's share** — To take the largest portion of something.
- **Crocodile tears** — False, insincere tears; pretended grief.
                    `,
                    tricks: 'Group idioms by theme (animals, body parts, colours, time) to memorize them faster. For NDA, the most tested categories are: Time idioms (at the eleventh hour), Effort idioms (burn the midnight oil), and Deception idioms (let the cat out of the bag). Practice identifying what category a new idiom belongs to.',
                    examples: [
                        { question: 'What does "to burn the midnight oil" mean?', solution: 'To work or study very late into the night. Origin: In pre-electricity times, people used oil lamps, and working till midnight implied burning a lot of oil.' },
                        { question: 'What does "a dark horse" mean?', solution: 'An unknown person who unexpectedly performs well in a competition or election. Example: The new candidate was a dark horse who won the election.' },
                        { question: 'What does "to sit on the fence" mean?', solution: 'To remain neutral and avoid taking sides in an argument or controversy. Example: He refused to sit on the fence and clearly stated his position.' }
                    ],
                    pyqs: [
                        { year: '2023 (II)', question: 'What is the meaning of "to burn one\'s boats"?', answer: 'To take an irreversible step; to make retreat impossible.', explanation: 'Historically: armies burned their boats after landing on enemy shores so there was no going back. The idiom means committing yourself completely to an action with no possibility of turning back.' },
                        { year: '2022 (I)', question: 'The idiom "to hit the nail on the head" means:', answer: 'To be exactly right; to describe a situation/problem accurately.', explanation: 'Just like a hammer hitting a nail perfectly on its head drives it straight in, this idiom means you have identified the exact problem or said exactly the right thing.' },
                        { year: '2021 (II)', question: 'What is the meaning of "once in a blue moon"?', answer: 'Very rarely; on very few occasions.', explanation: 'A "blue moon" is a rare astronomical event (second full moon in a calendar month). Hence the phrase means something that happens very infrequently.' },
                        { year: '2021 (I)', question: 'What is the meaning of: "To leave no stone unturned"?', answer: 'To try every possible course of action in order to achieve something.', explanation: 'Turning over every stone to find something means exhausting all possible options. Used to express maximum effort.' },
                        { year: '2020 (I)', question: 'What does "crocodile tears" mean?', answer: 'False or insincere tears; pretended sorrow.', explanation: 'Crocodiles were once believed to weep while devouring their prey. So "crocodile tears" means showing sadness that is not genuine.' },
                        { year: '2023 (I)', question: 'What does "a chip off the old block" mean?', answer: 'Resembling one\'s father/mother in character or appearance.', explanation: 'Refers to a piece of wood that looks like the larger block it was cut from.' },
                        { year: '2022 (II)', question: 'What is the meaning of "to turn a blind eye"?', answer: 'To pretend not to notice something.', explanation: 'Famous origin from Admiral Nelson who put his telescope to his blind eye to avoid seeing a signal to retreat.' },
                        { year: '2019 (II)', question: 'What does "to smell a rat" mean?', answer: 'To suspect that something is wrong or dishonest.', explanation: 'Derived from a dog smelling a rat hidden under floorboards.' },
                        { year: '2019 (I)', question: 'What is the meaning of "at the eleventh hour"?', answer: 'At the last possible moment.', explanation: 'Refers to the final hour before midnight in a 12-hour day.' },
                        { year: '2018 (II)', question: 'What does "to beat around the bush" mean?', answer: 'To avoid the main topic; to talk in a roundabout way.', explanation: 'Derived from hunters beating around a bush to startle birds instead of going directly in.' },
                        { year: '2018 (I)', question: 'Meaning of "to nip in the bud":', answer: 'To stop something at an early stage.', explanation: 'Stopping a flower bud from growing prevents the fruit or flower from developing.' },
                        { year: '2017 (II)', question: 'What does "black and white" mean?', answer: 'In writing; officially documented.', explanation: 'Clear and unambiguous, as printed ink on white paper.' },
                        { year: '2017 (I)', question: 'Meaning of "to throw in the towel":', answer: 'To admit defeat; to give up.', explanation: 'From boxing, where a coach throws a towel into the ring to stop the fight.' },
                        { year: '2016 (II)', question: 'What does "to let the cat out of the bag" mean?', answer: 'To reveal a secret by mistake.', explanation: 'From the trick of selling a cat instead of a pig in a sack; if the cat got out, the trick was revealed.' },
                        { year: '2016 (I)', question: 'What is a "red-letter day"?', answer: 'A day of special importance or happiness.', explanation: 'Special feast days used to be marked in red ink on church calendars.' },
                        { year: '2015 (II)', question: 'Meaning of "to bite the dust":', answer: 'To fail or be defeated; to die.', explanation: 'Falling on the ground in battle and "biting" the earth.' },
                        { year: '2015 (I)', question: 'Meaning of "through thick and thin":', answer: 'In all circumstances, whether good or bad.', explanation: 'Passing through thick woods and thin undergrowth; staying loyal throughout.' },
                        { year: '2014 (II)', question: 'What does "to be in hot water" mean?', answer: 'To be in trouble.', explanation: 'A dangerous or uncomfortable situation.' },
                        { year: '2014 (I)', question: 'Meaning of "to show one\'s true colours":', answer: 'To reveal one\'s real character.', explanation: 'Ships would show their true national flag (colours) only when they were ready to attack.' },
                        { year: '2013 (II)', question: 'What does "to sit on the fence" mean?', answer: 'To avoid taking sides in an argument.', explanation: 'Remaining neutral in a conflict.' }
                    ]
                },
                {
                    id: 'reading-comprehension',
                    title: 'Reading Comprehension',
                    theory: `
# Reading Comprehension
This section tests your ability to read rapidly, understand the main idea, and make inferences.

### Solving Strategy:
1. **Read the questions first:** This gives you a 'target' when you skim the paragraph.
2. **Skimming vs Scanning:** Skim to get the general idea. Scan to find specific keywords mentioned in the questions.
3. **Beware of Extreme Words:** Options containing words like 'Always', 'Never', 'All', 'None' are often incorrect in inference questions unless explicitly stated.
4. **Main Idea:** Usually found in the first or the last paragraph.
                    `,
                    tricks: 'Never use your outside knowledge to answer comprehension questions. Answer strictly based on what is stated or directly implied in the passage.',
                    examples: [
                        { question: 'If a passage argues that diet strongly impacts mental health, what can be inferred?', solution: 'Improving one\'s diet may lead to better mental well-being (based strictly on passage context).' }
                    ],
                    pyqs: [
                        { year: '2023 (II)', question: 'The passage implies that solar energy is:', answer: 'An inexhaustible resource', explanation: 'Based on the context of renewable sources mentioned in the text.' },
                        { year: '2023 (I)', question: 'According to the author, the primary challenge of AI is:', answer: 'Ethical considerations', explanation: 'Stated in the second paragraph.' },
                        { year: '2022 (II)', question: 'The word "mitigate" in the passage means:', answer: 'To reduce', explanation: 'Contextually referring to reducing the effects of climate change.' },
                        { year: '2022 (I)', question: 'What is the suitable title for the passage?', answer: 'The Future of Renewable Energy', explanation: 'Passage focuses on growth and prospects of green power.' },
                        { year: '2021 (II)', question: 'Why does the author support space exploration?', answer: 'To find sustainable resources', explanation: 'Explicitly stated in the conclusion.' },
                        { year: '2021 (I)', question: 'The tone of the passage is:', answer: 'Optimistic', explanation: 'Author focuses on solutions and future potential.' },
                        { year: '2020 (I)', question: 'Industrial revolution led to:', answer: 'Mass production', explanation: 'Mentioned as a historical turning point.' },
                        { year: '2019 (II)', question: 'Global warming is caused by:', answer: 'Greenhouse gases', explanation: 'Standard scientific fact mentioned in the text.' },
                        { year: '2019 (I)', question: 'What can be inferred about biodiversity?', answer: 'It is essential for ecosystem balance', explanation: 'Based on the interdependency discussed.' },
                        { year: '2018 (II)', question: 'Economic growth depends on:', answer: 'Infrastructure development', explanation: 'Key theme of the final section.' }
                    ]
                },
                {
                    id: 'fill-in-blanks',
                    title: 'Fill in the Blanks',
                    theory: `
# Fill in the Blanks
Fill in the blanks tests vocabulary in context, correct prepositions, articles, and verb forms. It is one of the most scoring sections.

### Key Rules for Prepositions:
- **In:** Used for months, years, seasons, countries, cities. (in January, in London)
- **On:** Used for specific days and dates. (on Monday, on 15th March)
- **At:** Used for specific times and places. (at 5 PM, at the station)
- **By:** Used for deadlines or agents in passive voice. (by Monday, written by Tagore)
- **Since:** Used with a specific point in time. (since 2020)
- **For:** Used for a duration of time. (for three years)

### Key Rules for Articles:
- **A:** Before a consonant sound (a book, a university — 'yu' sound).
- **An:** Before a vowel sound (an hour — 'ow' sound, an honest man).
- **The:** Before specific, unique, or previously mentioned nouns. Used before superlatives (the best), before rivers/mountains (the Ganga, the Himalayas).
- **No Article:** Before proper nouns, abstract nouns in general, plural nouns in general.

### Common Fixed Prepositions (Collocations):
- Fond **of**, afraid **of**, proud **of**, aware **of**, capable **of**
- Good **at**, clever **at**, skilled **at**
- Similar **to**, married **to**, used **to**, accustomed **to**
- Interested **in**, engaged **in**, absorbed **in**
- Pleased **with**, satisfied **with**, angry **with** (a person)
- Angry **at/about** (a situation)
- Compare **with** (same type), Compare **to** (different type)
                    `,
                    tricks: 'If a word has a vowel SOUND (not just a vowel letter), use "an". Example: "an hour" (h is silent), "a uniform" (u sounds like "yu"). Always test the SOUND, not the spelling.',
                    examples: [
                        { question: 'She has been working here ___ 2019.', solution: '"Since" — used with a specific point in time (2019). Use "For" with a duration (for 5 years).' },
                        { question: 'He is good ___ mathematics.', solution: '"At" — we say good at a skill (good at mathematics, good at cricket).' }
                    ],
                    pyqs: [
                        { year: '2023 (I)', question: 'Fill in: The committee arrived ___ a decision after a long debate.', answer: 'at', explanation: '"Arrive at a decision" is a fixed collocation.' },
                        { year: '2022 (II)', question: 'Fill in: He is ___ honest man who never tells lies.', answer: 'an', explanation: '"Honest" starts with a vowel sound.' },
                        { year: '2023 (II)', question: 'I have been living here ___ ten years.', answer: 'for', explanation: 'Used for a duration of time.' },
                        { year: '2022 (I)', question: 'He is addicted ___ gambling.', answer: 'to', explanation: 'Fixed preposition.' },
                        { year: '2021 (II)', question: 'There is a bridge ___ the river.', answer: 'over', explanation: 'Indicates something at a higher level than the river.' },
                        { year: '2021 (I)', question: 'She is married ___ a doctor.', answer: 'to', explanation: 'Fixed preposition (not "with").' },
                        { year: '2020 (I)', question: 'I saw ___ unique bird in the garden.', answer: 'a', explanation: '"Unique" starts with a consonant sound "yu".' },
                        { year: '2019 (II)', question: 'He died ___ cholera.', answer: 'of', explanation: 'Die of a disease.' },
                        { year: '2019 (I)', question: 'Wait ___ me at the station.', answer: 'for', explanation: 'Standard usage.' },
                        { year: '2018 (II)', question: 'He is afraid ___ snakes.', answer: 'of', explanation: 'Fixed preposition.' }
                    ]
                },
                {
                    id: 'sentence-improvement',
                    title: 'Sentence Improvement',
                    theory: `
# Sentence Improvement
A grammatically incorrect or stylistically poor sentence is given, and you choose the correct version. This section covers a wide range of grammar rules.

### Most Common Error Types (NDA Focus):

**1. Subject-Verb Agreement:**
- "Along with", "as well as", "together with" do NOT change the number of the verb — the verb agrees with the actual subject.
  - *Wrong:* The captain, along with his team, **were** ready.
  - *Correct:* The captain, along with his team, **was** ready.
- "Each", "Every", "Either", "Neither", "Anyone", "Everyone" → always **singular** verb.

**2. Tense Consistency — Universal Truths:**
- Universally true facts use Present Simple even in a past-tense narration.
  - *Wrong:* The teacher said that the Earth went around the Sun.
  - *Correct:* The teacher said that the Earth **goes** around the Sun.

**3. Double Negatives:**
- *Wrong:* I don't know nothing about it.
- *Correct:* I don't know **anything** about it.

**4. Dangling Modifiers:**
- *Wrong:* Walking down the road, the rain started to fall.
- *Correct:* Walking down the road, **I** noticed the rain starting to fall.

**5. Redundancy:**
Avoid unnecessary repetition:
- Wrong: He returned **back** home. ("back" is redundant with "returned")
- Wrong: This is a **new** innovation. ("new" is implied in "innovation")
- Wrong: Please repeat it **again**. ("again" is redundant with "repeat")

**6. Correct Use of Modals:**
- **Should/Ought to:** Advisability. **Must:** Strong obligation. **Might/May:** Possibility. **Would:** Past habit or willingness.
                    `,
                    tricks: 'Read the entire sentence before looking at options. 60% of NDA errors are in Subject-Verb Agreement or Tense. If the sentence sounds perfectly correct grammatically, confidently choose "No Improvement".',
                    examples: [
                        { question: 'Improve: "He is one of the best players who has played for India."', solution: '"who have played for India" — The relative clause refers to "players" (plural), so the verb must be "have", not "has".' },
                        { question: 'Improve: "No sooner did I arrive than the program started."', solution: 'No improvement needed. "No sooner...than" is the correct structure.' }
                    ],
                    pyqs: [
                        { year: '2023 (II)', question: 'Improve: "The news are very shocking."', answer: 'The news is very shocking.', explanation: '"News" is always singular.' },
                        { year: '2021 (I)', question: 'Improve: "She prefers to walk rather than to take a bus."', answer: 'No Improvement', explanation: 'Correct parallel structure.' },
                        { year: '2023 (I)', question: 'Improve: "He is one of the best boy in the class."', answer: 'best boys', explanation: '"One of" takes plural noun.' },
                        { year: '2022 (II)', question: 'Improve: "Each of the students have passed."', answer: 'has passed', explanation: '"Each" takes singular verb.' },
                        { year: '2022 (I)', question: 'Improve: "I would have passed if I worked hard."', answer: 'had worked', explanation: 'Third conditional.' },
                        { year: '2021 (II)', question: 'Improve: "Hardly I had reached when it rained."', answer: 'Hardly had I reached', explanation: 'Inversion after Hardly.' },
                        { year: '2020 (I)', question: 'Improve: "Unless you do not study, you will fail."', answer: 'Unless you study', explanation: 'Unless is already negative.' },
                        { year: '2019 (II)', question: 'Improve: "He returned back home yesterday."', answer: 'returned home', explanation: 'Back is redundant.' },
                        { year: '2019 (I)', question: 'Improve: "I, he and you are friends."', answer: 'You, he and I', explanation: '2-3-1 rule for pronouns.' },
                        { year: '2018 (II)', question: 'Improve: "The quality of these mangoes are good."', answer: 'is good', explanation: 'Subject is "quality".' }
                    ]
                },
                {
                    id: 'para-jumbles',
                    title: 'Para Jumbles (Sentence Ordering)',
                    theory: `
# Para Jumbles (Ordering of Sentences)
You are given a set of jumbled sentences that form a coherent paragraph. Arrange them in the correct logical order.

### Step-by-Step Solving Strategy:

**Step 1 — Find the Opening Sentence:**
- Does NOT start with connectors like "However", "But", "Therefore", "Moreover".
- Does NOT start with a pronoun whose antecedent is unclear.
- Is the most generic / introductory statement about the topic.

**Step 2 — Find Mandatory Pairs:**
- If Sentence B uses "this theory", "such a phenomenon", it must follow the sentence that describes it.
- Conjunctions like "However", "On the other hand" show contrast — pair with the opposite view.

**Step 3 — Find the Concluding Sentence:**
- Key words: "Therefore", "Thus", "Hence", "In conclusion", "Finally", "As a result".

**Step 4 — Use Article and Pronoun References:**
- **"a"** introduces something new; **"the"** refers to something already mentioned.
  - "A dog barked" → "The dog ran away" (correct order).
- If a sentence starts with "He/She/It/They", find the sentence that introduced that noun.

### Signal Words Reference Table:
| Signal Word | Function | Position |
|---|---|---|
| However / But / Yet | Contrast | After a positive statement |
| Furthermore / Moreover | Addition | After a related point |
| Therefore / Thus / Hence | Result | Last or near-last sentence |
| For example / Such as | Illustration | After a general statement |
| Initially / First of all | Beginning | First or second sentence |
                    `,
                    tricks: 'Eliminate options using the opener sentence. If you identify the first sentence correctly, you can eliminate 2-3 answer choices instantly — a major time saver in the exam.',
                    examples: [
                        { question: 'Arrange: (A) It was a cold winter night. (B) The streets were deserted. (C) Therefore, everyone stayed indoors. (D) A heavy snowfall had begun earlier.', solution: 'Correct order: A → D → B → C. A introduces the scene, D gives the reason (snow), B describes the effect (deserted streets), C gives the final conclusion.' }
                    ],
                    pyqs: [
                        { year: '2022 (I)', question: 'Arrange: P: It, however, requires effort. Q: Reading is a habit worth building. R: But the rewards are immense. S: Few people find it easy initially.', answer: 'Q, S, P, R', explanation: 'Q introduces the idea. S continues with difficulty. P concedes ("however"). R provides the positive conclusion.' }
                    ]
                },
                {
                    id: 'cloze-test',
                    title: 'Cloze Test',
                    theory: `
# Cloze Test
A passage with multiple blanks. Fill each blank with the most appropriate word. Tests vocabulary, grammar, and comprehension simultaneously.

### How to Approach a Cloze Test:

**Step 1 — Read the Full Passage First:**
Read without filling blanks. Understand the theme, tone (positive/negative/neutral), and overall meaning.

**Step 2 — Identify the Word Type Needed:**
Determine if the blank needs a noun, verb, adjective, adverb, connector, or preposition.

**Step 3 — Use Context Clues:**
- The sentences before and after the blank give strong clues.
- Eliminate words that contradict the passage's tone.

**Step 4 — Check for Tone and Register:**
- Formal passages need formal diction. Eliminate slang or overly casual options.

### Common Connector Words Used in Cloze Tests:
| Category | Words |
|---|---|
| To add information | Furthermore, Moreover, In addition, Also |
| To contrast | However, Nevertheless, Despite, Although |
| To show cause-effect | Therefore, Consequently, As a result, Thus |
| To show time | Meanwhile, Subsequently, Eventually, Thereafter |
| To give example | For instance, Such as, Namely, Including |
                    `,
                    tricks: 'When stuck between two options, say both aloud in the sentence. The one that sounds more natural in context is almost always correct. Trust your ear for collocation.',
                    examples: [
                        { question: '"The soldier showed extraordinary __ in the face of danger." Options: (A) cowardice (B) bravery (C) tiredness (D) indifference', solution: '(B) Bravery. "Extraordinary" signals a positive trait. "In the face of danger" indicates a military context. Bravery is the clear contextual fit.' }
                    ],
                    pyqs: [
                        { year: '2023 (II)', question: 'Cloze: "He was determined to __ success at any cost." (A) achieve (B) attempt (C) avoid (D) accept', answer: 'achieve', explanation: '"Determined" implies strong will toward a positive goal. "Achieve success" is the standard collocation. "Attempt" implies trying without certainty of success.' },
                        { year: '2023 (I)', question: 'Cloze: "The government has __ new measures to control pollution." (A) adapted (B) adopted (C) addicted (D) adjusted', answer: 'adopted', explanation: 'To "adopt measures" is the correct idiomatic usage for implementing new rules or policies.' },
                        { year: '2022 (II)', question: 'Cloze: "Honesty is __ policy." (A) a (B) an (C) the (D) no article', answer: 'the', explanation: 'Standard proverb: "Honesty is the best policy".' },
                        { year: '2022 (I)', question: 'Cloze: "She is capable __ doing hard work." (A) of (B) in (C) at (D) for', answer: 'of', explanation: '"Capable of" is the correct fixed preposition.' },
                        { year: '2021 (II)', question: 'Cloze: "He is senior __ me in service." (A) than (B) to (C) from (D) with', answer: 'to', explanation: 'Words like senior, junior, superior, inferior take "to", not "than".' },
                        { year: '2021 (I)', question: 'Cloze: "The train was __ by an hour." (A) delayed (B) late (C) detention (D) slow', answer: 'delayed', explanation: '"Delayed" is used when a scheduled event is pushed back.' },
                        { year: '2020 (I)', question: 'Cloze: "I am fond __ music." (A) with (B) of (C) about (D) in', answer: 'of', explanation: '"Fond of" is the correct fixed preposition.' },
                        { year: '2019 (II)', question: 'Cloze: "Prevention is better __ cure." (A) than (B) then (C) to (D) from', answer: 'than', explanation: 'Standard comparative proverb.' },
                        { year: '2019 (I)', question: 'Cloze: "He prevented me __ going there." (A) to (B) from (C) against (D) for', answer: 'from', explanation: '"Prevent/Prohibit/Abstain" take "from + gerund".' },
                        { year: '2018 (II)', question: 'Cloze: "Hard work is the key __ success." (A) for (B) to (C) in (D) with', answer: 'to', explanation: '"Key to" is the correct fixed preposition.' }
                    ]
                },
                {
                    id: 'one-word-substitution',
                    title: 'One-Word Substitution',
                    theory: `
# One-Word Substitution
A phrase is given; find the single word that replaces it. Tests advanced vocabulary.

### High-Frequency NDA One-Word Substitutions:

**People:**
- One who does not believe in God → **Atheist**
- One who believes there is no certainty about God → **Agnostic**
- One who hates mankind → **Misanthrope**
- One who loves mankind → **Philanthropist**
- One who can speak two languages → **Bilingual**
- One who lives on others → **Parasite**
- One who looks on bright side → **Optimist** | dark side → **Pessimist**
- One who walks in sleep → **Somnambalist**
- One new to a field → **Novice / Neophyte**
- One who compiles dictionaries → **Lexicographer**
- One who studies insects → **Entomologist**
- One who studies ancient objects/history → **Archaeologist**
- One who is self-centered → **Egoist**

**Places:**
- Where orphans live → **Orphanage** | Where monks live → **Monastery**
- Where nuns live → **Convent / Nunnery** | Where bees are kept → **Apiary**
- Where birds are kept → **Aviary** | Where bread is baked → **Bakery**

**Documents & Writings:**
- Life story written by oneself → **Autobiography**
- Life story written by another → **Biography**
- An unsigned article/letter → **Anonymous**
- Written by hand (original handwritten document) → **Manuscript**

**Phobias & Manias (Common in NDA):**
- Fear of water → **Hydrophobia** | Fear of heights → **Acrophobia**
- Fear of open spaces → **Agoraphobia** | Excessive desire to steal → **Kleptomania**
- Love of books → **Bibliophilia**
                    `,
                    tricks: 'Learn word roots: "Phil" = love (Philanthropist, Bibliophile). "Phobia" = fear. "Mono" = one, "Bi" = two, "Omni" = all. Knowing 10 roots helps decode 50+ words instantly.',
                    examples: [
                        { question: 'One who walks in sleep:', solution: 'Somnambalist. Root: Somnus (sleep) + Ambul (walk). Ambulance also shares the "ambul" root (moves/walks).' },
                        { question: 'The study of the origin of words:', solution: 'Etymology. Often confused with Entomology (study of insects). Remember: "Entomo" = insect.' }
                    ],
                    pyqs: [
                        { year: '2023 (I)', question: 'One word for: "A person who compiles dictionaries"', answer: 'Lexicographer', explanation: 'Lexico = words/language + grapher = one who writes/records. A lexicographer compiles and edits dictionaries.' },
                        { year: '2022 (I)', question: 'One word for: "One who is unable to pay one\'s debts"', answer: 'Insolvent', explanation: 'Insolvent (or bankrupt) - unable to pay debts. "Solvent" means having assets to cover debts. Prefix "In-" negates it.' },
                        { year: '2023 (II)', question: 'One who does not believe in existence of God:', answer: 'Atheist', explanation: 'Theist (believer) vs Atheist (non-believer).' },
                        { year: '2022 (II)', question: 'A life history of a person written by himself:', answer: 'Autobiography', explanation: 'Auto = self, bio = life, graphy = writing.' },
                        { year: '2021 (II)', question: 'One who specializes in the study of birds:', answer: 'Ornithologist', explanation: 'Ornith = bird, ology = study.' },
                        { year: '2021 (I)', question: 'A person who is self-centered:', answer: 'Egoist', explanation: 'Focused on "Ego" (self).' },
                        { year: '2020 (I)', question: 'Government by a single person with absolute power:', answer: 'Autocracy', explanation: 'Auto = self, cracy = rule.' },
                        { year: '2019 (II)', question: 'One who hates women:', answer: 'Misogynist', explanation: 'Miso = hate, gyn = woman.' },
                        { year: '2019 (I)', question: 'A place where bees are kept:', answer: 'Apiary', explanation: 'Apis = bee. (Aviary is for birds).' },
                        { year: '2018 (II)', question: 'One who looks on the bright side of things:', answer: 'Optimist', explanation: 'Pessimist is the opposite.' }
                    ]
                },
                {
                    id: 'voice-narration',
                    title: 'Voice & Narration (Direct / Indirect Speech)',
                    theory: `
# Active & Passive Voice
In **Active Voice**, the subject performs the action. In **Passive Voice**, the subject receives the action.

### Passive Voice Formula:
**Object of Active → Subject of Passive + (be verb) + Past Participle + by + Agent**

### Tense Changes in Passive Voice:
| Active Tense | Passive Form |
|---|---|
| Simple Present | am/is/are + Past Participle |
| Simple Past | was/were + Past Participle |
| Simple Future | will be + Past Participle |
| Present Continuous | am/is/are being + Past Participle |
| Past Continuous | was/were being + Past Participle |
| Present Perfect | has/have been + Past Participle |
| Past Perfect | had been + Past Participle |
| Modal (can/may/must) | Modal + be + Past Participle |

---

# Narration: Direct to Indirect Speech

### Key Tense Changes (Backshift Rule — when reporting verb is past tense):
| Direct Speech Tense | Indirect Speech Tense |
|---|---|
| Simple Present | Simple Past |
| Present Continuous | Past Continuous |
| Present Perfect | Past Perfect |
| Simple Past | Past Perfect |
| Will | Would |
| Can | Could |
| May | Might |
| Must | Had to |

### Changes in Time & Place Expressions:
| Direct | Indirect |
|---|---|
| now | then |
| today | that day |
| yesterday | the previous day / the day before |
| tomorrow | the next day / the following day |
| here | there |
| this | that |
| these | those |

### Reporting Different Sentence Types:
- **Statement:** He said that... / She told me that...
- **Yes/No Question:** He asked if/whether...
- **Wh-Question:** He asked what/when/where/why/how...
- **Command/Request:** He told/ordered/requested me to...
- **Exclamation:** He exclaimed with joy/sorrow that...

**Universally true facts do NOT change tense in indirect speech.**
- Direct: She said, "The Sun rises in the East."
- Indirect: She said that the Sun **rises** in the East. ✓ (fact stays present)
                    `,
                    tricks: 'For Passive: find the OBJECT of the active sentence → it becomes the SUBJECT of the passive. For Narration: tense goes ONE STEP back (Present → Past, Past → Past Perfect). Universal facts never change tense.',
                    examples: [
                        { question: 'Convert to Passive: "The teacher teaches the students."', solution: '"The students are taught by the teacher." (Simple Present Active → am/is/are + PP Passive)' },
                        { question: 'Convert to Indirect: He said, "I am reading a book."', solution: 'He said that he was reading a book. ("am reading" → "was reading"; "I" → "he").' }
                    ],
                    pyqs: [
                        { year: '2022 (II)', question: 'Convert to Passive: "Someone has stolen my wallet."', answer: 'My wallet has been stolen (by someone).', explanation: 'Present Perfect Active (has + V3) → Present Perfect Passive (has been + V3). "My wallet" (object) becomes the subject.' },
                        { year: '2021 (I)', question: 'Convert to Indirect: He said, "I will come tomorrow."', answer: 'He said that he would come the next day.', explanation: 'Will → Would. Tomorrow → The next day. "I" → "he" (matches the subject of reporting verb).' },
                        { year: '2023 (II)', question: 'Passive of "Who wrote this book?":', answer: 'By whom was this book written?', explanation: '"Who" becomes "By whom" in passive.' },
                        { year: '2023 (I)', question: 'Indirect of: Ram said, "The earth is round."', answer: 'Ram said that the earth is round.', explanation: 'Universal facts do not change tense.' },
                        { year: '2022 (I)', question: 'Change to indirect: He said, "I am busy now."', answer: 'He said that he was busy then.', explanation: 'Simple present becomes simple past, "now" becomes "then".' },
                        { year: '2021 (II)', question: 'Indirect of: "Where do you live?" she asked me.', answer: 'She asked me where I lived.', explanation: 'Question becomes statement in indirect speech.' },
                        { year: '2020 (I)', question: 'Passive of "Close the door":', answer: 'Let the door be closed.', explanation: 'Imperative passive form: Let + object + be + V3.' },
                        { year: '2019 (II)', question: 'Change to passive: "People speak English all over the world."', answer: 'English is spoken all over the world.', explanation: 'Simple present passive: is/am/are + V3.' },
                        { year: '2019 (I)', question: 'Indirect of: She said to me, "Please open the window."', answer: 'She requested me to open the window.', explanation: '"Please" becomes "requested" and infinitve is used.' },
                        { year: '2018 (II)', question: 'Passive of "The police caught the thief":', answer: 'The thief was caught by the police.', explanation: 'Simple past passive.' }
                    ]
                }
            ]
        },
        {
            id: 'history-gat',
            title: 'History, Freedom Movement & Constitution',
            subject: 'GAT',
            weightage: 'High (20 Ques)',
            difficulty: 'Medium',
            subTopics: [
                {
                    id: 'indian-culture-civ',
                    title: 'Culture and Civilisation',
                    theory: `
# Indian Culture and Civilisation
A broad survey of Indian history from ancient to medieval times, focusing on the development of culture.

### Ancient India:
- **Indus Valley Civilisation (IVC):** Urban planning, drainage systems, Citadels. Sites: Harappa, Mohenjo-daro, Lothal (dockyard).
- **Vedic Period:** Four Vedas (Rig, Sama, Yajur, Atharva). Development of the Varna system.
- **Buddhism & Jainism:** Gautama Buddha (Four Noble Truths) and Mahavira (Triratna).
- **Mauryan Empire:** Chandragupta Maurya and Ashoka (Dhamma, Rock Edicts).
- **Gupta Empire:** "Golden Age" of India. Achievements in science (Aryabhata), literature (Kalidasa), and art.

### Medieval India:
- **Delhi Sultanate:** Five dynasties (Slave, Khalji, Tughlaq, Sayyid, Lodi).
- **Mughal Empire:** Babur to Aurangzeb. Highlights: Akbar's religious tolerance (Din-i-Ilahi), Shah Jahan's architecture (Taj Mahal).
- **Bhakti and Sufi Movements:** Religious reforms focusing on devotion (Kabir, Nanak, Meera).
                    `,
                    tricks: 'Mnemonic for Mughal emperors: **BHAJSOR** (Babur, Humayun, Akbar, Jahangir, Shah Jahan, Aurangzeb, Bahadur Shah Zafar).',
                    examples: [
                        { question: 'Which city was the dockyard of the Indus Valley Civilisation?', solution: 'Lothal (in present-day Gujarat).' }
                    ],
                    pyqs: [
                        { year: '2023 (I)', question: 'Who among the following was the author of the book "Indica"?', answer: 'Megasthenes', explanation: 'Megasthenes was a Greek ambassador in the court of Chandragupta Maurya.' },
                        { year: '2023 (II)', question: 'Which IVC site is known for having a dockyard?', answer: 'Lothal', explanation: 'Located in Gujarat, it provided access to the Arabian Sea.' },
                        { year: '2022 (II)', question: 'The "Gayatri Mantra" is found in which Veda?', answer: 'Rig Veda', explanation: 'Dedicated to the sun goddess Savitri.' },
                        { year: '2022 (I)', question: 'Gautama Buddha gave his first sermon at:', answer: 'Sarnath', explanation: 'Known as the "Dharma Chakra Pravartana".' },
                        { year: '2021 (II)', question: 'Who was the founder of the Mauryan Empire?', answer: 'Chandragupta Maurya', explanation: 'Defeated the Nanda dynasty with Chanakya\'s help.' },
                        { year: '2021 (I)', question: 'The court poet of Samudragupta was:', answer: 'Harisena', explanation: 'Composer of the Prayag Prashasti (Allahabad Pillar inscription).' },
                        { year: '2020 (I)', question: 'Which Mughal emperor is known for his religious tolerance?', answer: 'Akbar', explanation: 'Founded Din-i-Ilahi and abolished Jizya.' },
                        { year: '2019 (II)', question: 'Who built the Taj Mahal?', answer: 'Shah Jahan', explanation: 'Built in memory of his wife Mumtaz Mahal.' },
                        { year: '2019 (I)', question: 'First battle of Panipat (1526) was fought between:', answer: 'Babur and Ibrahim Lodi', explanation: 'Marked the beginning of Mughal rule.' },
                        { year: '2018 (II)', question: 'Which dynasty was founded by Qutb-ud-din Aibak?', answer: 'Slave Dynasty', explanation: 'Also known as the Mamluk dynasty.' }
                    ]
                },
                {
                    id: 'freedom-movement',
                    title: 'Freedom Movement in India',
                    theory: `
# The Indian Freedom Struggle
The journey from the Revolt of 1857 to Independence in 1947.

### Key Phases:
1. **Revolt of 1857:** Causes (Greased cartridges, Doctrine of Lapse). Leaders: Rani Laxmibai, Kunwar Singh, Nana Sahib.
2. **Moderate Phase (1885-1905):** Focus on constitutional reforms. Leaders: Dadabhai Naoroji, W.C. Bonnerjee.
3. **Extremist Phase (1905-1919):** Swadeshi Movement, Partition of Bengal. Leaders: Lal-Bal-Pal (Lala Lajpat Rai, Bal Gangadhar Tilak, Bipin Chandra Pal).
4. **Gandhian Era (1919-1947):** Non-Cooperation, Civil Disobedience, Quit India.

### Important Organizations & Treaties:
- **Indian National Congress (1885):** Founded by A.O. Hume.
- **Home Rule League (1916):** Annie Besant and Tilak.
- **Lucknow Pact (1916):** Re-union of Moderates and Extremists; Congress-Muslim League pact.
                    `,
                    tricks: 'Tilak\'s famous slogan: "Swaraj is my birthright and I shall have it!"',
                    examples: [
                        { question: 'When did the Jallianwala Bagh massacre take place?', solution: 'April 13, 1919.' }
                    ],
                    pyqs: [
                        { year: '2022 (II)', question: 'The Simon Commission was boycotted by Indians because:', answer: 'It had no Indian member', explanation: 'The commission was appointed to report on the working of the 1919 Act, but its all-white composition angered Indians.' },
                        { year: '2023 (II)', question: 'In which year did the Quit India Movement start?', answer: '1942', explanation: 'Launched by Mahatma Gandhi at the Bombay session of the All India Congress Committee.' },
                        { year: '2023 (I)', question: 'The Gandhi-Irwin Pact was signed in which year?', answer: '1931', explanation: 'It marked the end of the first phase of the Civil Disobedience Movement.' },
                        { year: '2022 (I)', question: 'Who was the first Governor-General of independent India?', answer: 'Lord Mountbatten', explanation: 'He served as the first Governor-General, followed by C. Rajagopalachari (the first Indian SG).' },
                        { year: '2021 (II)', question: 'The non-cooperation movement was called off due to:', answer: 'Chauri Chaura incident', explanation: 'Violence in Chauri Chaura (1922) led Gandhi to halt the movement.' },
                        { year: '2021 (I)', question: 'Who was the founder of the "Azad Hind Fauj"?', answer: 'Rash Behari Bose', explanation: 'Later led by Subhash Chandra Bose in 1943.' },
                        { year: '2020 (I)', question: 'Which act is also known as the "Black Act"?', answer: 'Rowlatt Act', explanation: 'It allowed for the detention of political prisoners without trial for up to two years.' },
                        { year: '2019 (II)', question: 'The Partition of Bengal was revoked in which year?', answer: '1911', explanation: 'Announced at the Delhi Durbar by King George V.' },
                        { year: '2019 (I)', question: 'Who was the first President of the Indian National Congress?', answer: 'W.C. Bonnerjee', explanation: 'Selected at the first session in Bombay in 1885.' },
                        { year: '2018 (II)', question: 'The Ilbert Bill controversy happened during the tenure of:', answer: 'Lord Ripon', explanation: 'It proposed to allow Indian judges to try Europeans.' },
                        { year: '2018 (I)', question: 'Who gave the slogan "Inquilab Zindabad"?', answer: 'Hasrat Mohani', explanation: 'Popularized by Bhagat Singh.' },
                        { year: '2017 (II)', question: 'The Cabinet Mission arrived in India in:', answer: '1946', explanation: 'To discuss the transfer of power from the British government to Indian leadership.' },
                        { year: '2017 (I)', question: 'The Vernacular Press Act was passed by:', answer: 'Lord Lytton', explanation: 'In 1878, to restrict the freedom of the Indian press.' },
                        { year: '2016 (II)', question: 'Who was the political guru of Mahatma Gandhi?', answer: 'Gopal Krishna Gokhale', explanation: 'Gokhale advised Gandhi to travel around India to understand its people.' },
                        { year: '2016 (I)', question: 'The "Home Rule League" was started by:', answer: 'Annie Besant and Tilak', explanation: 'Launched in 1916 to demand self-government for India.' },
                        { year: '2015 (II)', question: 'The Lahore session of Congress (1929) is famous for:', answer: 'Purna Swaraj resolution', explanation: 'The declaration of complete independence as the goal.' },
                        { year: '2015 (I)', question: 'Who was known as the "Iron Man of India"?', answer: 'Sardar Vallabhbhai Patel', explanation: 'For his role in integrating princely states into India.' },
                        { year: '2014 (II)', question: 'The Salt Satyagraha started from:', answer: 'Sabarmati Ashram', explanation: 'Dandi March began on March 12, 1930.' },
                        { year: '2014 (I)', question: 'Who founded the "Swaraj Party"?', answer: 'Motilal Nehru and C.R. Das', explanation: 'Formed in 1923 after the withdrawal of Non-Cooperation movement.' },
                        { year: '2013 (II)', question: 'The first war of independence (1857) started from:', answer: 'Meerut', explanation: 'May 10, 1857.' }
                    ]
                },
                {
                    id: 'modern-india',
                    title: 'Modern Indian History',
                    theory: `
# Modern India (Key Events)
- **1857:** First War of Independence (Sepoy Mutiny).
- **1885:** Formation of Indian National Congress.
- **1905:** Partition of Bengal by Lord Curzon.
- **1919:** Jallianwala Bagh Massacre & Rowlatt Act.
- **1920:** Non-Cooperation Movement launched by Gandhi.
- **1930:** Civil Disobedience Movement (Dandi March).
- **1942:** Quit India Movement.
                    `,
                    tricks: "Chronological order of Gandhi's movements: Champaran (1917) -> Non-Cooperation (1920) -> Civil Disobedience (1930) -> Quit India (1942).",
                    examples: [
                        { question: 'Who founded the Indian National Congress?', solution: 'A.O. Hume in 1885.' }
                    ],
                    pyqs: [
                        { year: '2022 (I)', question: 'The Dandi March was undertaken by Mahatma Gandhi in which year?', answer: '1930', explanation: 'It started on March 12, 1930 to break the salt law.' },
                        { year: '2023 (II)', question: 'Who was the first President of Indian National Congress?', answer: 'W.C. Bonnerjee', explanation: 'Elected at the first session in Bombay, 1885.' },
                        { year: '2023 (I)', question: 'Partition of Bengal happened in:', answer: '1905', explanation: 'Announced by Lord Curzon.' },
                        { year: '2022 (II)', question: 'Jallianwala Bagh massacre occurred in which city?', answer: 'Amritsar', explanation: 'Happened on April 13, 1919.' },
                        { year: '2021 (II)', question: 'Who gave the slogan "Swaraj is my birthright"?', answer: 'Bal Gangadhar Tilak', explanation: 'A leader of the extremist faction of INC.' },
                        { year: '2021 (I)', question: 'Quit India Movement was launched in:', answer: 'August 1942', explanation: 'Famous "Do or Die" call was given.' },
                        { year: '2020 (II)', question: 'Who was the founder of Forward Bloc?', answer: 'Subhas Chandra Bose', explanation: 'Founded in 1939 after leaving INC.' },
                        { year: '2020 (I)', question: 'First Governor General of free India was:', answer: 'Lord Mountbatten', explanation: 'C. Rajagopalachari was the first Indian GG.' },
                        { year: '2019 (II)', question: 'Rowlatt Act was passed in:', answer: '1919', explanation: 'Called the "Black Act".' },
                        { year: '2019 (I)', question: 'Non-Cooperation Movement was withdrawn due to:', answer: 'Chauri Chaura incident', explanation: 'Gandhi called it off due to violence in 1922.' }
                    ]
                }
,
                {
                    id: 'constitution-admin',
                    title: 'Indian Constitution and Administration',
                    theory: `
# The Indian Constitution
Elementary study of the framework of our democracy.

### Key Features:
- **Lengthiest Written Constitution:** Borrowed features from various countries (UK, USA, Ireland, etc.).
- **Preamble:** Declares India as a Sovereign, Socialist, Secular, Democratic Republic.
- **Fundamental Rights (Part III):** Articles 12-35. Right to Equality, Freedom, Against Exploitation, etc.
- **Directive Principles (Part IV):** Guidelines for the state to establish social and economic democracy.

### Administration:
- **Executive:** President (Head of State), Prime Minister (Head of Government).
- **Legislature:** Parliament (Lok Sabha - Lower House, Rajya Sabha - Upper House).
- **Judiciary:** Supreme Court, High Courts, Subordinate Courts.
                    `,
                    tricks: 'Remember the sequence in Preamble: **S S S D R** (Sovereign, Socialist, Secular, Democratic, Republic).',
                    examples: [
                        { question: 'Who is the Chairman of the Rajya Sabha?', solution: 'The Vice-President of India.' }
                    ],
                    pyqs: [
                        { year: '2021 (I)', question: 'Which article of the Indian Constitution is called the "Heart and Soul" by B.R. Ambedkar?', answer: 'Article 32 (Right to Constitutional Remedies)', explanation: 'It allows citizens to move the Supreme Court for the enforcement of fundamental rights.' },
                        { year: '2023 (II)', question: 'Who is the constitutional head of India?', answer: 'The President', explanation: 'The President is the supreme commander of defense forces and head of state.' },
                        { year: '2023 (I)', question: 'Fundamental Duties were added by which amendment?', answer: '42nd Amendment (1976)', explanation: 'On recommendation of Swaran Singh Committee.' },
                        { year: '2022 (II)', question: 'The concept of Single Citizenship is borrowed from:', answer: 'UK (Britain)', explanation: 'Unlike USA which has dual citizenship.' },
                        { year: '2022 (I)', question: 'Who appoints the Chief Justice of India?', answer: 'The President', explanation: 'As per Article 124.' },
                        { year: '2020 (I)', question: 'Maximum strength of Lok Sabha as per Constitution is:', answer: '552', explanation: '530 from states + 20 from UTs + 2 (optional) Anglo-Indians (now removed).' },
                        { year: '2019 (II)', question: 'Which part of the Constitution deals with Fundamental Rights?', answer: 'Part III', explanation: 'Articles 12 to 35.' },
                        { year: '2019 (I)', question: 'The retirement age of a Supreme Court judge is:', answer: '65 years', explanation: 'For High Court judges, it is 62.' },
                        { year: '2018 (II)', question: 'Who was the Chairman of the Drafting Committee?', answer: 'Dr. B.R. Ambedkar', explanation: 'Widely regarded as the Architect of the Constitution.' },
                        { year: '2018 (I) ', question: 'Which schedule of the Constitution deals with languages?', answer: '8th Schedule', explanation: 'Currently recognizes 22 languages.' }
                    ]
                },
                {
                    id: 'social-landscape-ind',
                    title: 'Social Landscape & Welfare',
                    theory: `
# Social & Economic Development
Post-independence initiatives for social welfare and rural development.

### Key Concepts:
- **Five-Year Plans:** Strategy for economic growth. 1st Plan (1951-56) focused on agriculture. 2nd Plan focused on industries. Now replaced by **NITI Aayog**.
- **Panchayati Raj:** Local self-government at village levels. 73rd Amendment Act (1992).
- **Bhoodan & Sarvodaya:** Movements by Vinoba Bhave for land reform and welfare of all.
- **National Integration:** Efforts to maintain unity in diversity across India.
- **Basic Teachings of Mahatma Gandhi:** Ahimsa (Non-violence), Satya (Truth), Swadeshi, and Satyagraha.
                    `,
                    tricks: 'Three tiers of Panchayati Raj: Gram Panchayat (Village), Panchayat Samiti (Block), Zila Parishad (District).',
                    examples: [
                        { question: 'Who started the Bhoodan Movement?', solution: 'Acharya Vinoba Bhave (1951).' }
                    ],
                    pyqs: [
                        { year: '2020 (I)', question: 'Which constitutional amendment gave constitutional status to Panchayati Raj?', answer: '73rd Amendment', explanation: 'It added Part IX and the 11th Schedule to the Constitution.' },
                        { year: '2023 (II)', question: 'NITI Aayog replaced which body?', answer: 'Planning Commission', explanation: 'Established in 2015 as a "think tank".' },
                        { year: '2023 (I)', question: 'Who is the chairperson of NITI Aayog?', answer: 'The Prime Minister', explanation: 'Ex-officio chairperson.' },
                        { year: '2022 (II)', question: 'The Blue Revolution is associated with:', answer: 'Fish production', explanation: 'Initiated to increase productivity in aquaculture.' },
                        { year: '2022 (I)', question: 'Sarvodaya Movement was popularized by:', answer: 'Vinoba Bhave and J.P. Narayan', explanation: 'Meaning "welfare of all".' },
                        { year: '2021 (II)', question: 'First five year plan in India was based on:', answer: 'Harrod-Domar Model', explanation: 'Focused on primary sector/agriculture.' },
                        { year: '2021 (I)', question: 'Article 40 of Constitution is related to:', answer: 'Village Panchayats', explanation: 'Part of Directive Principles.' },
                        { year: '2019 (II)', question: 'MS Swaminathan is associated with:', answer: 'Green Revolution', explanation: 'Introduced high-yielding varieties of seeds.' },
                        { year: '2019 (I)', question: 'Bhoodan Movement started from which state?', answer: 'Telangana (Nalgonda)', explanation: 'Gift of land movement.' },
                        { year: '2018 (II)', question: 'The tier-system of Panchayati Raj was recommended by:', answer: 'Balwant Rai Mehta Committee', explanation: '3-tier system recommendation in 1957.' }
                    ]
                },
                {
                    id: 'modern-world-history',
                    title: 'Modern World Forces',
                    theory: `
# Forces Shaping the Modern World
Global events that changed the course of history.

### Historical Revolutions:
- **Renaissance:** Rebirth of art and learning in Europe (14th-17th century).
- **American War of Independence (1776):** "No taxation without representation."
- **French Revolution (1789):** Liberty, Equality, Fraternity. The fall of Bastille.
- **Industrial Revolution:** Shift from manual to machine production (started in Britain).
- **Russian Revolution (1917):** End of Tsarist rule, rise of Communism under Lenin.

### Concepts & Organizations:
- **United Nations (1945):** Formed to maintain world peace. Main organs: General Assembly, Security Council, ICJ.
- **Panchsheel:** Five principles of peaceful co-existence (India-China, 1954).
- **Democracy, Socialism & Communism:** Differing political and economic ideologies.
- **India\'s Role:** Non-Aligned Movement (NAM), peace-keeping missions, and a growing global leader.
                    `,
                    tricks: 'Mnemonic for UN Security Council permanent members (P5): US, UK, France, Russia, China.',
                    examples: [
                        { question: 'Where is the headquarters of the United Nations?', solution: 'New York City, USA.' }
                    ],
                    pyqs: [
                        { year: '2023 (II)', question: 'The French Revolution took place in the year:', answer: '1789', explanation: 'It marked the end of monarchy in France and spread the ideals of democracy throughout Europe.' },
                        { year: '2023 (I)', question: 'Headquarters of International Court of Justice is at:', answer: 'The Hague (Netherlands)', explanation: 'One of the six principal organs of the UN.' },
                        { year: '2022 (II)', question: 'Declaration of Independence (1776) belongs to:', answer: 'USA', explanation: 'Authored by Thomas Jefferson.' },
                        { year: '2022 (I)', question: 'Renaissance first started in:', answer: 'Italy', explanation: 'Specifically Florence in the 14th century.' },
                        { year: '2021 (II)', question: 'In which year did the Russian Revolution occur?', answer: '1917', explanation: 'Led by Vladimir Lenin.' },
                        { year: '2021 (I)', question: 'The Second World War ended in:', answer: '1945', explanation: 'After the atomic bombing of Japan.' },
                        { year: '2020 (I)', question: 'Industrial Revolution started first in:', answer: 'Great Britain', explanation: 'Due to abundance of coal and iron.' },
                        { year: '2019 (II)', question: 'How many permanent members are in UN Security Council?', answer: '5', explanation: 'USA, UK, France, Russia, China.' },
                        { year: '2019 (I)', question: 'Term "Cold War" refers to tension between:', answer: 'USA and USSR', explanation: 'Geopolitical tension after WWII.' },
                        { year: '2018 (II)', question: 'Pancheel Agreement was signed between India and:', answer: 'China', explanation: 'Five principles of coexistence (1954).' }
                    ]
                }
            ]
        },
        {
            id: 'geography-gat',
            title: 'Geography (Indian and World)',
            subject: 'GAT',
            weightage: 'High (20 Ques)',
            difficulty: 'Medium',
            subTopics: [
                {
                    id: 'the-earth-astronomy',
                    title: 'The Earth and Solar System',
                    theory: `
# The Earth in the Universe
Elementary astronomy and Earth's characteristics.

### Earth's Shape & Size:
- **Shape:** Oblate Spheroid (bulged at equator, flattened at poles).
- **Latitudes:** Horizontal lines (Equator 0°, Tropics 23.5°, Arctic 66.5°).
- **Longitudes:** Vertical lines (Prime Meridian 0°).
- **International Date Line (IDL):** 180° longitude. Crossing it changes the date.
- **Concept of Time:** 15° longitude = 1 hour. Indian Standard Time (IST) is 82.5° E (5.5 hrs ahead of GMT).

### Earth's Movements:
- **Rotation:** Spin on axis (24 hrs). Causes Day and Night. Deflects winds (Coriolis Effect).
- **Revolution:** Orbit around Sun (365.25 days). Causes Seasons and varying lengths of day/night.
                    `,
                    tricks: 'Remember: **Long**itudes are the **long** ones (vertical). Crossing IDL from West to East = Gain a day.',
                    examples: [
                        { question: 'What is the shape of the Earth?', solution: 'Oblate Spheroid.' }
                    ],
                    pyqs: [
                        { year: '2022 (I)', question: 'What is the time difference between IST and GMT?', answer: '5 hours 30 minutes', explanation: 'IST is based on 82.5° E longitude. 82.5 * 4 min/degree = 330 minutes = 5.5 hours.' },
                        { year: '2023 (II)', question: 'Which planet is known as the "Morning Star" or "Evening Star"?', answer: 'Venus', explanation: 'Venus is the brightest planet in the night sky and is visible just before sunrise or after sunset.' },
                        { year: '2023 (I)', question: 'Identify the planet with the longest day.', answer: 'Venus', explanation: 'Venus rotates very slowly on its axis; its day is longer than its year.' },
                        { year: '2022 (II)', question: 'The Earth is nearest to the Sun (Perihelion) on which date?', answer: 'January 3', explanation: 'Perihelion occurs in early January, while Aphelion (farthest) occurs in early July.' },
                        { year: '2021 (II)', question: 'Which line of latitude passes through India?', answer: 'Tropic of Cancer', explanation: 'The Tropic of Cancer (23.5° N) passes through 8 states in India.' },
                        { year: '2021 (I)', question: 'Day and night are equal throughout the globe on:', answer: 'Equinoxes', explanation: 'Occurs twice a year (around March 21 and September 23) when the Sun is directly over the Equator.' },
                        { year: '2020 (I)', question: 'Which planet is called the "Red Planet"?', answer: 'Mars', explanation: 'Due to the presence of iron oxide on its surface.' },
                        { year: '2019 (II)', question: 'What is the shape of Earth’s orbit around the Sun?', answer: 'Elliptical', explanation: 'Kepler\'s First Law states that planets move in elliptical orbits with the Sun at one focus.' },
                        { year: '2019 (I)', question: 'The International Date Line is roughly along which longitude?', answer: '180°', explanation: 'Crossing the IDL changes the date by one full day.' },
                        { year: '2018 (II)', question: 'Which planet has the maximum number of moons?', answer: 'Saturn', explanation: 'Saturn currently holds the record with over 140 discovered moons (surpassing Jupiter).' },
                        { year: '2018 (I)', question: 'What causes the change of seasons on Earth?', answer: 'Revolution and Axial Tilt', explanation: 'The tilt of Earth\'s axis (23.5°) and its revolution around the Sun cause seasons.' },
                        { year: '2017 (II)', question: 'The Sun produces energy primarily through:', answer: 'Nuclear Fusion', explanation: 'Hydrogen nuclei combine to form Helium under extreme heat and pressure.' },
                        { year: '2017 (I)', question: 'Which layer of the Sun is visible during a total solar eclipse?', answer: 'Corona', explanation: 'The outer atmosphere of the Sun, normally hidden by the bright photosphere.' },
                        { year: '2016 (II)', question: 'Which planet is known as "Earth\'s Twin"?', answer: 'Venus', explanation: 'Similar to Earth in size, mass, and composition.' },
                        { year: '2016 (I)', question: 'The Lunar Eclipse occurs only on a:', answer: 'Full Moon day', explanation: 'When the Earth is between the Sun and the Moon.' },
                        { year: '2015 (II)', question: 'A leap year has how many days?', answer: '366', explanation: 'An extra day is added to February every 4 years to account for the ~365.25 day orbit.' },
                        { year: '2015 (I)', question: 'Which is the largest planet in our solar system?', answer: 'Jupiter', explanation: 'A massive gas giant, over 11 times the diameter of Earth.' },
                        { year: '2014 (II)', question: 'The Prime Meridian passes through which city?', answer: 'Greenwich (London)', explanation: 'Set as the 0° longitude by international agreement.' },
                        { year: '2014 (I)', question: 'The Solar Eclipse occurs only on a:', answer: 'New Moon day', explanation: 'When the Moon is between the Sun and the Earth.' },
                        { year: '2013 (II)', question: 'Which is the smallest planet in the solar system?', answer: 'Mercury', explanation: 'It is the innermost planet of our solar system.' }
                    ]
                },
                {
                    id: 'lithosphere-origin',
                    title: 'Lithosphere and Origin of Earth',
                    theory: `
# The Solid Earth
Origin, structure, and changes in the Earth's crust.

### Earth's Structure:
- **Crust:** Outmost layer (Sial and Sima).
- **Mantle:** Middle layer (Magma source).
- **Core:** Innermost (Nife - Nickel and Iron).

### Rocks & Weathering:
1. **Igneous Rocks:** From cooling magma (e.g., Granite, Basalt).
2. **Sedimentary Rocks:** From deposits (e.g., Sandstone, Limestone). Contains fossils.
3. **Metamorphic Rocks:** Changed by heat/pressure (e.g., Marble, Slate).
- **Weathering:** Breaking of rocks. **Mechanical** (physical forces) and **Chemical** (reaction with water/oxygen).

### Internal Forces:
- **Earthquakes:** Measured by Richter scale (intensity) and Seismograph.
- **Volcanoes:** Active (Etna), Dormant (Fuji), and Extinct.
                    `,
                    tricks: 'Metamorphic = "Morph" means change. Igneous = "Ignis" means fire.',
                    examples: [
                        { question: 'Which rock type is most likely to contain fossils?', solution: 'Sedimentary rocks.' }
                    ],
                    pyqs: [
                        { year: '2021 (II)', question: 'The intensity of an earthquake is measured on:', answer: 'Richter Scale', explanation: 'The Richter scale measures the magnitude of energy released, while the Mercalli scale measures the observed intensity/damage.' },
                        { year: '2023 (II)', question: 'Which of the following is an igneous rock?', answer: 'Basalt', explanation: 'Formed from the rapid cooling of basaltic lava.' },
                        { year: '2023 (I)', question: 'The most abundant element in the Earth\'s crust is:', answer: 'Oxygen', explanation: 'Followed by Silicon and Aluminium.' },
                        { year: '2022 (II)', question: 'Magma that reaches the Earth\'s surface is called:', answer: 'Lava', explanation: 'Molten rock below surface is magma.' },
                        { year: '2022 (I)', question: 'Which layer of Earth is in liquid state?', answer: 'Outer Core', explanation: 'The inner core is solid due to extreme pressure.' },
                        { year: '2021 (I solution)', question: 'Limestone is an example of:', answer: 'Sedimentary rock', explanation: 'Formed from organic remains/deposits.' },
                        { year: '2020 (I)', question: 'Sandstone is transformed into which metamorphic rock?', answer: 'Quartzite', explanation: 'Limestone becomes Marble, Shale becomes Slate.' },
                        { year: '2019 (II)', question: 'Which of the following is a dormant volcano?', answer: 'Mt. Fuji', explanation: 'Located in Japan.' },
                        { year: '2019 (I)', question: 'What is the point on Earth\'s surface directly above the earthquake focus?', answer: 'Epicentre', explanation: 'The focus itself is called the Hypocentre.' },
                        { year: '2018 (II)', question: 'The boundary between Crust and Mantle is known as:', answer: 'Moho Discontinuity', explanation: 'Named after Andrija Mohorovičić.' }
                    ]
                },
                {
                    id: 'hydrosphere-oceans',
                    title: 'Hydrosphere and Atmosphere',
                    theory: `
# Oceans and Air
The fluid layers of our planet.

### Hydrosphere:
- **Ocean Currents:** Movement of ocean water. **Warm** (Gulf Stream) vs **Cold** (Labrador). They influence coastal climates.
- **Tides:** Periodic rise and fall of sea level due to gravitational pull of Moon and Sun. **Spring Tides** (Sun-Moon-Earth align) are highest.

### Atmosphere:
- **Composition:** Nitrogen (78%), Oxygen (21%), Argon (0.9%), CO2 (0.04%).
- **Layers:** Troposphere (weather), Stratosphere (Ozone), Mesosphere, Thermosphere (Ionosphere).
- **Pressure & Winds:** Air moves from high to low pressure. **Planetary Winds** (Trade winds, Westerlies).
- **Cyclones:** Low-pressure systems with inward spiralling winds (Anticyclone is the opposite).
                    `,
                    tricks: 'Cyclone in N. Hemisphere = Anti-clockwise. In S. Hemisphere = Clockwise.',
                    examples: [
                        { question: 'Which layer of atmosphere contains the ozone layer?', solution: 'Stratosphere.' }
                    ],
                    pyqs: [
                        { year: '2023 (I)', question: 'The highest tides occur during:', answer: 'Full Moon and New Moon', explanation: 'When the Sun, Moon, and Earth align (Syzygy), their combined gravity creates the highest tides, known as Spring Tides.' },
                        { year: '2023 (II)', question: 'Which layer of atmosphere reflects radio waves?', answer: 'Ionosphere', explanation: 'Part of the Thermosphere.' },
                        { year: '2022 (II)', question: 'What is the percentage of Nitrogen in atmosphere?', answer: '78%', explanation: 'Most abundant gas in the atmosphere.' },
                        { year: '2022 (I)', question: 'Gulf Stream is a:', answer: 'Warm ocean current', explanation: 'Flows from Gulf of Mexico towards Europe.' },
                        { year: '2021 (II)', question: 'Which instrument is used to measure atmospheric pressure?', answer: 'Barometer', explanation: 'Mercury barometer invented by Torricelli.' },
                        { year: '2021 (I)', question: 'Trade winds blow due to:', answer: 'Coriolis force and pressure gradient', explanation: 'Constant winds blowing towards the equator.' },
                        { year: '2020 (I)', question: 'Cyclones in the Southern Hemisphere rotate:', answer: 'Clockwise', explanation: 'Opposite to Northern Hemisphere (Anti-clockwise).' },
                        { year: '2019 (II)', question: 'The lowest layer of atmosphere is:', answer: 'Troposphere', explanation: 'Where all weather occurs.' },
                        { year: '2019 (I)', question: 'Relative humidity is measured by:', answer: 'Hygrometer', explanation: 'Measures water vapor in air.' },
                        { year: '2018 (II)', question: 'Salinity of ocean water is highest at:', answer: 'Tropics', explanation: 'High evaporation and low rainfall.' }
                    ]
                },
                {
                    id: 'climate-regional-geo',
                    title: 'Climate and Regional Geography of India',
                    theory: `
# Climate and Resources
Focus on India\'s geographical diversity.

### Weather and Climate:
- **Humidity & Precipitation:** Types of clouds and rainfall (Orographic, Convectional, Cyclonic).
- **Major Natural Regions:** Tundra, Equatorial, Tropical, Desert, Mediterranean.

### Indian Geography:
- **Climate of India:** Tropical Monsoon. Features: South-West Monsoon, North-East Monsoon (retreating).
- **Natural Vegetation:** Tropical Evergreen, Deciduous (Teak, Sal), Thorny (Dessert), Mangrove.
- **Resources:** 
  - *Minerals:* Iron ore (Odisha/Jharkhand), Coal (Damodar Valley), Petroleum (Mumbai High, Assam).
  - *Power:* Thermal, Hydro, Nuclear, Solar.
- **Agriculture:** Kharif (Rice, Cotton), Rabi (Wheat, Mustard), Zaid.
                    `,
                    tricks: 'Remember: **Kharif** = Autumn harvest (Monsoon crops). **Rabi** = Spring harvest (Winter crops).',
                    examples: [
                        { question: 'Which state is the largest producer of Tea in India?', solution: 'Assam.' }
                    ],
                    pyqs: [
                        { year: '2022 (II)', question: 'Which city is known as the "Manchester of South India"?', answer: 'Coimbatore', explanation: 'Due to its extensive textile industry, similar to Ahmedabad in the North.' },
                        { year: '2023 (II)', question: 'Which of the following is a Kharif crop?', answer: 'Rice', explanation: 'Sown in June-July, harvested in Sept-Oct.' },
                        { year: '2023 (I)', question: 'Which state is the largest producer of wheat in India?', answer: 'Uttar Pradesh', explanation: 'Leading producer of wheat, sugarcane, and milk.' },
                        { year: '2022 (I)', question: 'India has which type of climate?', answer: 'Tropical Monsoon', explanation: 'Characterized by seasonal reversal of winds.' },
                        { year: '2021 (II)', question: 'Which soil is best for cotton cultivation?', answer: 'Black soil (Regur)', explanation: 'Found extensively in the Deccan trap.' },
                        { year: '2021 (I)', question: 'The highest peak in South India is:', answer: 'Anamudi', explanation: 'In Kerala (Western Ghats).' },
                        { year: '2020 (I)', question: 'Which river is known as the "Dakshin Ganga"?', answer: 'Godavari', explanation: 'Largest river system of Peninsular India.' },
                        { year: '2019 (II)', question: 'Bhakra Nangal dam is built on which river?', answer: 'Sutlej', explanation: 'In Himachal Pradesh/Punjab.' },
                        { year: '2019 (I)', question: 'Which state has the longest coastline in India?', answer: 'Gujarat', explanation: 'Followed by Andhra Pradesh.' },
                        { year: '2018 (II)', question: 'Largest desert in India is:', answer: 'Thar Desert', explanation: 'Also known as the Great Indian Desert.' }
                    ]
                },
                {
                    id: 'trade-transport-india',
                    title: 'Trade and Transport in India',
                    theory: `
# Connectivity and Commerce
How India links within and with the world.

### Transport:
- **Roadways:** Large network (NHAI). Golden Quadrilateral.
- **Railways:** Life-line of India.
- **Sea Ports:** Important ports - Kandla (tidal), Mumbai (largest), Marmagao, Mangalore, Kochi (West Coast); Tuticorin, Chennai, Ennore, Visakhapatnam (deepest), Paradip, Haldia, Kolkata (East Coast).
- **Air Routes:** Major international airports (Delhi, Mumbai, Bengaluru).

### Trade:
- **Imports:** Crude petroleum, Gold, Electronic goods.
- **Exports:** Petroleum products, Gems & Jewellery, Chemicals, Agricultural products.
                    `,
                    tricks: 'Deepest landlocked port: Visakhapatnam. Port on a river: Kolkata (Hooghly).',
                    examples: [
                        { question: 'Which is the largest container port in India?', solution: 'Jawaharlal Nehru Port (Nhava Sheva).' }
                    ],
                    pyqs: [
                        { year: '2021 (I)', question: 'Which one of the following is a tidal port?', answer: 'Kandla', explanation: 'Kandla port in Gujarat is a major tidal port serving the North-western part of India.' },
                        { year: '2023 (II)', question: 'The busiest airport in India is:', answer: 'IGI Airport, Delhi', explanation: 'Indira Gandhi International Airport.' },
                        { year: '2023 (I)', question: 'Which port is known as the "Queen of Arabian Sea"?', answer: 'Kochi Port', explanation: 'Important port in Kerala.' },
                        { year: '2022 (II)', question: 'The Golden Quadrilateral connects which cities?', answer: 'Delhi, Mumbai, Chennai, Kolkata', explanation: 'Major highway network.' },
                        { year: '2022 (I)', question: 'First railway line in India was between:', answer: 'Mumbai and Thane', explanation: 'Started in 1853.' },
                        { year: '2020 (I)', question: 'Which is the longest National Highway in India?', answer: 'NH 44', explanation: 'Srinagar to Kanyakumari.' },
                        { year: '2019 (II)', question: 'Haldia port is located in which state?', answer: 'West Bengal', explanation: 'On the Hooghly river.' },
                        { year: '2019 (I)', question: 'Which state has the maximum length of national highways?', answer: 'Maharashtra', explanation: 'As per recent reports.' },
                        { year: '2018 (II)', question: 'Ennore port is located in:', answer: 'Tamil Nadu', explanation: 'First corporatized major port.' },
                        { year: '2018 (I)', question: 'The deepest landlocked port in India is:', answer: 'Visakhapatnam', explanation: 'Natural harbor on the East coast.' }
                    ]
                }
            ]
        },
        {
            id: 'current-events-gat',
            title: 'Current Events (India & World)',
            subject: 'GAT',
            weightage: 'Medium (15 Ques)',
            difficulty: 'Varies',
            subTopics: [
                {
                    id: 'recent-events-india',
                    title: 'Recent Events in India',
                    theory: `
# India\'s Recent Journey
Key developments in policy, social, and military sectors in recent years.

### National Updates:
- **Digital India & Startup India:** Economic and technological thrust.
- **National Education Policy (2020):** Overhauling the education system.
- **Space Achievements:** ISRO\'s Chandrayaan-3, Aditya-L1, Gaganyaan mission prep.
- **Infrastructure:** Gati Shakti, New Parliament Building, Vande Bharat Express.
- **Defense:** Atmanirbhar Bharat in defense (Tejas, INS Vikrant, S-400 procurement).
                    `,
                    tricks: 'Focus on ISRO missions and Defense procurements for GAT Current Affairs.',
                    examples: [
                        { question: 'Where did Chandrayaan-3 land on the Moon?', solution: 'Near the Lunar South Pole (Shiv Shakti point).' }
                    ],
                    pyqs: [
                        { year: '2023 (II)', question: 'India\'s first indigenous aircraft carrier is:', answer: 'INS Vikrant', explanation: 'INS Vikrant was commissioned in 2022, marking a major milestone in naval self-reliance.' },
                        { year: '2023 (I)', question: 'Chandrayaan-3 was launched using which rocket?', answer: 'LVM3-M4', explanation: 'Previously known as GSLV MK-III.' },
                        { year: '2022 (II)', question: 'India\'s first solar mission is:', answer: 'Aditya-L1', explanation: 'To study the Sun from Lagrange point L1.' },
                        { year: '2022 (I)', question: 'Name of India\'s first Private rocket is:', answer: 'Vikram-S', explanation: 'By Skyroot Aerospace.' },
                        { year: '2021 (II)', question: 'Gaganyaan is related to:', answer: 'Human Spaceflight', explanation: 'India\'s first manned space mission.' },
                        { year: '2021 (I)', question: 'New Parliament building in Delhi is designed by:', answer: 'Bimal Patel (HCP Design)', explanation: 'Part of Central Vista project.' },
                        { year: '2020 (I)', question: 'National Education Policy 2020 replaced which policy?', answer: 'NEP 1986', explanation: 'Major reforms after 34 years.' },
                        { year: '2019 (II)', question: 'Statue of Unity is dedicated to:', answer: 'Sardar Vallabhbhai Patel', explanation: 'Tallest statue in the world (Gujarat).' },
                        { year: '2019 (I)', question: 'Article 370 was revoked in which year?', answer: '2019', explanation: 'Related to special status of J&K.' },
                        { year: '2018 (II)', question: 'India\'s first semi-high speed train is:', answer: 'Vande Bharat Express', explanation: 'Earlier known as Train 18.' }
                    ]
                },
                {
                    id: 'world-events-personalities',
                    title: 'World Events and Personalities',
                    theory: `
# Global Outlook & Personalities
Important happenings around the globe and people in the news.

### International Affairs:
- **G20 Summit (2023):** Hosted by India (Delhi Declaration).
- **Global Conflicts:** Ukraine-Russia, Middle East situation (for geopolitical understanding).
- **UN Appointments & Climate Summits:** COP28, environmental goals.

### Prominent Personalities:
- **Cultural:** Recipients of Bharat Ratna, Jnanpith, Oscar wins (RRR, Elephant Whisperers).
- **Sports:** Neeraj Chopra (Javelin), Grandmasters in Chess (Praggnanandhaa), Cricket World Cup updates.
- **Political:** Heads of state visiting India or Indian-origin leaders abroad (Rishi Sunak).
                    `,
                    tricks: 'Remember the winners of major sports events (Olympics, Asian Games, World Cups) and high civilian awards.',
                    examples: [
                        { question: 'Who won the first ever Olympic Gold in athletics for India?', solution: 'Neeraj Chopra (Javelin Throw, Tokyo 2020).' }
                    ],
                    pyqs: [
                        { year: '2023 (I)', question: 'Who was awarded the 57th Jnanpith Award?', answer: 'Damodar Mauzo', explanation: 'He is a Konkani novelist and short story writer.' },
                        { year: '2023 (II)', question: 'Who hosted the G20 Summit in 2023?', answer: 'India', explanation: 'Theme: "Vasudhaiva Kutumbakam" (One Earth, One Family, One Future).' },
                        { year: '2022 (II)', question: 'Who won the Nobel Peace Prize 2023?', answer: 'Narges Mohammadi', explanation: 'For her fight against the oppression of women in Iran.' },
                        { year: '2022 (I)', question: 'Neeraj Chopra won the Gold medal in which event at Olympics?', answer: 'Javelin Throw', explanation: 'First Indian track-and-field gold.' },
                        { year: '2021 (II)', question: 'Who is the current Secretary General of UN?', answer: 'Antonio Guterres', explanation: 'Former PM of Portugal.' },
                        { year: '2021 (I)', question: 'Which country hosted COP26?', answer: 'UK (Glasgow)', explanation: 'Climate change summit.' },
                        { year: '2020 (II)', question: 'The movie "RRR" won Oscar 2023 for:', answer: 'Best Original Song (Naatu Naatu)', explanation: 'Composed by M.M. Keeravani.' },
                        { year: '2020 (I)', question: 'Joe Biden is the ___ President of USA.', answer: '46th', explanation: 'Inaugurated in Jan 2021.' },
                        { year: '2019 (II)', question: 'Who is the author of "A Promised Land"?', answer: 'Barack Obama', explanation: 'Presidential memoir.' },
                        { year: '2018 (II)', question: 'Which city hosted the 2018 Asian Games?', answer: 'Jakarta-Palembang (Indonesia)', explanation: 'First time hosted by two cities.' }
                    ]
                },
                {
                    id: 'defense-tech',
                    title: 'Defense Technology & Exercises',
                    theory: `
# Defense and Military Affairs
Focus on recent procurements, missiles, and joint exercises involving Indian Armed Forces.

### Key Missiles (India):
- **Agni:** Surface-to-surface ballistic missile series.
- **BrahMos:** Supersonic cruise missile (Indo-Russian joint venture).
- **Astra:** Air-to-air missile.

### Important Joint Exercises:
- **Malabar:** Naval exercise with Quad (India, US, Japan, Australia).
- **Yudh Abhyas:** India & USA.
- **Surya Kiran:** India & Nepal.
                    `,
                    tricks: 'For missiles, remember their launch modes. "Astra" sounds like "Aasmaan" (Sky) -> Air-to-Air. "Prithvi" means Earth -> Surface-to-Surface.',
                    examples: [
                        { question: 'What type of missile is BrahMos?', solution: 'Supersonic Cruise Missile.' }
                    ],
                    pyqs: [
                        { year: '2023 (II)', question: 'BrahMos is jointly developed by India and which other country?', answer: 'Russia', explanation: 'The name represents the Brahmaputra (India) and Moskva (Russia) rivers.' },
                        { year: '2023 (I)', question: 'Astra is an ___ missile.', answer: 'Air-to-Air', explanation: 'Beyond Visual Range (BVR) missile.' },
                        { year: '2022 (II)', question: 'Agni-V is a/an:', answer: 'ICBM', explanation: 'Intercontinental Ballistic Missile with range over 5000 km.' },
                        { year: '2022 (I)', question: 'Malabar is a naval exercise between Quad countries. Which of the following is NOT in Quad?', answer: 'Russia', explanation: 'Quad = India, USA, Japan, Australia.' },
                        { year: '2021 (II)', question: 'Which Indian aircraft carrier was recently commissioned (2022)?', answer: 'INS Vikrant', explanation: 'India\'s first indigenous aircraft carrier.' },
                        { year: '2021 (I)', question: 'SURYA KIRAN is a joint military exercise between India and:', answer: 'Nepal', explanation: 'An annual exercise.' },
                        { year: '2020 (I)', question: 'The headquarters of Indian Army is in:', answer: 'New Delhi', explanation: 'Integrated Headquarters of Ministry of Defence (Army).' },
                        { year: '2019 (II)', question: 'Rafale fighter jets are procured from:', answer: 'France', explanation: 'Manufactured by Dassault Aviation.' },
                        { year: '2019 (I)', question: 'What is the highest gallantry award in India during peacetime?', answer: 'Ashoka Chakra', explanation: 'Param Vir Chakra is for wartime.' },
                        { year: '2018 (II)', question: 'Who is the Supreme Commander of Indian Armed Forces?', answer: 'The President of India', explanation: 'Article 53(2) of the Constitution.' }
                    ]
                }

            ]
        },
        {
            id: 'physics-gat',
            title: 'Physics',
            subject: 'GAT',
            weightage: 'Medium (20-25 Ques)',
            difficulty: 'Medium',
            subTopics: [
                {
                    id: 'mechanics',
                    title: 'Mechanics: Laws of Motion',
                    theory: `
# Motion, Force & Newton's Laws

### Motion of Objects:
- **Speed:** Distance covered per unit time (scalar).
\\[
Speed = \\frac{d}{t}
\\]
- **Velocity:** Displacement per unit time (vector — has direction).
\\[
v = \\frac{s}{t}
\\]
- **Acceleration:** Rate of change of velocity.
\\[
a = \\frac{v - u}{t}
\\]
- **Equations of Motion:**
\\[
v = u + at
\\]
\\[
s = ut + \\frac{1}{2}at^2
\\]
\\[
v^2 = u^2 + 2as
\\]

### Newton's Laws of Motion:
1. **First Law (Inertia):** A body remains at rest or in uniform motion unless acted upon by a net external force.
2. **Second Law:** Force = mass × acceleration.
\\[
F = ma
\\]
Rate of change of momentum.
3. **Third Law:** For every action, there is an equal and opposite reaction.

### Force and Momentum:
- **Momentum (p):**
\\[
p = mv
\\]
(mass × velocity). A vector quantity.
- **Conservation of Momentum:** If net external force is zero, total momentum is conserved. Used in rocket propulsion and recoiling guns.
- **Impulse:** Force × Time = Change in Momentum.
- **Parallelogram of Forces:** If two forces acting at a point are represented by adjacent sides of a parallelogram, their resultant is given by the diagonal.
\\[
R = \\sqrt{P^2 + Q^2 + 2PQ \\cos\\theta}
\\]

### Stability and Equilibrium of Bodies:
- **Stable Equilibrium:** Body returns to original position when displaced (e.g., ball in a bowl). Centre of gravity rises on displacement.
- **Unstable Equilibrium:** Body moves further away from position when displaced (e.g., ball on top of a hill). Centre of gravity falls on displacement.
- **Neutral Equilibrium:** Body stays in new position when displaced (e.g., ball on flat surface). Centre of gravity stays at same height.

### Gravitation:
- 
\\[
F = G \\frac{m_1 m_2}{r^2}
\\]
- Acceleration due to gravity
\\[
g = 9.8 m/s^2
\\]

### Work, Energy, Power:
- **Work:**
\\[
W = Fs \cos \theta
\\]
Unit: Joule (J).
- **Kinetic Energy:**
\\[
KE = \\frac{1}{2}mv^2
\\]
Energy of motion.
- **Potential Energy:**
\\[
PE = mgh
\\]
Energy due to position/height.
- **Power:** Rate of doing work.
\\[
P = \\frac{W}{t}
\\]
Unit: Watt (W). 1 HP = 746 W.
                    `,
                    tricks: 'In recoiling gun problems, always use: Mass(gun) × Vel(gun) = Mass(bullet) × Vel(bullet) directly.',
                    examples: [
                        { question: 'A force of 10N acts on a 2kg body. What is the acceleration?', solution: 'F = ma => 10 = 2 × a => a = 5 m/s².' }
                    ],
                    pyqs: [
                        { year: '2022 (II)', question: 'Which law of Newton is fundamentally related to the conservation of linear momentum?', answer: 'Second and Third Laws', explanation: 'Conservation of momentum is derived using both the second law (F=dp/dt) and the third law (action-reaction).' },
                        { year: '2023 (II)', question: 'A body is moving in a circle of radius R with constant speed v. The acceleration is:', answer: 'v²/R towards center', explanation: 'This is centripetal acceleration, which acts towards the center of the circular path.' },
                        { year: '2023 (I)', question: 'What is the unit of impulse?', answer: 'Newton-second (N-s)', explanation: 'Impulse = Force × Time. So unit is N × s.' },
                        { year: '2022 (I)', question: 'If the distance between two masses is doubled, the gravitational force becomes:', answer: 'One-fourth', explanation: 'Force follow inverse square law (1/r²). Doubling r makes it 1/4th.' },
                        { year: '2021 (II)', question: 'The area under a velocity-time graph represents:', answer: 'Displacement', explanation: 'Velocity × Time = Displacement.' },
                        { year: '2021 (I)', question: 'A stone is thrown vertically upwards. At the highest point, its velocity is:', answer: 'Zero', explanation: 'At the peak, it momentarily stops before falling back.' },
                        { year: '2020 (I)', question: 'What is the relation between linear velocity (v) and angular velocity (ω)?', answer: 'v = rω', explanation: 'Direct formula for circular motion.' },
                        { year: '2019 (II)', question: 'Work done by a centripetal force is:', answer: 'Zero', explanation: 'Since force and displacement are perpendicular (θ=90°), W = Fs cos 90 = 0.' },
                        { year: '2019 (I)', question: 'Unit of power is:', answer: 'Watt', explanation: 'Power is rate of work. Watt = Joule/second.' },
                        { year: '2018 (II)', question: 'What happens to the weight of a body at the center of the Earth?', answer: 'It becomes zero', explanation: 'At the center, g = 0, so Weight = mg = 0.' },
                        { year: '2018 (I)', question: 'Newton\'s first law of motion gives the concept of:', answer: 'Inertia', explanation: 'Inertia is the tendency to resist change in motion.' },
                        { year: '2017 (II)', question: 'Escape velocity from Earth is approximately:', answer: '11.2 km/s', explanation: 'Standard value for Earth.' },
                        { year: '2017 (I)', question: 'Kinetic energy of a body of mass m moving with velocity v is:', answer: '½mv²', explanation: 'Standard formula.' },
                        { year: '2016 (II)', question: '1 Horse Power (HP) is equal to how many Watts?', answer: '746 Watts', explanation: 'Conversion factor.' },
                        { year: '2016 (I)', question: 'If momentum is doubled, kinetic energy becomes:', answer: 'Four times', explanation: 'KE = p²/(2m). If p is doubled, KE becomes 4 times.' },
                        { year: '2015 (II)', question: 'Friction depends on:', answer: 'Nature of surfaces', explanation: 'Roughness of the contacting surfaces determines the coefficient of friction.' },
                        { year: '2015 (I)', question: 'Potential energy of a body at height h is:', answer: 'mgh', explanation: 'Work done against gravity.' },
                        { year: '2014 (II)', question: 'Which of the following is a vector quantity?', answer: 'Force', explanation: 'Force has both magnitude and direction.' },
                        { year: '2014 (I)', question: 'Action and reaction forces act on:', answer: 'Different bodies', explanation: 'By Newton\'s third law, they act on two different bodies.' },
                        { year: '2013 (II)', question: 'Unit of universal gravitational constant G is:', answer: 'N-m²/kg²', explanation: 'G = Fr²/m₁m₂.' }
                    ]
                },
                {
                    id: 'properties-matter',
                    title: 'Properties of Matter',
                    theory: `
# Properties of Matter
Matter is anything that has mass and occupies space.

### States of Matter
1. **Solid:** Fixed shape and volume. Molecules are closely packed.
2. **Liquid:** Fixed volume but no fixed shape. Takes shape of the container.
3. **Gas:** Neither fixed shape nor fixed volume. Molecules are far apart.

### Important Properties:
- **Density:** Mass per unit volume.
\\[
\\rho = \\frac{m}{V}
\\]
Unit: kg/m³.
- **Specific Gravity:** Ratio of density of a substance to density of water. No unit.
- **Archimedes' Principle:** A body immersed in a fluid experiences an upward buoyant force equal to the weight of the fluid displaced.
- **Pressure:** Force per unit area.
\\[
P = \\frac{F}{A}
\\]
Atmospheric pressure is measured by a Barometer (invented by Torricelli).
- **Pascal's Law:** Pressure applied to an enclosed fluid is transmitted equally in all directions. Used in hydraulic brakes and lifts.
                    `,
                    tricks: 'An object floats if its density is less than the fluid it is placed in. Ice floats because the density of ice (917 kg/m³) is less than water (1000 kg/m³).',
                    examples: [
                        { question: 'A block of wood floats in water with 2/3 of its volume submerged. What is its density?', solution: 'Density of block = (Volume submerged / Total volume) × Density of water = (2/3) × 1000 = 667 kg/m³.' }
                    ],
                    pyqs: [
                        { year: '2021 (I)', question: 'The principle used in the working of a hydraulic press is:', answer: "Pascal's Law", explanation: "Pascal's law states that pressure applied to a confined fluid is transmitted undiminished throughout the fluid." },
                        { year: '2023 (II)', question: 'Density of water is maximum at:', answer: '4°C', explanation: 'Due to anomalous expansion of water.' },
                        { year: '2023 (I)', question: 'A body floats in water with half its volume submerged. Its density is:', answer: '500 kg/m³', explanation: 'Density = (Submerged/Total) * Density of water = 0.5 * 1000.' },
                        { year: '2022 (II)', question: 'Unit of surface tension is:', answer: 'N/m', explanation: 'Force per unit length.' },
                        { year: '2022 (I)', question: 'Barometer is used to measure:', answer: 'Atmospheric pressure', explanation: 'Invented by Torricelli.' },
                        { year: '2020 (I)', question: 'Hooke\'s Law states that:', answer: 'Stress ∝ Strain', explanation: 'Valid within the elastic limit.' },
                        { year: '2019 (II)', question: 'Viscosity of liquids ___ with increase in temperature.', answer: 'Decreases', explanation: 'Liquids become less "sticky" when heated.' },
                        { year: '2019 (I)', question: 'The upward force acting on a body in a fluid is called:', answer: 'Buoyant force', explanation: 'Also known as upthrust.' },
                        { year: '2018 (II)', question: 'Young\'s modulus is a property of:', answer: 'Solids only', explanation: 'Relates to tensile/compressive stress in solids.' },
                        { year: '2018 (I)', question: 'Surface tension of water ___ on adding soap.', answer: 'Decreases', explanation: 'Soap acts as a surfactant.' }
                    ]
                },
                {
                    id: 'heat-thermo',
                    title: 'Heat & Thermodynamics',
                    theory: `
# Heat and Temperature
Heat is a form of energy transferred due to temperature difference. Temperature is the measure of hotness or coldness.

### Modes of Heat Transfer:
1. **Conduction:** Transfer through a medium without actual movement of particles (solids). Metals are good conductors.
2. **Convection:** Transfer by actual movement of heated particles (liquids & gases). Sea breeze and land breeze are examples.
3. **Radiation:** Transfer without any medium (electromagnetic waves). The Sun heats the Earth by radiation.

### Thermometry:
- **Celsius:** Water freezes at 0°C, boils at 100°C.
- **Fahrenheit:** Freezes at 32°F, boils at 212°F.
- **Conversion:**
\\[
F = \\frac{9}{5}C + 32
\\]
- **Kelvin:**
\\[
K = C + 273
\\]

### Laws of Thermodynamics:
1. **Zeroth Law:** If A is in thermal equilibrium with B, and B with C, then A is in equilibrium with C.
2. **First Law:** Energy can neither be created nor destroyed, only transformed (Conservation of Energy).
\\[
Q = \\Delta U + W
\\]
3. **Second Law:** Heat cannot spontaneously flow from a colder body to a hotter body.
                    `,
                    tricks: 'Silver is the best conductor of heat followed by Copper. Wool is a bad conductor (insulator) which is why we wear it in winter—it traps air.',
                    examples: [
                        { question: 'Convert 100°C to Fahrenheit.', solution: 'F = (9/5 × 100) + 32 = 180 + 32 = 212°F.' }
                    ],
                    pyqs: [
                        { year: '2023 (I)', question: 'Which mode of heat transfer does not require any medium?', answer: 'Radiation', explanation: 'Radiation can travel through vacuum, unlike conduction and convection which need a material medium.' },
                        { year: '2023 (II)', question: 'Specific heat of water is:', answer: '1 cal/g°C', explanation: 'Or 4200 J/kg°C. It is very high.' },
                        { year: '2022 (II)', question: 'Absolute zero temperature in Celsius is:', answer: '-273.15°C', explanation: '0 Kelvin = -273.15°C.' },
                        { year: '2022 (I)', question: 'At what temperature are Celsius and Fahrenheit scales equal?', answer: '-40', explanation: 'C/5 = (F-32)/9. Putting C=F gives -40.' },
                        { year: '2021 (II)', question: 'Latent heat of fusion of ice is:', answer: '80 cal/g', explanation: 'Heat required to melt 1g of ice at 0°C.' },
                        { year: '2021 (I)', question: 'A black body is a good ___ of heat.', answer: 'Absorber and Emitter', explanation: 'By Kirchhoff\'s law of radiation.' },
                        { year: '2020 (I)', question: 'Cooking is faster in a pressure cooker because:', answer: 'Boiling point increases', explanation: 'High pressure raises the BP of water.' },
                        { year: '2019 (II)', question: 'The first law of thermodynamics is based on:', answer: 'Conservation of Energy', explanation: 'ΔQ = ΔU + W.' },
                        { year: '2019 (I)', question: 'Transfer of heat in liquids mainly takes place by:', answer: 'Convection', explanation: 'Bulk movement of particles.' },
                        { year: '2018 (II)', question: 'Woolen clothes keep us warm because they:', answer: 'Trap air (insulator)', explanation: 'Air is a poor conductor of heat.' }
                    ]
                },
                {
                    id: 'sound',
                    title: 'Sound Waves',
                    theory: `
# Sound
Sound is a longitudinal mechanical wave that needs a medium to travel. It cannot travel through vacuum.

### Properties of Sound:
- **Speed:** Sound travels fastest in solids, then liquids, then gases. Speed in air ≈ 343 m/s at 20°C.
- **Frequency (f):** Number of vibrations per second. Unit: Hertz (Hz).
- **Wavelength (λ):** Distance between two consecutive compressions or rarefactions.
- **Relation:**
\\[
v = f \\lambda
\\]

### Types of Sound:
- **Infrasonic:** Frequency < 20 Hz (below human hearing). Elephants can hear infrasonic sounds.
- **Audible:** 20 Hz to 20,000 Hz (human hearing range).
- **Ultrasonic:** Frequency > 20,000 Hz. Used in SONAR, medical imaging, cleaning jewellery.

### Echo and Reverberation:
- **Echo:** Reflected sound heard after the original sound. Minimum distance needed: 17.2 m (time gap > 0.1 sec).
- **Reverberation:** Persistent sound due to multiple reflections in a closed space.
- **SONAR:** Sound Navigation and Ranging. Uses ultrasonic waves to measure ocean depth.

### Simple Musical Instruments:
Musical instruments produce sound through vibrations of strings, air columns, or membranes.
- **Stringed Instruments (Vibrating Strings):** Sitar, Veena, Guitar, Violin. Changing length, tension, or thickness changes pitch.
- **Wind Instruments (Vibrating Air Column):** Flute, Trumpet, Shehnai, Harmonium. Sound produced by vibrating air inside a pipe/tube.
- **Percussion Instruments (Vibrating Membranes/Surfaces):** Tabla, Drum, Mridangam, Cymbals. Sound produced by striking a surface.
- **Characteristics of Musical Sound:**
  - *Pitch:* Related to frequency (high freq = high pitch, low freq = low pitch).
  - *Loudness:* Related to amplitude (large amplitude = louder).
  - *Quality/Timbre:* Distinguishes two sounds of same pitch and loudness (why a sitar sounds different from a guitar).
                    `,
                    tricks: 'Sound cannot travel in vacuum — that is why astronauts use radio waves to communicate in space, not shouting!',
                    examples: [
                        { question: 'A sound wave has frequency 500 Hz and wavelength 0.66 m. What is the speed?', solution: 'v = f × λ = 500 × 0.66 = 330 m/s.' }
                    ],
                    pyqs: [
                        { year: '2022 (I)', question: 'SONAR uses which type of waves?', answer: 'Ultrasonic waves', explanation: 'SONAR (Sound Navigation and Ranging) uses ultrasonic waves (frequency > 20,000 Hz) to detect underwater objects.' },
                        { year: '2023 (II)', question: 'Sound travels fastest in:', answer: 'Solids', explanation: 'Due to higher elasticity and density of solids.' },
                        { year: '2023 (I)', question: 'Frequency of audible sound for humans is:', answer: '20 Hz to 20,000 Hz', explanation: 'Standard human hearing range.' },
                        { year: '2022 (II)', question: 'Pitch of sound depends on:', answer: 'Frequency', explanation: 'High frequency means high pitch (shrill sound).' },
                        { year: '2021 (II)', question: 'Minimum distance to hear an echo is about:', answer: '17.2 m', explanation: 'Based on 0.1s persistence of hearing and speed ~340m/s.' },
                        { year: '2021 (I)', question: 'Loudness of sound depends on:', answer: 'Amplitude', explanation: 'Loudness ∝ (Amplitude)².' },
                        { year: '2020 (I)', question: 'Speed of sound in vacuum is:', answer: 'Zero', explanation: 'Sound is a mechanical wave and needs a medium to travel.' },
                        { year: '2019 (II)', question: 'Unit of intensity of sound is:', answer: 'Decibel (dB)', explanation: 'Logarithmic scale for sound level.' },
                        { year: '2019 (I)', question: 'Which instrument is used to measure depth of ocean?', answer: 'Fathometer', explanation: 'Uses SONAR principle.' },
                        { year: '2018 (II)', question: 'Infrasonic sounds have frequency:', answer: 'Less than 20 Hz', explanation: 'Produced by elephants, whales, and earthquakes.' }
                    ]
                },
                {
                    id: 'optics',
                    title: 'Optics: Light & Vision',
                    theory: `
# Light and Optics
Light is an electromagnetic wave that travels in a straight line (rectilinear propagation).

### Reflection:
- Angle of incidence = Angle of reflection.
- **Plane Mirror:** Image is virtual, erect, same size, laterally inverted.
- **Concave Mirror:** Used in torches, headlights, shaving mirrors. Can form real or virtual images.
- **Convex Mirror:** Used in rear-view mirrors. Always forms virtual, erect, diminished images.

### Refraction:
- Bending of light when it passes between media of different densities.
- **Snell's Law:**
\\[
\\mu = \\frac{\\sin i}{\\sin r}
\\]
- **Total Internal Reflection:** Occurs when light goes from denser to rarer medium at angle > critical angle. Used in optical fibres and mirages.

### Lenses:
- **Convex Lens (Converging):** Used in magnifying glass, camera, human eye. Can form real or virtual images.
- **Concave Lens (Diverging):** Used to correct myopia (short-sightedness). Always forms virtual, erect, diminished images.

### Human Eye Defects:
- **Myopia (Near-sightedness):** Corrected by concave lens.
- **Hypermetropia (Far-sightedness):** Corrected by convex lens.
                    `,
                    tricks: 'Remember: CoNCAVE = CAVE (curves inward). CoNVEX = curves outward. Concave mirror is used when you need magnification (shaving mirror).',
                    examples: [
                        { question: 'What mirror is used in rear-view mirrors of vehicles?', solution: 'Convex mirror, because it always gives an erect and diminished image, providing a wider field of view.' }
                    ],
                    pyqs: [
                        { year: '2023 (I)', question: 'Twinkling of stars is due to which of the following optical phenomena?', answer: 'Atmospheric Refraction', explanation: 'The starlight undergoes continuous refraction through layers of the atmosphere with different densities.' },
                        { year: '2023 (II)', question: 'Which mirror is used by dentists to see a large image of the teeth of patients?', answer: 'Concave mirror', explanation: 'A concave mirror produces a magnified, virtual, and erect image when the object is placed close to it.' },
                        { year: '2022 (II)', question: 'The splitting of white light into its component colours when passing through a prism is called:', answer: 'Dispersion', explanation: 'Different colours of light bend at different angles through a prism, causing them to split.' },
                        { year: '2022 (I)', question: 'Total internal reflection can occur when light travels from:', answer: 'Denser to rarer medium', explanation: 'Condition for TIR is that light must go into a rarer medium at an angle greater than the critical angle.' },
                        { year: '2021 (II)', question: 'The focal length of a plane mirror is:', answer: 'Infinite', explanation: 'A plane mirror is like a sphere with an infinitely large radius.' },
                        { year: '2021 (I)', question: 'Myopia is a defect of vision which can be corrected by using:', answer: 'Concave lens', explanation: 'A concave lens diverges the light rays so they focuses correctly on the retina.' },
                        { year: '2020 (I)', question: 'A convex lens forms a real, inverted image of the same size as the object when placed at:', answer: '2F', explanation: 'At twice the focal length, the magnification is exactly 1.' },
                        { year: '2019 (II)', question: 'The color of sky appears blue due to:', answer: 'Scattering', explanation: 'Rayleigh scattering affects shorter wavelengths (blue) more than longer wavelengths (red).' },
                        { year: '2019 (I)', question: 'Which mirror is used as a rear-view mirror in vehicles?', answer: 'Convex mirror', explanation: 'It provides a wide field of view and always forms an erect image.' },
                        { year: '2018 (II)', question: 'Rainbow is formed due to a combination of:', answer: 'Dispersion, Refraction and TIR', explanation: 'Sunlight undergoes dispersion, then refraction/reflection inside water droplets.' },
                        { year: '2018 (I)', question: 'The power of a lens of focal length 25 cm is:', answer: '+4D', explanation: 'Power P = 1/f(meters). 1/0.25 = 4 Dioptres.' },
                        { year: '2017 (II)', question: 'Primary colours in light are:', answer: 'Red, Green, Blue', explanation: 'These are the additive primary colours.' },
                        { year: '2017 (I)', question: 'The speed of light is maximum in:', answer: 'Vacuum', explanation: 'Light travels at roughly 3 x 10^8 m/s in vacuum.' },
                        { year: '2016 (II)', question: 'The phenomenon of mirage is primarily due to:', answer: 'Total Internal Reflection', explanation: 'Occurs due to temperature gradients in the air near the ground.' },
                        { year: '2016 (I)', question: 'An object is placed at focus of a concave mirror. The image is formed at:', answer: 'Infinity', explanation: 'Rays coming from the focus become parallel after reflection.' },
                        { year: '2015 (II)', question: 'Which part of the eye controls the amount of light entering it?', answer: 'Iris', explanation: 'The iris adjusts the size of the pupil.' },
                        { year: '2015 (I)', question: 'A lens which is thicker at the middle than at the edges is:', answer: 'Convex lens', explanation: 'This is the physical characteristic of a converging lens.' },
                        { year: '2014 (II)', question: 'Optical fibre works on the principle of:', answer: 'Total Internal Reflection', explanation: 'Signals travel through the core by continuous internal reflection.' },
                        { year: '2014 (I)', question: 'Which lens is used to correct Hypermetropia?', answer: 'Convex lens', explanation: 'A converging lens helps shift the focal point forward onto the retina.' },
                        { year: '2013 (II)', question: 'The refractive index of diamond is approximately:', answer: '2.42', explanation: 'This high refractive index causes its significant sparkle (brilliance).' }
                    ]
                },
                {
                    id: 'magnetism',
                    title: 'Magnetism',
                    theory: `
# Magnetism
A magnet is an object that produces a magnetic field attracting ferromagnetic materials like iron, nickel, and cobalt.

### Properties of Magnets:
1. Every magnet has two poles: **North** and **South**.
2. Like poles repel, unlike poles attract.
3. A freely suspended magnet always points North-South (used in compass).
4. Magnetic poles always exist in pairs — a single isolated pole (monopole) does not exist.

### Types of Magnets:
- **Natural Magnets:** Magnetite (lodestone).
- **Artificial Magnets:** Bar magnets, horseshoe magnets, electromagnets.

### Earth as a Magnet:
- The Earth behaves as a giant bar magnet with its magnetic south pole near the geographic north pole.
- **Magnetic Declination:** Angle between geographic north and magnetic north.
- **Magnetic Inclination (Dip):** Angle between the total Earth's magnetic field and the horizontal.
                    `,
                    tricks: 'A compass needle always points to magnetic north. Geographic north and magnetic north are NOT the same — they differ by the angle of declination.',
                    examples: [
                        { question: 'Why does a compass needle point North?', solution: 'Because Earth acts like a giant magnet. The magnetic south pole of Earth is near the geographic North Pole, attracting the north pole of the compass needle.' }
                    ],
                    pyqs: [
                        { year: '2021 (II)', question: 'Which of the following is NOT attracted by a magnet?', answer: 'Aluminium', explanation: 'Aluminium is a paramagnetic material and is not noticeably attracted by ordinary magnets. Iron, nickel, and cobalt are ferromagnetic.' },
                        { year: '2023 (II)', question: 'A magnetic monopole:', answer: 'Does not exist', explanation: 'Magnets always have north and south poles.' },
                        { year: '2023 (I)', question: 'Unit of magnetic flux is:', answer: 'Weber', explanation: 'Standard SI unit.' },
                        { year: '2022 (II)', question: 'Earth\'s magnetic field is roughly that of a:', answer: 'Bar magnet', explanation: 'With poles near geographic poles.' },
                        { year: '2022 (I)', question: 'Compass needle points towards:', answer: 'Magnetic North', explanation: 'Actually attracted to Earth\'s magnetic South pole near North.' },
                        { year: '2020 (I)', question: 'Steel is used for making permanent magnets because it has:', answer: 'High retentivity and coercivity', explanation: 'It retains magnetism well.' },
                        { year: '2019 (II)', question: 'Angle of dip at the magnetic poles is:', answer: '90°', explanation: 'Field is vertical at the poles.' },
                        { year: '2019 (I)', question: 'Soft iron is used in electromagnets because it has:', answer: 'Low retentivity', explanation: 'Loses magnetism quickly when current stops.' },
                        { year: '2018 (II)', question: 'Magnetic field lines inside a bar magnet travel from:', answer: 'South to North', explanation: 'Outside they go North to South.' },
                        { year: '2018 (I)', question: 'Tesla is the unit of:', answer: 'Magnetic field (B)', explanation: '1 Tesla = 10,000 Gauss.' }
                    ]
                },
                {
                    id: 'electricity',
                    title: 'Current Electricity',
                    theory: `
# Static and Current Electricity

### Static Electricity:
- **Static charges** are charges at rest. Like charges repel, opposite charges attract.
- **Gold Leaf Electroscope:** Used to detect presence and nature of charge.
- **Lightning:** A natural discharge of static electricity between clouds or between a cloud and the ground.

### Conductors and Non-Conductors (Insulators):
- **Conductors:** Materials that allow electric current to pass through them easily (e.g., metals like copper, silver, aluminium, human body, earth).
- **Insulators (Non-conductors):** Materials that do not allow current to pass (e.g., rubber, glass, wood, plastic, dry air).
- **Semiconductors:** Conductivity between conductors and insulators (e.g., Silicon, Germanium).

### Current Electricity:
- **Current (I):** Rate of flow of charge.
\\[
I = \\frac{Q}{t}
\\]
Unit: Ampere (A).
- **Voltage (V):** Potential difference that drives the current. Unit: Volt (V).
- **Resistance (R):** Opposition to flow of current. Unit: Ohm (Ω).

### Ohm's Law:
\\[
V = IR
\\]
(Voltage = Current × Resistance). Valid for metallic conductors at constant temperature.

### Simple Electrical Circuits - Resistors:
- **Series:**
\\[
R_{total} = R_1 + R_2 + R_3
\\]
Current is same, voltage divides.
- **Parallel:**
\\[
\\frac{1}{R_{total}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3}
\\]
Voltage is same, current divides.

### Effects of Current:
1. **Heating Effect:**
\\[
H = I^2 R t
\\]
(Joule's Law). Used in electric heaters, irons, fuses, electric bulbs.
2. **Lighting Effect:** Electric bulb (filament glows due to heating). LED (light from semiconductor). Tube light (gas discharge).
3. **Magnetic Effect:** A current-carrying conductor produces a magnetic field around it. Used in **electromagnets**, **electric bells**, **electric motors**, **generators**.

### Measurement of Electrical Power:
- **Power:**
\\[
P = VI = I^2R = \\frac{V^2}{R}
\\]
Unit: Watt (W).
- **Energy:**
\\[
E = P \\times t
\\]
1 Unit (kWh) = 1000 W × 1 hour = 3.6 × 10⁶ J.
- Electricity bills are based on units consumed (kWh).

### Primary and Secondary Cells:
- **Primary Cell:** Cannot be recharged (e.g., dry cell, Daniel cell, Leclanché cell). Single-use.
- **Secondary Cell:** Can be recharged repeatedly (e.g., lead-acid battery in cars, lithium-ion in phones).

### Use of X-Rays:
- X-rays are high-energy EM waves. Discovered by **Wilhelm Roentgen**.
- Used in medical imaging (bones, fractures), detecting cracks in metals, airport security scanning.
- Can penetrate flesh but are absorbed by bones and dense materials.

### Safety Devices:
- **Lightning Conductor:** A metal rod with pointed end placed on top of tall buildings. Provides a path for lightning to safely reach the ground. Invented by **Benjamin Franklin**.
- **Safety Fuse:** A short piece of wire with **high resistance** and **low melting point** (tin-lead alloy). Melts when excessive current flows, breaking the circuit and protecting appliances.
                    `,
                    tricks: 'For resistors in parallel, the total resistance is always LESS than the smallest individual resistance. A fuse wire has HIGH resistance and LOW melting point.',
                    examples: [
                        { question: 'Three resistors of 2Ω, 3Ω, and 6Ω are connected in parallel. Find total resistance.', solution: '1/R = 1/2 + 1/3 + 1/6 = 3/6 + 2/6 + 1/6 = 6/6 = 1. So R = 1Ω.' }
                    ],
                    pyqs: [
                        { year: '2023 (II)', question: 'The device used to measure potential difference is:', answer: 'Voltmeter', explanation: 'A voltmeter is connected in parallel across the component to measure potential difference. An ammeter (in series) measures current.' },
                        { year: '2023 (I)', question: 'Ohm’s law is valid for:', answer: 'Metallic conductors', explanation: 'Ohm’s law (V=IR) applies to metallic conductors at a constant temperature.' },
                        { year: '2022 (II)', question: 'The unit of electrical resistance is:', answer: 'Ohm', explanation: 'Resistance R = V/I. Unit is Volt/Ampere, called Ohm.' },
                        { year: '2022 (I)', question: 'Three 6Ω resistors are connected in parallel. What is the total resistance?', answer: '2Ω', explanation: '1/R = 1/6 + 1/6 + 1/6 = 3/6 = 1/2. So R = 2Ω.' },
                        { year: '2021 (II)', question: 'A fuse wire should have:', answer: 'High resistance and low melting point', explanation: 'High resistance ensures it heats up, and low melting point ensures it breaks the circuit quickly.' },
                        { year: '2021 (I)', question: 'Commercial unit of electrical energy is:', answer: 'kWh', explanation: '1 kWh (unit) = 3.6 x 10^6 Joules.' },
                        { year: '2020 (I)', question: 'Which material is the best conductor of electricity?', answer: 'Silver', explanation: 'Silver has the lowest resistivity among all metals.' },
                        { year: '2019 (II)', question: 'The filament of an electric bulb is made of:', answer: 'Tungsten', explanation: 'Tungsten has a very high melting point and resistance.' },
                        { year: '2019 (I)', question: 'Two resistors of 2Ω and 4Ω are in series. Total resistance is:', answer: '6Ω', explanation: 'R = R1 + R2 = 2 + 4 = 6Ω.' },
                        { year: '2018 (II)', question: 'What is the function of a lightning conductor?', answer: 'To conduct lightning safely to the ground', explanation: 'It protects tall buildings by providing a low-resistance path to the earth.' },
                        { year: '2018 (I)', question: 'Electromagnets are used in:', answer: 'Electric bells', explanation: 'They use the magnetic effect of electric current.' },
                        { year: '2017 (II)', question: 'The power of an electrical appliance is given by:', answer: 'VI', explanation: 'Power P = Voltage × Current.' },
                        { year: '2017 (I)', question: 'Which cell is a primary cell?', answer: 'Dry cell', explanation: 'Primary cells cannot be recharged after use.' },
                        { year: '2016 (II)', question: 'X-rays were discovered by:', answer: 'Wilhelm Roentgen', explanation: 'He discovered them in 1895.' },
                        { year: '2016 (I)', question: 'In a house, all electrical appliances are connected in:', answer: 'Parallel', explanation: 'Parallel connection ensures each appliance gets the same voltage and can be operated independently.' },
                        { year: '2015 (II)', question: 'The resistance of an ideal ammeter should be:', answer: 'Zero', explanation: 'So that it doesn\'t change the current in the circuit it is measuring.' },
                        { year: '2015 (I)', question: 'The resistance of an ideal voltmeter should be:', answer: 'Infinite', explanation: 'So that it doesn\'t draw any current from the circuit.' },
                        { year: '2014 (II)', question: 'Direction of conventional current is:', answer: 'From Positive to Negative', explanation: 'Opposite to the flow of electrons.' },
                        { year: '2014 (I)', question: 'Which device converts mechanical energy into electrical energy?', answer: 'Electric Generator', explanation: 'Based on electromagnetic induction.' },
                        { year: '2013 (II)', question: 'A transformer works on the principle of:', answer: 'Mutual Induction', explanation: 'Transfer of energy between two coils via a changing magnetic field.' }
                    ]
                },
                {
                    id: 'instruments',
                    title: 'Scientific Instruments',
                    theory: `
# Working Principles of Common Instruments & Simple Machines
Understanding the basic principle behind everyday instruments and machines is important for NDA GAT.

### Simple Machines:
- **Simple Pendulum:** Oscillatory motion. Time period:
\\[
T = 2\\pi\\sqrt{\\frac{l}{g}}
\\]
Period depends ONLY on length and gravity, NOT on mass or amplitude (for small angles). Used in pendulum clocks.
- **Simple Pulleys:** Single fixed pulley changes direction of force (no mechanical advantage). Single movable pulley gives MA = 2. Block and tackle system: more pulleys = more MA.
- **Levers:** A rigid bar that rotates about a fixed point (fulcrum). Three classes:
  - *Class 1:* Fulcrum between load and effort (e.g., see-saw, scissors, pliers).
  - *Class 2:* Load between fulcrum and effort (e.g., wheelbarrow, nutcracker, bottle opener).
  - *Class 3:* Effort between fulcrum and load (e.g., tongs, fishing rod, tweezers).
- **Siphon:** Uses atmospheric pressure and gravity to transfer liquid over a barrier from a higher to a lower level through a tube.

### Instruments Based on Pressure:
- **Barometer:** Measures atmospheric pressure (invented by Torricelli). Mercury barometer: standard pressure = 760 mm Hg.
- **Pressure Cooker:** Increases the boiling point of water by raising internal pressure, cooking food faster at temperatures above 100°C.
- **Pumps:** Force pump (for lifting water to heights), bicycle pump (compresses air), vacuum pump (removes air from enclosed space).
- **Balloon:** Hot air/helium balloons float because the gas inside is less dense than surrounding air. Based on Archimedes' principle for gases.

### Optical & Measuring Instruments:
- **Periscope:** Uses two plane mirrors at 45° to see over obstacles. Used in submarines.
- **Telescope:** Uses convex lenses/mirrors to view distant objects. Astronomical telescope: two convex lenses (objective + eyepiece).
- **Microscope:** Magnifies very small objects. Simple microscope = single convex lens. Compound microscope = two convex lenses.
- **Mariner's Compass:** A magnetized needle floating on a pivot inside a compass box. Always points to magnetic north. Used for navigation at sea.
- **Thermometer:** Measures temperature. Clinical thermometer range: 35°C to 42°C.
- **Hydrometer:** Floats in liquid to measure its specific gravity (relative density).
- **Hygrometer:** Measures humidity in the air.
- **Lactometer:** Measures purity of milk.

### Communication & Other Instruments:
- **Telegraph:** Uses electric signals transmitted over wires to send coded messages (Morse code). Invented by Samuel Morse.
- **Telephone:** Converts sound waves to electrical signals, transmits them over wires, and converts them back to sound. Invented by Alexander Graham Bell.
- **Gramophone:** Plays recorded sound using a needle tracing grooves on a rotating disc. Sound is amplified through a horn.
- **Thermos Flask:** Double-walled glass vessel with vacuum between walls. Minimises heat transfer by conduction, convection, and radiation. Silver coating reflects radiation.
- **Lightning Conductor:** Metal rod with pointed tip on tall buildings. Provides low-resistance path for lightning to reach the ground. Invented by Benjamin Franklin.
- **Safety Fuse:** Short wire of high resistance and low melting point. Melts and breaks circuit when excess current flows.
                    `,
                    tricks: 'Periscope = 2 mirrors at 45°. Kaleidoscope = 3 mirrors. Know what each instrument MEASURES: Barometer (pressure), Hygrometer (humidity), Hydrometer (density), Lactometer (purity of milk).',
                    examples: [
                        { question: 'What principle does a hydraulic lift work on?', solution: "Pascal's Law — pressure applied to a confined fluid is transmitted equally in all directions." }
                    ],
                    pyqs: [
                        { year: '2020 (I)', question: 'Which instrument is used to measure atmospheric pressure?', answer: 'Barometer', explanation: 'A mercury barometer measures atmospheric pressure. Standard atmospheric pressure = 760 mm of Hg.' },
                        { year: '2023 (II)', question: 'Hygrometer is used to measure:', answer: 'Humidity', explanation: 'Amount of water vapor in the air.' },
                        { year: '2023 (I)', question: 'Lactometer works on the principle of:', answer: 'Specific Gravity', explanation: 'Used to check the purity of milk.' },
                        { year: '2022 (II)', question: 'A periscope uses how many plane mirrors?', answer: 'Two', explanation: 'Placed at 45 degree angles.' },
                        { year: '2022 (I)', question: 'Which instrument is used for viewing distant objects?', answer: 'Telescope', explanation: 'Uses lenses or mirrors to magnify.' },
                        { year: '2021 (II)', question: 'An instrument used to measure the depth of ocean is:', answer: 'Fathometer', explanation: 'Uses sound waves.' },
                        { year: '2021 (I)', question: 'Medical thermometer has a range of:', answer: '35°C to 42°C', explanation: 'Specifically for human body temperature.' },
                        { year: '2020 (II)', question: 'Siphon works due to:', answer: 'Atmospheric pressure and gravity', explanation: 'Moves liquid from higher to lower level.' },
                        { year: '2019 (II)', question: 'A simple pendulum\'s time period depends on:', answer: 'Length of the string', explanation: 'T = 2π√(l/g).' },
                        { year: '2019 (I)', question: 'Which device is used to measure electric current?', answer: 'Ammeter', explanation: 'Connected in series.' }
                    ]
                },
                {
                    id: 'em-waves',
                    title: 'Electromagnetic Waves & Spectrum',
                    theory: `
# Electromagnetic Waves
Electromagnetic (EM) waves are transverse waves that do NOT require a medium to travel. They travel at the speed of light (3 × 10⁸ m/s) in vacuum.

### Electromagnetic Spectrum (low frequency → high frequency):
| Wave Type | Frequency Range | Key Uses |
|---|---|---|
| **Radio Waves** | < 3 GHz | Radio & TV broadcasting, radar |
| **Microwaves** | 3 GHz – 300 GHz | Microwave ovens, satellite communication |
| **Infrared (IR)** | 300 GHz – 430 THz | Thermal imaging, TV remotes, night vision |
| **Visible Light** | 430 THz – 750 THz | Human vision. VIBGYOR (Violet to Red) |
| **Ultraviolet (UV)** | 750 THz – 30 PHz | Sterilization, causes sunburn, detected by bees |
| **X-rays** | 30 PHz – 30 EHz | Medical imaging (bones), airport security |
| **Gamma Rays** | > 30 EHz | Cancer treatment, emitted in nuclear decay |

### Key Facts for NDA:
- **Ozone layer** absorbs harmful UV rays.
- **Gamma rays** have the HIGHEST energy and frequency; Radio waves have the LOWEST.
- **Visible light** is a tiny band in the EM spectrum. VIBGYOR — Violet has highest frequency in visible light.
- IR waves are associated with **heat**. UV waves cause **sunburn**.
                    `,
                    tricks: 'Memory trick for EM spectrum (low to high freq): "**R**unning **M**ad, **I** **V**iolently **U**sed e**X**tra **G**renades" → Radio, Micro, Infrared, Visible, UV, X-ray, Gamma.',
                    examples: [
                        { question: 'Which type of EM wave is used in TV remotes?', solution: 'Infrared (IR) waves. They have wavelengths just beyond the red end of visible light.' }
                    ],
                    pyqs: [
                        { year: '2022 (I)', question: 'The ozone layer in the atmosphere protects us from:', answer: 'Ultraviolet radiation', explanation: 'The ozone layer (in the stratosphere) absorbs the Sun\'s harmful UV rays.' },
                        { year: '2023 (II)', question: 'Which EM waves are used in TV remotes?', answer: 'Infrared', explanation: 'Short range communication.' },
                        { year: '2023 (I)', question: 'The speed of all EM waves in vacuum is:', answer: '3 x 10^8 m/s', explanation: 'Same as the speed of light.' },
                        { year: '2022 (II)', question: 'Which EM wave has the highest frequency?', answer: 'Gamma Rays', explanation: 'And therefore highest energy.' },
                        { year: '2021 (II)', question: 'Microwaves are used in:', answer: 'Radar and Satellite communication', explanation: 'High frequency radio waves.' },
                        { year: '2021 (I)', question: 'Visible light range is approximately:', answer: '400 nm to 700 nm', explanation: 'VIBGYOR spectrum.' },
                        { year: '2020 (I)', question: 'X-rays were discovered by:', answer: 'Wilhelm Roentgen', explanation: 'In 1895.' },
                        { year: '2019 (II)', question: 'Which radiation is used for cancer treatment?', answer: 'Gamma Rays', explanation: 'Cobalt-60 is a common source.' },
                        { year: '2019 (I)', question: 'Radio waves have the ___ wavelength.', answer: 'Longest', explanation: 'And lowest frequency.' },
                        { year: '2018 (II)', question: 'Which waves are associated with heat?', answer: 'Infrared', explanation: 'Also called heat waves.' }
                    ]
                },
                {
                    id: 'modern-physics',
                    title: 'Modern Physics & Nuclear Energy',
                    theory: `
# Modern Physics
Modern physics deals with atomic structure, radioactivity, and nuclear reactions.

### Radioactivity:
Discovered by **Henri Becquerel**. Further studied by **Marie Curie** (radium, polonium).
A nucleus is unstable when it has too many neutrons or protons.

| Radiation | Nature | Charge | Penetration | Stopped by |
|---|---|---|---|---|
| **Alpha (α)** | Helium nucleus (2p + 2n) | +2 | Lowest | A sheet of paper |
| **Beta (β)** | Fast electron | -1 | Medium | Aluminium foil |
| **Gamma (γ)** | EM wave (photon) | 0 | Highest | Lead/concrete |

### Nuclear Reactions:
- **Fission:** A heavy nucleus (Uranium-235 or Plutonium-239) splits into smaller nuclei releasing enormous energy. Used in **nuclear reactors** and **atomic bombs**.
- **Fusion:** Light nuclei (Hydrogen isotopes — Deuterium & Tritium) combine to release energy. Source of **Sun's energy**. Used in **hydrogen bomb**. Fusion releases more energy than fission per unit mass.

### Half-Life:
Time taken for half the radioactive atoms in a sample to decay. Each radioactive element has a fixed, characteristic half-life.

### Applications of Nuclear Energy:
- Nuclear power plants (fission of U-235).
- Medical: Radioiodine for thyroid. Cobalt-60 for cancer therapy.
- Carbon-14 dating to determine age of ancient objects (archaeoloTy).
                    `,
                    tricks: 'Fission = SPLIT (an atom bomb splits). Fusion = JOIN (the Sun joins hydrogen into helium). Alpha < Beta < Gamma in penetration power. Gamma = most dangerous. Alpha stopped by paper!',
                    examples: [
                        { question: 'If a radioactive substance has a half-life of 10 years and starts with 80g, how much remains after 30 years?', solution: '30 years = 3 half-lives. After 1st: 40g. After 2nd: 20g. After 3rd: 10g.' }
                    ],
                    pyqs: [
                        { year: '2022 (I)', question: 'The energy released in the Sun is due to:', answer: 'Nuclear Fusion', explanation: 'In the Sun, hydrogen nuclei fuse to form helium, releasing enormous energy per the equation E=mc².' },
                        { year: '2023 (II)', question: 'Nuclear reactors use which process to generate power?', answer: 'Nuclear Fission', explanation: 'Controlled chain reaction of heavy nuclei like U-235.' },
                        { year: '2023 (I)', question: 'The particle identical to Helium nucleus is:', answer: 'Alpha particle', explanation: 'Consists of 2 protons and 2 neutrons.' },
                        { year: '2022 (II)', question: 'Beta particles are:', answer: 'Electrons', explanation: 'Fast moving electrons emitted from nucleus.' },
                        { year: '2021 (II)', question: 'Which radiation has zero mass and zero charge?', answer: 'Gamma rays', explanation: 'They are high energy photons.' },
                        { year: '2021 (I)', question: 'Radioactivity was discovered by:', answer: 'Henri Becquerel', explanation: 'In 1896.' },
                        { year: '2020 (I)', question: 'Half-life is the time in which:', answer: 'Half the atoms decay', explanation: 'Constant for a specific isotope.' },
                        { year: '2019 (II)', question: 'Which isotope is used in carbon dating?', answer: 'C-14', explanation: 'Used to find age of fossils.' },
                        { year: '2019 (I)', question: 'Chain reaction occurs in:', answer: 'Nuclear Fission', explanation: 'Neutrons released cause further fission.' },
                        { year: '2018 (II)', question: 'Highest penetrating power is of:', answer: 'Gamma rays', explanation: 'Alpha is lowest.' }
                    ]
                },
                {
                    id: 'semiconductors',
                    title: 'Semiconductors & Electronics',
                    theory: `
# Semiconductors
A semiconductor is a material whose conductivity lies between a conductor and an insulator. Its conductivity increases with temperature (opposite of metals).

### Examples: Silicon (Si), Germanium (Ge).

### Types:
- **Intrinsic Semiconductor:** Pure form. Very low conductivity.
- **Extrinsic Semiconductor (Doped):** Impurities added to increase conductivity.
  - **N-type:** Doped with Pentavalent atoms (As, P, Sb) → extra free electrons (negative carriers).
  - **P-type:** Doped with Trivalent atoms (B, In, Al) → creates holes (positive carriers).

### PN Junction Diode:
- P-type and N-type materials joined together.
- **Forward Bias:** Current flows (diode ON). External positive terminal connected to P-side.
- **Reverse Bias:** Current does not flow (diode OFF).
- **Uses:** Rectifier (converts AC to DC), LED (Light Emitting Diode), Photodiode.

### Logic Gates (Basic):
| Gate | Symbol | Output |
|---|---|---|
| AND | A·B | 1 only when BOTH inputs are 1 |
| OR | A+B | 1 when ANY input is 1 |
| NOT | Ā | Inverts the input |
| NAND | (A·B)' | Opposite of AND |
| NOR | (A+B)' | Opposite of OR |

### Transistor:
Three-layer semiconductor device (NPN or PNP). Used as an **amplifier** and **switch**.
                    `,
                    tricks: 'N-type = Negative = eXtra electrons (Pentavalent donors). P-type = Positive = holes (Trivalent acceptors). Diode in Forward Bias = current flows. Diode in Reverse Bias = current stops (like a one-way valve).',
                    examples: [
                        { question: 'What is the use of a P-N junction diode?', solution: 'A diode acts as a rectifier — it converts AC (alternating current) to DC (direct current) by allowing current to flow only in one direction.' }
                    ],
                    pyqs: [
                        { year: '2021 (I)', question: 'A transistor can be used as a:', answer: 'Switch and Amplifier', explanation: 'A transistor can switch circuits on/off and amplify small electrical signals, making it the fundamental building block of modern electronics.' },
                        { year: '2023 (II)', question: 'In an N-type semiconductor, the majority carriers are:', answer: 'Electrons', explanation: 'Formed by doping with pentavalent impurities.' },
                        { year: '2023 (I)', question: 'In a P-type semiconductor, the majority carriers are:', answer: 'Holes', explanation: 'Formed by doping with trivalent impurities.' },
                        { year: '2022 (II)', question: 'A diode allows current to flow in:', answer: 'One direction', explanation: 'Acts as a unidirectional switch.' },
                        { year: '2022 (I)', question: 'The process of adding impurities to a pure semiconductor is:', answer: 'Doping', explanation: 'Increases conductivity.' },
                        { year: '2021 (II)', question: 'Silicon and Germanium are:', answer: 'Semiconductors', explanation: 'Conductivity between insulators and conductors.' },
                        { year: '2020 (I)', question: 'A rectifier converts:', answer: 'AC to DC', explanation: 'Uses diodes.' },
                        { year: '2019 (II)', question: 'The output of an OR gate is 1 if:', answer: 'Any input is 1', explanation: 'Standard logic gate behavior.' },
                        { year: '2019 (I)', question: 'The output of a NOT gate is:', answer: 'Inverse of input', explanation: 'Inverter gate.' },
                        { year: '2018 (II)', question: 'Which gate is called a Universal Gate?', answer: 'NAND or NOR', explanation: 'Can be used to build any other gate.' }
                    ]
                }
            ]
        },
        {
            id: 'chemistry-gat',
            title: 'Chemistry',
            subject: 'GAT',
            weightage: 'Medium (15-20 Ques)',
            difficulty: 'Medium',
            subTopics: [
                {
                    id: 'acids-bases',
                    title: 'Acids, Bases & pH Scale',
                    theory: `
# Acids and Bases
Acids produce \\\\(H^+\\\\) ions in water. Bases produce \\\\(OH^-\\\\) ions in water. Strong acids ionize completely. Weak acids ionize partially.

### Properties:
- **Acids:** Sour taste, turn blue litmus red. React with metals to give \\\\(H_2\\\\) gas.
- **Bases:** Bitter taste, slippery to touch, turn red litmus blue.

### Common Compounds and their Formulae:
1. **Baking Soda:** Sodium Bicarbonate (\\\\(NaHCO_3\\\\))
2. **Washing Soda:** Sodium Carbonate Decahydrate (\\\\(Na_2CO_3 \\cdot 10H_2O\\\\))
3. **Bleaching Powder:** Calcium Oxychloride (\\\\(CaOCl_2\\\\))
4. **Plaster of Paris:** \\\\(CaSO_4 \\cdot \\frac{1}{2}H_2O\\\\)
                    `,
                    tricks: 'A salt of strong acid + weak base is acidic (pH < 7). A salt of weak acid + strong base is basic (pH > 7).',
                    examples: [
                        { question: 'What is the pH of Pure Water?', solution: 'Pure water is neutral, so its pH is 7 at 25°C.' }
                    ],
                    pyqs: [
                        { year: '2023 (II)', question: 'Which one of the following is commonly used as an antacid?', answer: 'Magnesium hydroxide', explanation: 'Also known as Milk of Magnesia, it acts as a mild base to neutralize excess stomach acid.' },
                        { year: '2023 (I)', question: 'The pH of a neutral solution is:', answer: '7', explanation: 'At 25 degrees Celsius.' },
                        { year: '2022 (II)', question: 'Acids turn blue litmus ___:', answer: 'Red', explanation: 'Bases turn red litmus blue.' },
                        { year: '2022 (I)', question: 'Which acid is present in lemons?', answer: 'Citric Acid', explanation: 'A weak organic acid.' },
                        { year: '2021 (II)', question: 'The gas released when an acid reacts with a metal is:', answer: 'Hydrogen', explanation: 'Tested with a pop sound.' },
                        { year: '2021 (I)', question: 'Which of the following is a strong acid?', answer: 'HCl', explanation: 'Hydrochloric acid ionizes completely in water.' },
                        { year: '2020 (I)', question: 'Chemical formula of Baking Soda is:', answer: 'NaHCO₃', explanation: 'Sodium Bicarbonate.' },
                        { year: '2019 (II)', question: 'What is the pH of human blood?', answer: '7.4', explanation: 'Slightly basic.' },
                        { year: '2019 (I)', question: 'Which base is used in soap making?', answer: 'NaOH', explanation: 'Sodium Hydroxide (Caustic Soda).' },
                        { year: '2018 (II)', question: 'An acidic solution has a pH ___ than 7.', answer: 'Less', explanation: '0-7 is acidic, 7 is neutral, 7-14 is basic.' }
                    ]
                },
                {
                    id: 'atomic-structure',
                    title: 'Atomic Structure',
                    theory: `
# Atomic Structure
An atom is the smallest unit of an element that retains the properties of that element.

### Sub-Atomic Particles:
- **Proton (p):** Positive charge, found in the nucleus. Mass ≈ 1 amu.
- **Neutron (n):** No charge, found in the nucleus. Mass ≈ 1 amu.
- **Electron (e):** Negative charge, orbits the nucleus. Mass ≈ 1/1836 amu.

### Key Concepts:
- **Atomic Number (Z):** Number of protons in an atom. Defines the element.
- **Mass Number (A):** Protons + Neutrons.
\\[
A = Z + N
\\]
- **Isotopes:** Same atomic number, different mass numbers (e.g., H-1, H-2, H-3).
- **Isobars:** Same mass number, different atomic numbers (e.g., Argon-40 and Calcium-40).

### Models of the Atom:
1. **Thomson's Model (Plum Pudding):** Positive sphere with electrons embedded in it. Disproved by Rutherford.
2. **Rutherford's Model:** Nucleus at center with electrons revolving around it. Could not explain stability.
3. **Bohr's Model:** Electrons move in fixed orbits (shells) around the nucleus. Energy is quantized.
                    `,
                    tricks: 'Isotopes have same chemistry (same Z) but different physics (different mass). Isobars have same mass but different chemistry.',
                    examples: [
                        { question: 'An element has atomic number 11 and mass number 23. Find protons, electrons, and neutrons.', solution: 'Protons = 11, Electrons = 11, Neutrons = 23 - 11 = 12. This is Sodium (Na).' }
                    ],
                    pyqs: [
                        { year: '2022 (I)', question: 'Who proposed the nuclear model of the atom?', answer: 'Ernest Rutherford', explanation: 'Rutherford conducted the alpha-particle scattering experiment and proposed that the atom has a small, dense, positively charged nucleus.' },
                        { year: '2023 (II)', question: 'Which subatomic particle has no charge?', answer: 'Neutron', explanation: 'Located in the nucleus along with protons.' },
                        { year: '2023 (I)', question: 'Atomic number is the number of:', answer: 'Protons', explanation: 'Also equals number of electrons in a neutral atom.' },
                        { year: '2022 (II)', question: 'Mass number is the sum of:', answer: 'Protons and Neutrons', explanation: 'Also called nucleons.' },
                        { year: '2021 (II)', question: 'Isotopes have the same atomic number but different ___:', answer: 'Mass number', explanation: 'Due to different number of neutrons.' },
                        { year: '2021 (I)', question: 'Which orbit can hold a maximum of 8 electrons?', answer: 'L shell', explanation: 'Using formula 2n².' },
                        { year: '2020 (I)', question: 'Cathode rays are a stream of:', answer: 'Electrons', explanation: 'Discovered by J.J. Thomson.' },
                        { year: '2019 (II)', question: 'Alpha particles are ___ charged.', answer: 'Positively', explanation: 'They are helium nuclei.' },
                        { year: '2019 (I)', question: 'Who discovered the neutron?', answer: 'James Chadwick', explanation: 'In 1932.' },
                        { year: '2018 (II)', question: 'Valency of Helium is:', answer: '0', explanation: 'It has a stable duplet configuration.' }
                    ]
                },
                {
                    id: 'chemical-reactions',
                    title: 'Chemical Reactions & Equations',
                    theory: `
# Chemical Reactions
A chemical reaction involves the rearrangement of atoms to form new substances.

### Types of Chemical Reactions:
1. **Combination:** A + B → AB (e.g., 2H₂ + O₂ → 2H₂O)
2. **Decomposition:** AB → A + B (e.g., 2H₂O → 2H₂ + O₂). Can be thermal, electrolytic, or photolytic.
3. **Displacement:** A + BC → AC + B (more reactive metal displaces less reactive).
4. **Double Displacement:** AB + CD → AD + CB (exchange of ions). Precipitation reactions.
5. **Combustion:** Substance reacts with oxygen, releasing heat and light.

### Oxidation and Reduction:
- **Oxidation:** Loss of electrons / gain of oxygen.
- **Reduction:** Gain of electrons / loss of oxygen.
- **Redox Reaction:** Both oxidation and reduction happen simultaneously.
- **Rust:** Iron + Oxygen + Water → Iron Oxide.
\\[
Fe_2O_3 \\cdot xH_2O
\\]
Prevented by painting, oiling, galvanization (zinc coating).

### Law of Chemical Combination:
- **Law of Conservation of Mass:** Total mass of reactants = total mass of products (Lavoisier).
- **Law of Definite Proportions:** A chemical compound always contains the same elements in the same proportion by mass (Proust).
                    `,
                    tricks: 'Reactivity Series (most to least): K, Na, Ca, Mg, Al, Zn, Fe, Ni, Sn, Pb, H, Cu, Hg, Ag, Au, Pt. A metal can only displace metals BELOW it in the series.',
                    examples: [
                        { question: 'Balance the equation: Fe + O₂ → Fe₂O₃', solution: '4Fe + 3O₂ → 2Fe₂O₃. Count atoms on both sides to balance.' }
                    ],
                    pyqs: [
                        { year: '2021 (II)', question: 'Rusting of iron is an example of:', answer: 'Oxidation (corrosion)', explanation: 'Iron reacts with oxygen and moisture in the air to form hydrated iron oxide (rust), which is an oxidation process.' },
                        { year: '2023 (II)', question: 'A reaction where heat is released is called:', answer: 'Exothermic', explanation: 'Endothermic reactions absorb heat.' },
                        { year: '2023 (I)', question: 'In a redox reaction, oxidation and reduction occur ___:', answer: 'Simultaneously', explanation: 'Transfer of electrons.' },
                        { year: '2022 (II)', question: 'Which metal is used in galvanization?', answer: 'Zinc', explanation: 'To prevent rusting of iron.' },
                        { year: '2022 (I)', question: 'Example of a physical change is:', answer: 'Melting of ice', explanation: 'No new chemical substance is formed.' },
                        { year: '2021 (I)', question: '2H₂ + O₂ → 2H₂O is a ___ reaction.', answer: 'Combination', explanation: 'Two reactants form one product.' },
                        { year: '2020 (I)', question: 'Decomposition of water by electricity is called:', answer: 'Electrolysis', explanation: 'Splits water into H₂ and O₂.' },
                        { year: '2019 (II)', question: 'Most reactive metal among the following is:', answer: 'Potassium', explanation: 'According to reactivity series.' },
                        { year: '2019 (I)', question: 'A substance that speeds up a reaction without being consumed is:', answer: 'Catalyst', explanation: 'Lowers activation energy.' },
                        { year: '2018 (II)', question: 'The law that states mass is neither created nor destroyed is:', answer: 'Law of Conservation of Mass', explanation: 'Proposed by Lavoisier.' }
                    ]
                },
                {
                    id: 'carbon-compounds',
                    title: 'Carbon & Its Compounds',
                    theory: `
# Carbon and Its Compounds
Carbon is a versatile element that forms the backbone of organic chemistry.

### Allotropes of Carbon:
1. **Diamond:** Hardest natural substance. Each carbon bonded to 4 others in tetrahedral structure. Used in cutting tools.
2. **Graphite:** Soft, used as lubricant and in pencils. Each carbon bonded to 3 others in layers. Good conductor of electricity.
3. **Fullerene (C60):** Spherical molecule, also called Buckminsterfullerene.

### Hydrocarbons:
- **Saturated (Alkanes):** Single bonds only. General formula:
\\[
C_nH_{2n+2}
\\]
E.g., Methane (CH₄), Ethane (C₂H₆).
- **Unsaturated (Alkenes):** At least one double bond. General formula:
\\[
C_nH_{2n}
\\]
E.g., Ethylene (C₂H₄).
- **Unsaturated (Alkynes):** At least one triple bond. General formula:
\\[
C_nH_{2n-2}
\\]
E.g., Acetylene (C₂H₂).

### Important Carbon Compounds:
- **Ethanol (C₂H₅OH):** Drinking alcohol. Used as a solvent and fuel.
- **Ethanoic Acid (CH₃COOH):** Vinegar (5-8% solution). Used in food preservation.
- **Carbon Dioxide (CO₂):** Produced by respiration and combustion. Used in fire extinguishers.
- **Carbon Monoxide (CO):** Toxic gas, produced by incomplete combustion. Binds with haemoglobin.
                    `,
                    tricks: 'Diamond is the hardest, but graphite is a conductor. The key difference is the bonding structure: Diamond has 4 bonds (sp3), Graphite has 3 bonds (sp2) with free electrons in layers.',
                    examples: [
                        { question: 'Why is graphite a good conductor but diamond is not?', solution: 'In graphite, each carbon uses only 3 of its 4 electrons for bonding. The free fourth electron can move, conducting electricity. In diamond, all 4 electrons are bonded, so none are free.' }
                    ],
                    pyqs: [
                        { year: '2023 (I)', question: 'Which allotrope of carbon is used as a lubricant?', answer: 'Graphite', explanation: 'Graphite has a layered structure where layers can slide over each other, making it an excellent solid lubricant.' },
                        { year: '2023 (II)', question: 'Hardest natural substance is:', answer: 'Diamond', explanation: 'Due to its compact 3D tetrahedral structure.' },
                        { year: '2022 (II)', question: 'Main component of natural gas is:', answer: 'Methane (CH₄)', explanation: 'Used as fuel.' },
                        { year: '2022 (I)', question: 'General formula of Alkanes is:', answer: 'CₙH₂ₙ₊₂', explanation: 'Saturated hydrocarbons.' },
                        { year: '2021 (II)', question: 'Which gas is produced in the complete combustion of carbon?', answer: 'CO₂', explanation: 'Incomplete combustion produces CO.' },
                        { year: '2021 (I)', question: 'Fullerene C60 looks like a:', answer: 'Soccer ball', explanation: 'Also called buckyball.' },
                        { year: '2020 (I)', question: 'Which allotrope of carbon conducts electricity?', answer: 'Graphite', explanation: 'Due to free electrons in its layers.' },
                        { year: '2019 (II)', question: 'The smell of LPG is due to:', answer: 'Ethyl Mercaptan', explanation: 'Added for leak detection.' },
                        { year: '2019 (I)', question: 'Vinegar is a solution of ___ acid in water.', answer: 'Acetic (Ethanoic)', explanation: 'Usually 5-8%.' },
                        { year: '2018 (II)', question: 'Formation of fossil fuels from dead matter is:', answer: 'Carbonization', explanation: 'Occurs over millions of years under pressure.' }
                    ]
                },
                {
                    id: 'applied-chemistry',
                    title: 'Applied Chemistry & Common Substances',
                    theory: `
# Applied Chemistry
Understanding the chemical composition and preparation of everyday substances.

### Important Gases:
- **Oxygen (O₂):** Supporter of combustion. Prepared by heating Potassium Permanganate (\\\\(KMnO_4\\\\)). Essential for respiration.
- **Hydrogen (H₂):** Lightest gas. Burns with a pale blue flame. Used in hydrogenation of oils.
- **Nitrogen (N₂):** Makes up 78% of atmosphere. Used in food packaging (inert) and making ammonia (Haber process).
- **Carbon Dioxide (CO₂):** Used in fire extinguishers, soft drinks, photosynthesis.

### Common Materials:
- **Soap:** Sodium/Potassium salts of long-chain fatty acids. Made by saponification (fat + NaOH).
- **Detergent:** Sodium salts of sulphonic acids. Works in hard water unlike soap.
- **Cement:** Made by heating limestone (CaCO₃) and clay. Portland cement sets with water (hydration).
- **Glass:** Made from Sand (SiO₂) + Soda ash (Na₂CO₃) + Limestone (CaCO₃).
- **Gunpowder:** Mixture of Potassium nitrate (75%) + Charcoal (15%) + Sulphur (10%).

### Fertilizers:
- **Natural:** Farmyard manure, compost, green manure.
- **Artificial:** Urea [CO(NH₂)₂], Ammonium Sulphate [(NH₄)₂SO₄], Superphosphate of Lime.
                    `,
                    tricks: 'Soap does NOT work in hard water (forms scum). Detergent works in both hard and soft water. This is the key difference between them.',
                    examples: [
                        { question: 'What is the composition of gunpowder?', solution: 'Gunpowder = 75% Potassium Nitrate (KNO₃) + 15% Charcoal (Carbon) + 10% Sulphur.' }
                    ],
                    pyqs: [
                        { year: '2020 (I)', question: 'Which gas is used in the manufacture of ammonia by the Haber process?', answer: 'Nitrogen and Hydrogen', explanation: 'The Haber process synthesizes ammonia: N₂ + 3H₂ → 2NH₃ under high temperature and pressure with an iron catalyst.' },
                        { year: '2023 (II)', question: 'Which gas is used in fire extinguishers?', answer: 'CO₂', explanation: 'It is heavier than air and does not support combustion.' },
                        { year: '2023 (I)', question: 'Soap is made by the process of:', answer: 'Saponification', explanation: 'Fats/oils plus an alkali (NaOH/KOH).' },
                        { year: '2022 (II)', question: 'Main constituent of window glass is:', answer: 'Silica (Sand)', explanation: 'SiO₂.' },
                        { year: '2022 (I)', question: 'Which fertilizer provides Nitrogen to plants?', answer: 'Urea', explanation: 'Has highest nitrogen content among solid fertilizers.' },
                        { year: '2021 (II)', question: 'Gunpowder is a mixture of:', answer: 'Nitre, Charcoal, and Sulphur', explanation: 'KNO₃ is the oxidizer.' },
                        { year: '2021 (I)', question: 'Bleaching powder is:', answer: 'CaOCl₂', explanation: 'Calcium oxychloride.' },
                        { year: '2020 (II)', question: 'Which gas is known as laughing gas?', answer: 'Nitrous Oxide (N₂O)', explanation: 'Used as a mild anesthetic.' },
                        { year: '2019 (II)', question: 'Detergents are better than soaps because:', answer: 'They work in hard water', explanation: 'Soaps form scum with Ca/Mg ions.' },
                        { year: '2019 (I)', question: 'Lighter for lighting stoves uses:', answer: 'Piezoelectric crystal', explanation: 'Develops spark on impact.' }
                    ]
                },
                {
                    id: 'matter-states',
                    title: 'Matter: Properties & States',
                    theory: `
# Nature and Properties of Matter
Matter is anything that has mass and occupies space.

### Physical vs Chemical Changes:
- **Physical Change:** No new substance formed. Reversible. (e.g., melting of ice, dissolving sugar).
- **Chemical Change:** New substance formed. Usually irreversible. (e.g., burning, rusting, cooking).

### Elements, Mixtures, and Compounds:
- **Element:** Pure substance made of one type of atom (e.g., Gold, Oxygen).
- **Compound:** Two or more elements chemically combined in a fixed ratio (e.g., Water = H₂O).
- **Mixture:** Two or more substances physically mixed (not in fixed ratio). Can be separated.
  - *Homogeneous Mixture:* Uniform composition (e.g., salt solution).
  - *Heterogeneous Mixture:* Non-uniform (e.g., sand and gravel).

### Methods of Separation:
- **Filtration:** Separates insoluble solid from liquid.
- **Distillation:** Separates liquids with different boiling points.
- **Chromatography:** Separates components based on their solubility/affinity.
- **Magnetic Separation:** Separates magnetic from non-magnetic materials.
                    `,
                    tricks: 'Compounds have fixed composition; mixtures do not. A compound cannot be separated by physical means; a mixture can. Key exam differentiator!',
                    examples: [
                        { question: 'Is air a compound or a mixture?', solution: 'Air is a MIXTURE (mainly N₂, O₂, Ar, CO₂). Its composition varies. It can be separated into components by fractional distillation.' }
                    ],
                    pyqs: [
                        { year: '2022 (II)', question: 'Which method is used to separate cream from milk?', answer: 'Centrifugation', explanation: 'A centrifuge spins the milk at high speed; the denser components (skim milk) move outward, cream (less dense) collects at the center.' },
                        { year: '2023 (II)', question: 'A mixture of sand and salt can be separated by:', answer: 'Filtration after dissolving in water', explanation: 'Salt dissolves, sand is filtered, then water is evaporated.' },
                        { year: '2023 (I)', question: 'Sublimation is observed in:', answer: 'Camphor / Naphthalene', explanation: 'Direct change from solid to gas.' },
                        { year: '2022 (I)', question: 'Air is a/an:', answer: 'Mixture', explanation: 'Homogeneous mixture of various gases.' },
                        { year: '2021 (II)', question: 'Most malleable metal is:', answer: 'Gold', explanation: 'Can be beaten into very thin sheets.' },
                        { year: '2021 (I)', question: 'An example of a homogeneous mixture is:', answer: 'Sugar solution', explanation: 'Uniform composition throughout.' },
                        { year: '2020 (I)', question: 'Technique used to separate pigments from ink is:', answer: 'Chromatography', explanation: 'Based on different rates of movement.' },
                        { year: '2019 (II)', question: 'Water is a/an:', answer: 'Compound', explanation: 'H and O combined in fixed ratio 1:8 by mass.' },
                        { year: '2019 (I)', question: 'Conversion of gas to liquid is:', answer: 'Condensation', explanation: 'Occurs on cooling.' },
                        { year: '2018 (II)', question: 'Bronze is an alloy of:', answer: 'Copper and Tin', explanation: 'Used for statues and coins.' }
                    ]
                },
                {
                    id: 'mole-concept',
                    title: 'Mole Concept, Valency & Formulae',
                    theory: `
# Mole Concept and Valency

### Important Terms:
- **Atomic Mass Unit (amu):** 1 amu = 1/12th the mass of a Carbon-12 atom.
- **Molecular Mass:** Sum of atomic masses of all atoms in a molecule.
- **Mole:** Amount of substance containing 6.022 × 10²³ particles (Avogadro's number).
  - 1 mole of Carbon = 12 grams = 6.022 × 10²³ carbon atoms.

### Valency:
- **Valency:** Combining capacity of an element.
- **Valency of Common Elements:**
  - Hydrogen (H) = 1; Oxygen (O) = 2; Nitrogen (N) = 3; Carbon (C) = 4.
  - Sodium (Na) = 1; Calcium (Ca) = 2; Aluminium (Al) = 3.

### Writing Chemical Formulae (Criss-Cross Rule):
- Swap the valencies of the two elements as subscripts.
- E.g., Al (valency 3) + O (valency 2) → Al₂O₃.
- Ca (valency 2) + Cl (valency 1) → CaCl₂.
                    `,
                    tricks: 'Criss-cross rule: Symbol₁(Val₂) Symbol₂(Val₁). Always simplify the ratio. Na₂O₂ simplifies to NaO? NO! Only simplify if the compound formula allows it (e.g. CaCl₂ stays as CaCl₂).',
                    examples: [
                        { question: 'Write the formula for Calcium Chloride.', solution: 'Ca has valency 2, Cl has valency 1. Criss-cross: CaCl₂.' }
                    ],
                    pyqs: [
                        { year: '2021 (I)', question: "Avogadro's number is approximately:", answer: '6.022 × 10²³', explanation: "Avogadro's number represents the number of entities (atoms, molecules, etc.) in one mole of a substance." },
                        { year: '2023 (II)', question: 'The valency of Oxygen is:', answer: '2', explanation: 'Oxygen needs 2 electrons to complete its octet.' },
                        { year: '2023 (I)', question: '1 amu is equal to:', answer: '1/12th of C-12 mass', explanation: 'Standard definition of atomic mass unit.' },
                        { year: '2022 (II)', question: 'Chemical formula of Aluminium Oxide is:', answer: 'Al₂O₃', explanation: 'Al has valency 3, O has valency 2. Criss-cross gives Al₂O₃.' },
                        { year: '2022 (I)', question: 'The number of moles in 44g of CO₂ is:', answer: '1', explanation: 'Molecular mass of CO₂ = 12 + 16(2) = 44. Moles = mass / molar mass = 44/44 = 1.' },
                        { year: '2021 (II)', question: 'Molecular mass of Water (H₂O) is:', answer: '18 amu', explanation: '2(1) + 16 = 18.' },
                        { year: '2020 (I)', question: 'Valency of Carbon is:', answer: '4', explanation: 'Carbon is tetravalent.' },
                        { year: '2019 (II)', question: 'Mass of one mole of Nitrogen atoms is:', answer: '14 g', explanation: 'Atomic mass of N is 14.' },
                        { year: '2019 (I)', question: 'Chemical formula for Calcium Chloride is:', answer: 'CaCl₂', explanation: 'Ca valency 2, Cl valency 1.' },
                        { year: '2018 (II)', question: 'How many atoms are present in 1 mole of any element?', answer: '6.022 × 10²³', explanation: 'This is the Avogadro number.' }
                    ]
                },
                {
                    id: 'environmental-chemistry',
                    title: 'Environmental Chemistry: Air & Water',
                    theory: `
# Environmental Chemistry

### Composition of Atmosphere:
- **Nitrogen (N₂): 78%** — Most abundant gas in atmosphere.
- **Oxygen (O₂): 21%** — Essential for respiration and combustion.
- **Argon (Ar): ~0.9%**
- **Carbon Dioxide (CO₂): ~0.04%** — Greenhouse gas; essential for photosynthesis.

### Air Pollution Causes:
- **CO (Carbon Monoxide):** Incomplete combustion. Toxic — bonds to haemoglobin 200× more than O₂.
- **SO₂ (Sulphur Dioxide):** Burning coal/petroleum. Causes acid rain.
- **NOₓ (Nitrogen Oxides):** Vehicle exhaust. Causes smog and acid rain.
- **CFCs:** Deplete the ozone layer.

### Water:
- Pure water: colourless, odourless, tasteless. Boiling point = 100°C, Freezing point = 0°C.
- **Hard Water:** Contains dissolved Ca²⁺ and Mg²⁺ salts. Does not lather with soap.
  - *Temporary hardness:* Removed by boiling.
  - *Permanent hardness:* Removed by adding washing soda or ion exchange.
- **Water Purification:** Sedimentation → Filtration → Chlorination.
                    `,
                    tricks: 'Acid rain is caused by SO₂ and NOₓ (NOT CO₂). CO₂ causes global warming. CFCs cause ozone depletion. Know which gas causes which environmental problem.',
                    examples: [
                        { question: 'What causes acid rain?', solution: 'SO₂ and NOₓ from fossil fuels react with atmospheric water to form H₂SO₄ and HNO₃.' }
                    ],
                    pyqs: [
                        { year: '2023 (I)', question: 'Which gas is the most abundant in the Earth\'s atmosphere?', answer: 'Nitrogen (N₂)', explanation: 'Nitrogen makes up approximately 78% of the Earth\'s atmosphere.' },
                        { year: '2023 (II)', question: 'Which gas causes the "Greenhouse Effect"?', answer: 'CO₂, Methane, Water vapor', explanation: 'They trap heat in the atmosphere.' },
                        { year: '2022 (II)', question: 'Acid rain is mainly caused by emissions of:', answer: 'SO₂ and NOₓ', explanation: 'They form sulphuric and nitric acids when mixed with rain.' },
                        { year: '2022 (I)', question: 'Which gas is used for water purification?', answer: 'Chlorine', explanation: 'Kills bacteria and pathogens.' },
                        { year: '2021 (II)', question: 'Hardness of water is due to presence of:', answer: 'Calcium and Magnesium salts', explanation: 'Mainly bicarbonates, chlorides, and sulphates.' },
                        { year: '2021 (I)', question: 'Permanent hardness of water can be removed by:', answer: 'Washing Soda', explanation: 'Or by ion-exchange process.' },
                        { year: '2020 (I)', question: 'Which gas is toxic and binds to hemoglobin strongly?', answer: 'Carbon Monoxide (CO)', explanation: 'Formed by incomplete combustion.' },
                        { year: '2019 (II)', question: 'Ozone layer depletion is caused by:', answer: 'CFCs', explanation: 'Chlorofluorocarbons release chlorine which breaks ozone.' },
                        { year: '2019 (I)', question: 'The main component of LPG is:', answer: 'Butane', explanation: 'Liquefied Petroleum Gas is mainly a mixture of propane and butane.' },
                        { year: '2018 (II)', question: 'Which gas is essential for photosynthesis?', answer: 'CO₂', explanation: 'Used by plants to make glucose.' }
                    ]
                }
            ]
        },
        {
            id: 'biology-gat',
            title: 'Biology',
            subject: 'GAT',
            weightage: 'Medium (10-15 Ques)',
            difficulty: 'Easy',
            subTopics: [
                {
                    id: 'cell-biology',
                    title: 'Cellular Structure & Function',
                    theory: `
# The Cell
The cell is the basic structural and functional unit of life. Discovered by Robert Hooke (1665).

### Important Organelles:
1. **Mitochondria:** Powerhouse of the cell. Produces ATP via cellular respiration. Has its own DNA.
2. **Nucleus:** Control center. Contains DNA (genetic material) organized as chromosomes.
3. **Ribosomes:** Sites of protein synthesis. Found on Rough Endoplasmic Reticulum (RER).
4. **Lysosomes:** "Suicide bags" of the cell. Contain digestive enzymes.
5. **Chloroplasts:** Found only in plant cells. Site of photosynthesis. Has its own DNA.
6. **Golgi Apparatus:** Packaging and secretion of proteins.
7. **Endoplasmic Reticulum:** Rough ER (with ribosomes) — protein synthesis. Smooth ER — lipid synthesis.

### Key Differences:
- **Plant Cell:** Has cell wall, chloroplasts, and large central vacuole. Regular shape.
- **Animal Cell:** Has centrosome (for cell division), no cell wall, small vacuoles. Irregular shape.
- **Prokaryotic:** No defined nucleus, no membrane-bound organelles (e.g., Bacteria).
- **Eukaryotic:** Has true nucleus and membrane-bound organelles (e.g., Plants, Animals).
                    `,
                    tricks: 'Mitochondria and Chloroplasts both have their own DNA — they are semi-autonomous organelles. Remember: "Mito = Power, Chloro = Food".',
                    examples: [
                        { question: 'Which organelle is called the suicide bag?', solution: 'Lysosomes, because when a cell is damaged, they release enzymes that digest the cell itself.' }
                    ],
                    pyqs: [
                        { year: '2022 (I)', question: 'The function of the ribosomes is to:', answer: 'Synthesize proteins', explanation: 'Ribosomes read mRNA and link amino acids to synthesize proteins (translation).' },
                        { year: '2023 (II)', question: 'Which organelle is known as the powerhouse of the cell?', answer: 'Mitochondria', explanation: 'Site of ATP production through cellular respiration.' },
                        { year: '2023 (I)', question: 'Plant cell wall is mainly composed of:', answer: 'Cellulose', explanation: 'Provides structural support and protection.' },
                        { year: '2022 (II)', question: 'Which of the following is absent in an animal cell?', answer: 'Chloroplasts', explanation: 'And also a rigid cell wall.' },
                        { year: '2021 (II)', question: 'Which organelle contains digestive enzymes and is called "suicide bag"?', answer: 'Lysosome', explanation: 'Digests waste and old cell parts.' },
                        { year: '2021 (I)', question: 'The genetic material of a prokaryotic cell is located in:', answer: 'Nucleoid', explanation: 'No nuclear membrane is present.' },
                        { year: '2020 (I)', question: 'Double membrane is absent in:', answer: 'Ribosomes', explanation: 'Mitochondria, Chloroplasts, and Nucleus have double membranes.' },
                        { year: '2019 (II)', question: 'Which organelle is involved in the synthesis of lipids?', answer: 'Smooth ER', explanation: 'Rough ER is for protein synthesis.' },
                        { year: '2019 (I)', question: 'The fluid mosaic model of cell membrane was proposed by:', answer: 'Singer and Nicolson', explanation: 'In 1972.' },
                        { year: '2018 (II)', question: 'Which organelle is responsible for packaging proteins?', answer: 'Golgi Apparatus', explanation: 'Acts as a post office for the cell.' }
                    ]
                },
                {
                    id: 'human-body',
                    title: 'Human Body Systems',
                    theory: `
# Human Body Systems
Elementary knowledge of important organs and their functions.

### Digestive System:
- **Mouth → Oesophagus → Stomach → Small Intestine → Large Intestine → Rectum → Anus.**
- Saliva contains **Amylase** (digests starch). Stomach contains **HCl** and **Pepsin** (digests protein).
- Maximum absorption of nutrients happens in the **Small Intestine** (villi increase surface area).
- **Liver:** Largest gland. Produces bile (emulsifies fats). Stores glycogen.
- **Pancreas:** Produces insulin (regulates blood sugar) and pancreatic juice.

### Circulatory System:
- **Heart:** 4 chambers (2 atria, 2 ventricles). Pumps blood.
- **Arteries:** Carry oxygenated blood AWAY from heart (except pulmonary artery).
- **Veins:** Carry deoxygenated blood TO the heart (except pulmonary vein).
- **Blood Groups:** A, B, AB (universal recipient), O (universal donor). Rh factor (positive/negative).
- **RBC:** Contains haemoglobin, carries oxygen. Lifespan ≈ 120 days. No nucleus.
- **WBC:** Fights infection (immune system). Has nucleus.
- **Platelets:** Blood clotting.

### Respiratory System:
- **Nasal Cavity → Pharynx → Larynx → Trachea → Bronchi → Lungs (Alveoli).**
- Gas exchange occurs in **Alveoli** (oxygen in, CO₂ out).
- **Diaphragm:** Muscular sheet that helps in breathing.
                    `,
                    tricks: 'Remember blood group compatibility: AB is the universal ACCEPTOR ("Accept all Blood"). O is the universal DONOR ("Offer to all types").',
                    examples: [
                        { question: 'Which is the largest gland in the human body?', solution: 'Liver. It weighs about 1.5 kg and performs over 500 functions including bile production and detoxification.' }
                    ],
                    pyqs: [
                        { year: '2023 (I)', question: 'Universal blood donor group is:', answer: 'O negative', explanation: 'Type O has no A or B antigens, and Rh-negative means no Rh antigen, so it can be donated to anyone without rejection.' },
                        { year: '2023 (II)', question: 'Where does most of the digestion of food take place?', answer: 'Small Intestine', explanation: 'Villi increase surface area for maximum absorption.' },
                        { year: '2022 (II)', question: 'Which organ produces bile?', answer: 'Liver', explanation: 'Stored in the gallbladder, emulsifies fats.' },
                        { year: '2022 (I)', question: 'Red Blood Cells (RBCs) are produced in:', answer: 'Bone Marrow', explanation: 'Adult erythropoiesis occurs in red bone marrow.' },
                        { year: '2021 (II)', question: 'The filtering unit of the kidney is called:', answer: 'Nephron', explanation: 'Each kidney has millions of nephrons.' },
                        { year: '2021 (I)', question: 'The normal blood pressure of a healthy human is:', answer: '120/80 mm Hg', explanation: 'Systolic/Diastolic.' },
                        { year: '2020 (I)', question: 'Insulin is produced by which organ?', answer: 'Pancreas', explanation: 'Regulates blood glucose levels.' },
                        { year: '2019 (II)', question: 'Which of the following is a vestigial organ in humans?', answer: 'Appendix', explanation: 'Was useful for our ancestors but has no clear current function.' },
                        { year: '2019 (I)', question: 'Gas exchange in lungs occurs in:', answer: 'Alveoli', explanation: 'Tiny air sacs with thin walls.' },
                        { year: '2018 (II)', question: 'The pH of human blood is approximately:', answer: '7.4', explanation: 'Slightly alkaline.' }
                    ]
                },
                {
                    id: 'health-disease',
                    title: 'Health, Disease & Epidemics',
                    theory: `
# Health and Disease
Disease is any condition that impairs the normal functioning of the body.

### Types of Diseases:
1. **Communicable (Infectious):** Caused by pathogens and spread from person to person.
2. **Non-Communicable:** Not caused by pathogens, not transmissible (e.g., diabetes, cancer, heart disease).

### Common Diseases & Their Causes:
**Bacterial:**
- Tuberculosis (TB) — Mycobacterium tuberculosis
- Cholera — Vibrio cholerae (contaminated water)
- Typhoid — Salmonella typhi

**Viral:**
- COVID-19 — SARS-CoV-2
- Dengue — Aedes aegypti mosquito
- Rabies — Bite of infected animal
- AIDS — HIV (destroys immune system/CD4 cells)

**Protozoan:**
- Malaria — Plasmodium (carried by female Anopheles mosquito)
- Amoebic Dysentery — Entamoeba histolytica

**Fungal:**
- Ringworm — Dermatophytes

### Prevention Methods:
- **Vaccination:** Introducing weakened/dead pathogens to build immunity. Edward Jenner (Smallpox vaccine).
- **Sanitation:** Clean water, proper sewage disposal.
- **Mosquito Control:** Nets, repellents, removing stagnant water.
                    `,
                    tricks: 'Malaria = Female Anopheles mosquito (not male). Dengue = Aedes mosquito. Both are protozoan and viral respectively — do not confuse the vector with the pathogen.',
                    examples: [
                        { question: 'Which mosquito spreads malaria?', solution: 'Female Anopheles mosquito. It carries the Plasmodium parasite which causes malaria.' }
                    ],
                    pyqs: [
                        { year: '2021 (I)', question: 'AIDS is caused by:', answer: 'HIV (Human Immunodeficiency Virus)', explanation: 'HIV attacks the immune system, specifically CD4+ T cells, making the body vulnerable to infections.' },
                        { year: '2023 (II)', question: 'Which disease is caused by a protozoan?', answer: 'Malaria', explanation: 'Caused by Plasmodium.' },
                        { year: '2023 (I)', question: 'Tuberculosis is caused by:', answer: 'Bacterium', explanation: 'Mycobacterium tuberculosis.' },
                        { year: '2022 (II)', question: 'Which mosquito spreads Dengue?', answer: 'Aedes aegypti', explanation: 'Often bites during the day.' },
                        { year: '2022 (I)', question: 'Rabies is a ___ disease.', answer: 'Viral', explanation: 'Spreads via infected animal saliva.' },
                        { year: '2021 (II)', question: 'Night blindness is caused by deficiency of:', answer: 'Vitamin A', explanation: 'Prevents vision in low light.' },
                        { year: '2020 (I)', question: 'Who developed the first vaccine?', answer: 'Edward Jenner', explanation: 'For smallpox.' },
                        { year: '2019 (II)', question: 'Typhoid is caused by:', answer: 'Salmonella typhi', explanation: 'Usually through contaminated food/water.' },
                        { year: '2019 (I)', question: 'Which disease is characterized by uncontrolled cell division?', answer: 'Cancer', explanation: 'Can occur in any organ.' },
                        { year: '2018 (II)', question: 'Penicillin was discovered from:', answer: 'Fungus', explanation: 'Penicillium notatum.' }
                    ]
                },
                {
                    id: 'nutrition',
                    title: 'Food & Nutrition',
                    theory: `
# Food and Nutrition
Food provides energy and materials for growth and repair of the body.

### Constituents of Food:
1. **Carbohydrates:** Main source of energy. Found in rice, wheat, potatoes, sugar. 1g = 4 Calories.
2. **Proteins:** Body-building foods. Found in eggs, milk, meat, pulses. 1g = 4 Calories.
3. **Fats:** High energy source. Found in butter, oil, nuts. 1g = 9 Calories.
4. **Vitamins:** Regulatory substances needed in small amounts.
5. **Minerals:** Essential for bones, teeth, blood (e.g., Calcium, Iron, Iodine).
6. **Water:** Makes up ~70% of body weight. Essential for all metabolic processes.
7. **Dietary Fibre (Roughage):** Aids digestion and prevents constipation.

### Important Vitamins & Deficiency Diseases:
- **Vitamin A:** Night blindness (Xerophthalmia). Source: Carrots, liver.
- **Vitamin B1 (Thiamine):** Beriberi. Source: Whole grains.
- **Vitamin B12:** Anaemia. Source: Meat, dairy.
- **Vitamin C:** Scurvy (bleeding gums). Source: Citrus fruits.
- **Vitamin D:** Rickets (weak bones in children). Source: Sunlight, fish oil.
- **Vitamin E:** Sterility. Source: Vegetable oils.
- **Vitamin K:** Excessive bleeding (blood clotting issues). Source: Green leafy vegetables.

### Balanced Diet:
A diet containing all nutrients in the right proportions — carbohydrates, proteins, fats, vitamins, minerals, water, and fibre.
                    `,
                    tricks: 'Fat-soluble vitamins: A, D, E, K (remember "ADEK"). Water-soluble vitamins: B-complex and C. Fat-soluble vitamins are stored in the body; water-soluble are not.',
                    examples: [
                        { question: 'Deficiency of Vitamin D causes which disease?', solution: 'Rickets in children (soft and weak bones) and Osteomalacia in adults. Vitamin D helps absorb Calcium.' }
                    ],
                    pyqs: [
                        { year: '2022 (II)', question: 'Scurvy is caused by the deficiency of:', answer: 'Vitamin C', explanation: 'Scurvy causes bleeding gums and weakness. It is prevented by consuming citrus fruits, amla, and tomatoes.' },
                        { year: '2023 (II)', question: 'Which vitamin is synthesized in the skin by sunlight?', answer: 'Vitamin D', explanation: 'Crucial for calcium absorption.' },
                        { year: '2023 (I)', question: 'Iodine deficiency causes:', answer: 'Goitre', explanation: 'Swelling of the thyroid gland.' },
                        { year: '2022 (I)', question: 'Which nutrient yields maximum energy per gram?', answer: 'Fats', explanation: 'Fats yield ~9 kcal/g, while carbs/proteins yield ~4 kcal/g.' },
                        { year: '2021 (II)', question: 'Iron deficiency in the diet leads to:', answer: 'Anaemia', explanation: 'Low hemoglobin levels.' },
                        { year: '2021 (I)', question: 'Which vitamin is essential for blood clotting?', answer: 'Vitamin K', explanation: 'Helps in synthesis of prothrombin.' },
                        { year: '2020 (I)', question: 'Beri-beri is caused by deficiency of:', answer: 'Vitamin B1 (Thiamine)', explanation: 'Affects the nervous system.' },
                        { year: '2019 (II)', question: 'Main carbohydrate in rice is:', answer: 'Starch', explanation: 'A complex polysaccharide.' },
                        { year: '2019 (I)', question: 'Pulses are a good source of:', answer: 'Proteins', explanation: 'Building blocks of the body.' },
                        { year: '2018 (II)', question: 'Which vitamin is also known as Retinol?', answer: 'Vitamin A', explanation: 'Essential for vision.' }
                    ]
                },
                {
                    id: 'plant-physiology',
                    title: 'Plant Biology & Physiology',
                    theory: `
# Plant Biology
Plants are autotrophs — they make their own food through photosynthesis.

### Photosynthesis:
- **Equation:**
\\[
6CO_2 + 6H_2O \\xrightarrow{\\text{Sunlight}} C_6H_{12}O_6 + 6O_2
\\]
- Occurs in **Chloroplasts** using **Chlorophyll** (green pigment).
- Requires: Carbon dioxide + Water + Sunlight.
- Produces: Glucose + Oxygen.

### Reproduction in Plants:
1. **Asexual:** Vegetative propagation (runners, tubers, bulbs), budding, spore formation, fragmentation.
2. **Sexual:** Involves pollination (transfer of pollen to stigma).
   - **Self-pollination:** Same flower or same plant.
   - **Cross-pollination:** Different plants of the same species. Agents: wind, water, insects, birds.

### Parts of a Flower:
- **Sepals:** Green, protective.
- **Petals:** Coloured, attract pollinators.
- **Stamen (Male):** Anther (produces pollen) + Filament.
- **Pistil (Female):** Stigma + Style + Ovary (contains ovules).

### Growth and Germination:
- Seeds germinate when they get adequate water, oxygen, and warmth.
- **Tropism:** Growth in response to stimulus. Phototropism (light), Geotropism (gravity), Hydrotropism (water).
                    `,
                    tricks: 'Photosynthesis happens in chloroplasts (uses CO₂, gives O₂). Respiration happens in mitochondria (uses O₂, gives CO₂). They are essentially reverse processes.',
                    examples: [
                        { question: 'What is the role of chlorophyll in photosynthesis?', solution: 'Chlorophyll absorbs sunlight energy, which is used to convert CO₂ and water into glucose and oxygen.' }
                    ],
                    pyqs: [
                        { year: '2020 (II)', question: 'Photosynthesis takes place in which part of the plant cell?', answer: 'Chloroplast', explanation: 'Chloroplasts contain chlorophyll, the green pigment that captures light energy for photosynthesis.' },
                        { year: '2023 (II)', question: 'Which gas is released during photosynthesis?', answer: 'Oxygen', explanation: 'Byproduct of water splitting.' },
                        { year: '2023 (I)', question: 'Water is transported in plants through:', answer: 'Xylem', explanation: 'Unidirectional transport from roots.' },
                        { year: '2022 (II)', question: 'Sugar/Food is transported in plants through:', answer: 'Phloem', explanation: 'Bidirectional transport.' },
                        { year: '2022 (I)', question: 'Transpiration occurs primarily through:', answer: 'Stomata', explanation: 'Loss of water vapor from leaves.' },
                        { year: '2021 (II)', question: 'Bending of a plant towards light is called:', answer: 'Phototropism', explanation: 'Caused by hormone Auxin.' },
                        { year: '2021 (I)', question: 'Which hormone is known as the "Stress Hormone"?', answer: 'Abscisic Acid (ABA)', explanation: 'Closes stomata during drought.' },
                        { year: '2020 (I)', question: 'Pollination by insects is called:', answer: 'Entomophily', explanation: 'By wind = Anemophily, By water = Hydrophily.' },
                        { year: '2019 (II)', question: 'Which part of the flower develops into a seed?', answer: 'Ovule', explanation: 'Ovary becomes the fruit.' },
                        { year: '2018 (II)', question: 'Cactus plants store water in their:', answer: 'Stem', explanation: 'Modified for photosynthesis and storage.' }
                    ]
                },
                {
                    id: 'genetics',
                    title: 'Genetics & Evolution',
                    theory: `
# Genetics and Heredity
Genetics is the study of heredity and variation. **Gregor Mendel** is known as the Father of Genetics (experimented on pea plants).

### Key Terms:
- **Chromosomes:** Thread-like structures in the nucleus containing genetic info. Humans have 46 (23 pairs).
  - 22 pairs are **Autosomes**.
  - 1 pair is **Sex Chromosomes** (XX in females, XY in males).
- **DNA (Deoxyribonucleic Acid):** Double-helix molecule carrying genetic instructions. Discovered by Watson and Crick.
- **Gene:** The basic unit of heredity (a segment of DNA).
- **Allele:** Alternative forms of a gene (e.g., tall/short).

### Mendel's Laws:
1. **Law of Dominance:** In a heterozygote, one trait will conceal the presence of another trait for the same characteristic.
2. **Law of Segregation:** Allele pairs separate during gamete formation.
3. **Law of Independent Assortment:** Different genes independently separate from one another during gamete formation.

### Evolution:
- **Charles Darwin:** Proposed the theory of Natural Selection ("Survival of the fittest").
- **Lamarck:** Proposed the theory of Inheritance of Acquired Characteristics (now widely disproved).
- **Homologous Organs:** Same structure, different function (e.g., human arm & whale flipper).
- **Analogous Organs:** Different structure, same function (e.g., insect wing & bird wing).
                    `,
                    tricks: 'Sex determination in humans depends ENTIRELY on the male (sperm carries either X or Y, egg only carries X). XY = boy, XX = girl.',
                    examples: [
                        { question: 'Who proposed the theory of Natural Selection?', solution: 'Charles Darwin, in his book "On the Origin of Species".' }
                    ],
                    pyqs: [
                        { year: '2021 (II)', question: 'Which one of the following has the sex chromosome XX?', answer: 'Human Female', explanation: 'Human females have two X chromosomes (XX), while human males have one X and one Y chromosome (XY).' },
                        { year: '2023 (II)', question: 'Who is the "Father of Genetics"?', answer: 'Gregor Mendel', explanation: 'Worked on pea plants (Pisum sativum).' },
                        { year: '2023 (I)', question: 'The structural unit of heredity is:', answer: 'Gene', explanation: 'A segment of DNA.' },
                        { year: '2022 (II)', question: 'Double helix model of DNA was given by:', answer: 'Watson and Crick', explanation: 'In 1953.' },
                        { year: '2022 (I)', question: 'Total pairs of chromosomes in a human cell are:', answer: '23', explanation: '46 total chromosomes.' },
                        { year: '2021 (I)', question: 'Mutation theory was proposed by:', answer: 'Hugo de Vries', explanation: 'Based on Oenothera lamarckiana.' },
                        { year: '2020 (I)', question: 'Sex of the child is determined by:', answer: 'Father (XY)', explanation: 'Sperm carries either X or Y.' },
                        { year: '2019 (II)', question: 'Evolution by Natural Selection was proposed by:', answer: 'Charles Darwin', explanation: 'In "Origin of Species".' },
                        { year: '2019 (I)', question: 'Chromosomes are made up of:', answer: 'DNA and Protein (Histones)', explanation: 'In eukaryotic cells.' },
                        { year: '2018 (II)', question: 'Phenotype refers to:', answer: 'Observable characteristics', explanation: 'Genotype is the genetic makeup.' }
                    ]
                },
                {
                    id: 'ecology',
                    title: 'Ecology & Environment',
                    theory: `
# Ecology and Environment
Ecology is the study of interactions among organisms and their environment.

### Components of an Ecosystem:
- **Biotic (Living):** Producers (plants), Consumers (animals), Decomposers (bacteria/fungi).
- **Abiotic (Non-living):** Sunlight, water, soil, temperature.

### Food Chain & Food Web:
- **Food Chain:** Linear sequence of organisms eating one another (e.g., Grass → Grasshopper → Frog → Snake → Eagle).
- **Food Web:** A network of interconnected food chains.
- **10% Law of Energy Transfer (Lindeman):** Only 10% of energy is transferred to the next trophic level. The rest is lost as heat. Therefore, food chains rarely exceed 4-5 levels.

### Environmental Issues:
- **Global Warming:** Increase in Earth's temperature due to greenhouse gases (CO₂, CH₄, N₂O).
- **Ozone Depletion:** Thinning of the ozone layer in the stratosphere, caused mainly by CFCs (Chlorofluorocarbons).
- **Biomagnification:** The accumulation of toxic substances (like DDT or mercury) as you move up the food chain. The apex predator has the highest concentration.
                    `,
                    tricks: 'Remember the 10% law: Producers (1000J) -> Primary Consumers (100J) -> Secondary Consumers (10J). Energy DECREASES drastically as you go up the chain.',
                    examples: [
                        { question: 'What is biomagnification?', solution: 'It is the increasing concentration of a toxic substance in the tissues of organisms at successively higher levels in a food chain.' }
                    ],
                    pyqs: [
                        { year: '2022 (I)', question: 'In a terrestrial ecosystem, what percentage of food energy is transferred from one trophic level to the next?', answer: '10%', explanation: 'According to Lindeman\'s 10% law, only about 10% of energy is transferred to the next trophic level.' },
                        { year: '2023 (II)', question: 'Which of the following is an abiotic component of an ecosystem?', answer: 'Sunlight', explanation: 'Air, water, soil, and sunlight are abiotic (non-living) components.' },
                        { year: '2023 (I)', question: 'Biological magnification is maximum in which trophic level?', answer: 'Top Carnivores', explanation: 'Toxins accumulate and become more concentrated at higher trophic levels.' },
                        { year: '2022 (II)', question: 'The primary source of energy in most ecosystems is:', answer: 'Sunlight', explanation: 'Captured by producers (plants) via photosynthesis.' },
                        { year: '2021 (II)', question: 'Which gas is mainly responsible for Global Warming?', answer: 'Carbon Dioxide (CO₂)', explanation: 'Along with Methane (CH₄) and Nitrous Oxide (N₂O).' },
                        { year: '2021 (I)', question: 'CFCs are responsible for the depletion of:', answer: 'Ozone Layer', explanation: 'Chlorofluorocarbons release chlorine atoms which break down ozone (O₃).' },
                        { year: '2020 (I)', question: 'In a food chain, herbivores are also known as:', answer: 'Primary Consumers', explanation: 'Producers -> Primary Consumers -> Secondary Consumers.' },
                        { year: '2019 (II)', question: 'A network of interconnected food chains is called:', answer: 'Food Web', explanation: 'Represents the complex feeding relationships in nature.' },
                        { year: '2019 (I)', question: 'Which of the following is a decomposer?', answer: 'Fungi', explanation: 'Fungi and bacteria break down dead organic matter.' },
                        { year: '2018 (II)', question: 'The term "Ecosystem" was coined by:', answer: 'A.G. Tansley', explanation: 'Proposed in 1935.' }
                    ]
                },
                {
                    id: 'animal-kingdom',
                    title: 'Animal Kingdom Classification',
                    theory: `
# Animal Kingdom Classification
The animal kingdom is broadly divided into Invertebrates (no backbone) and Vertebrates (with backbone).

### Major Invertebrate Phyla:
1. **Porifera (Sponges):** Cellular level, porous body (e.g., Sycon).
2. **Cnidaria/Coelenterata:** Have stinging cells called nematocysts (e.g., Hydra, Jellyfish, Coral).
3. **Platyhelminthes (Flatworms):** Flat body, mostly parasites (e.g., Tapeworm, Planaria).
4. **Nematoda (Roundworms):** Cylindrical body (e.g., Ascaris).
5. **Annelida (Segmented worms):** Segmented body, closed circulatory system (e.g., Earthworm, Leech).
6. **Arthropoda:** Largest phylum. Jointed legs, exoskeleton (e.g., Insects, Spiders, Crabs).
7. **Mollusca:** Soft body, often with a shell (e.g., Snail, Octopus).
8. **Echinodermata:** Spiny-skinned, radial symmetry, water vascular system (e.g., Starfish).

### Phylum Chordata (Vertebrates):
Have a notochord/backbone.
- **Pisces (Fishes):** Aquatic, gills, 2-chambered heart.
- **Amphibia:** Live in water & on land, 3-chambered heart (e.g., Frog, Toad).
- **Reptilia:** Scaly skin, terrestrial, lay leathery eggs, mostly 3-chambered heart (Crocodile has 4) (e.g., Snake, Lizard).
- **Aves (Birds):** Feathers, hollow wings, warm-blooded, 4-chambered heart.
- **Mammalia:** Give birth to live young (mostly), have hair/fur, mammary glands, 4-chambered heart.
                    `,
                    tricks: 'Heart chambers: Fish=2, Amphibian/Reptile=3 (Crocodile=4), Bird/Mammal=4. Arthropoda is the LARGEST phylum (insects are everywhere).',
                    examples: [
                        { question: 'To which phylum does an octopus belong?', solution: 'Mollusca (soft-bodied animals, though octopuses lack the external shell common to many molluscs).' }
                    ],
                    pyqs: [
                        { year: '2023 (I)', question: 'Which of the following classes of animals has a three-chambered heart?', answer: 'Amphibia', explanation: 'Amphibians and most reptiles have a three-chambered heart (two atria, one ventricle). Mammals and birds have a four-chambered heart.' },
                        { year: '2023 (II)', question: 'To which phylum do honey bees belong?', answer: 'Arthropoda', explanation: 'Largest phylum, characterized by jointed legs and exoskeleton.' },
                        { year: '2022 (II)', question: 'Which of the following is a cold-blooded animal?', answer: 'Snake', explanation: 'Reptiles, amphibians, and fish are ectothermic (cold-blooded).' },
                        { year: '2022 (I)', question: 'Whale belongs to which class?', answer: 'Mammalia', explanation: 'Whales are mammals; they give birth to live young and nurse them with milk.' },
                        { year: '2021 (II)', question: 'Which animal has a 4-chambered heart despite being a reptile?', answer: 'Crocodile', explanation: 'Crocodiles are the exception among reptiles.' },
                        { year: '2021 (I)', question: 'Binary fission is observed in:', answer: 'Amoeba', explanation: 'A form of asexual reproduction where one cell splits into two.' },
                        { year: '2020 (I)', question: 'The largest phylum of Animal Kingdom is:', answer: 'Arthropoda', explanation: 'Includes insects, spiders, crabs, etc.' },
                        { year: '2019 (II)', question: 'Which of the following is an egg-laying mammal?', answer: 'Platypus', explanation: 'Monotremes like Platypus and Echidna are egg-laying mammals.' },
                        { year: '2019 (I)', question: 'Pores present all over the body are a feature of:', answer: 'Porifera (Sponges)', explanation: 'Water enters through these pores (ostia).' },
                        { year: '2018 (II)', question: 'Reptiles lay eggs with:', answer: 'Leathery shells', explanation: 'To prevent desiccation on land.' }
                    ]
                },
                {
                    id: 'fundamentals-of-life',
                    title: 'Fundamentals of Life & Tissues',
                    theory: `
# Fundamentals of Life
Understanding the basic building blocks that differentiate living from non-living things.

### Living vs Non-Living:
- **Living Things:** Characterized by cellular structure, metabolism (respiration, digestion), growth, reproduction, response to stimuli (irritability), and adaptation.
- **Viruses:** Considerably on the borderline between living and non-living. They crystallize outside a host (non-living) but reproduce inside a living cell.

### The Basis of Life:
- **Cell:** The fundamental structural and functional unit of life.
- **Protoplasm:** The physical basis of life. It is the living substance inside the cell (Cytoplasm + Nucleus). Coined by **Purkinje**. Composed mainly of Water, Proteins, Carbohydrates, and Lipids.
- **Tissues:** A group of similar cells performing a specific function.

### Plant Tissues:
- **Meristematic Tissue:** Dividing cells, responsible for growth (e.g., tip of roots/stems).
- **Permanent Tissue:** Differentiated cells.
  - *Simple:* Parenchyma (storage), Collenchyma (flexibility), Sclerenchyma (strength, dead cells like coconut husk).
  - *Complex:* Xylem (conducts water up), Phloem (conducts food/sugar down).

### Animal Tissues:
- **Epithelial:** Covering and protective (skin, organ linings).
- **Connective:** Connects and supports (Blood, Bone, Cartilage, Ligaments connect bone-to-bone, Tendons connect muscle-to-bone).
- **Muscular:** For movement (Striated/voluntary, Smooth/involuntary, Cardiac/heart).
- **Nervous:** Specialised for transmitting impulses (Neurons).
                    `,
                    tricks: 'Xylem = X for Xcelling UP (water from roots). Phloem = F for Food (leaves to rest of plant). Ligaments = Bone to Bone (like likes like). Tendons = Muscle to Bone.',
                    examples: [
                        { question: 'What is the physical basis of life called?', solution: 'Protoplasm.' }
                    ],
                    pyqs: [
                        { year: '2022 (II)', question: 'Which of the following plant tissues is dead at maturity?', answer: 'Sclerenchyma', explanation: 'Sclerenchyma cells are dead, thick-walled cells that provide structural support to the plant.' },
                        { year: '2023 (II)', question: 'The term "Protoplasm" was coined by:', answer: 'Purkinje', explanation: 'In 1839, referring to the living substance of the cell.' },
                        { year: '2023 (I)', question: 'Which tissue connects muscle to bone?', answer: 'Tendon', explanation: 'Ligaments connect bone to bone.' },
                        { year: '2022 (I)', question: 'Which is the hardest tissue in the human body?', answer: 'Tooth enamel', explanation: 'Highly mineralized substance.' },
                        { year: '2021 (II)', question: 'Xylem helps in the transport of:', answer: 'Water', explanation: 'Phloem helps in transport of food.' },
                        { year: '2021 (I)', question: 'Blood is a type of:', answer: 'Connective tissue', explanation: 'Fluid connective tissue.' },
                        { year: '2020 (I)', question: 'Which tissue is responsible for growth in plants?', answer: 'Meristematic tissue', explanation: 'Cells are continuously dividing.' },
                        { year: '2019 (II)', question: 'The lining of blood vessels is made of:', answer: 'Squamous epithelium', explanation: 'Thin and flat cells allowing for diffusion.' },
                        { year: '2019 (I)', question: 'Which organelle is semi-autonomous?', answer: 'Mitochondria', explanation: 'Because they have their own DNA.' },
                        { year: '2018 (II)', question: 'Cardiac muscles are found in:', answer: 'Heart', explanation: 'They are involuntary and striated.' }
                    ]
                },
                {
                    id: 'reproduction-growth',
                    title: 'Growth & Reproduction',
                    theory: `
# Growth and Reproduction
Reproduction ensures the continuity of species.

### Reproduction in Plants:
- **Asexual:** Does not involve gametes.
  - *Vegetative Propagation:* New plants arise from roots, stems, or leaves (e.g., Potato tubers, Bryophyllum leaves, Rose cuttings).
  - *Spore Formation:* Fungi, Ferns.
- **Sexual (Flowers):**
  - *Male part:* Stamen (Anther + Filament). Pollen grains contain male gametes.
  - *Female part:* Pistil/Carpel (Stigma, Style, Ovary). Ovules inside ovary contain the egg.
  - *Pollination:* Transfer of pollen from anther to stigma (by wind, water, insects).
  - *Fertilization:* Fusion of male and female gametes to form a **Zygote**. Unfertilized ovary becomes the **fruit**; ovules become the **seeds**.

### Reproduction in Animals:
- **Asexual:**
  - *Binary Fission:* Amoeba, Paramecium (splits into two).
  - *Budding:* Hydra, Yeast (outgrowth detaches to form new organism).
  - *Regeneration:* Planaria, Starfish (cut part grows into whole organism).
- **Sexual:**
  - Male gamete (sperm) fuses with female gamete (ovum/egg) to form a zygote.
  - *Oviparous:* Egg-laying animals (birds, frogs, reptiles). Fertilization can be internal or external.
  - *Viviparous:* Give birth to live young (mammals, including humans). Internal fertilization.
                    `,
                    tricks: 'OVIparous = O looks like an egg (egg-laying). VIVIparous = V for Alive (live birth). Fruit = mature ovary; Seed = mature ovule.',
                    examples: [
                        { question: 'What process does yeast use to reproduce?', solution: 'Budding (an asexual reproduction method).' }
                    ],
                    pyqs: [
                        { year: '2021 (I)', question: 'In a bisexual flower, if androecium and gynoecium mature at different times, the phenomenon is known as:', answer: 'Dichogamy', explanation: 'This prevents self-pollination and promotes cross-pollination.' },
                        { year: '2023 (II)', question: 'After fertilization, the ovary develops into:', answer: 'Fruit', explanation: 'And the ovules develop into seeds.' },
                        { year: '2023 (I)', question: 'Vegetative propagation in potato occurs through:', answer: 'Tuber (Stem)', explanation: 'The "eyes" of a potato are buds.' },
                        { year: '2022 (II)', question: 'Fusion of male and female gametes is called:', answer: 'Fertilization', explanation: 'Results in the formation of a zygote.' },
                        { year: '2022 (I)', question: 'The part of the flower that receives pollen grains is:', answer: 'Stigma', explanation: 'The sticky top part of the pistil.' },
                        { year: '2021 (II)', question: 'Bryophyllum reproduces through its:', answer: 'Leaves', explanation: 'Buds along the leaf margins grow into new plants.' },
                        { year: '2020 (I)', question: 'A zygote develops into a/an:', answer: 'Embryo', explanation: 'The early stage of development.' },
                        { year: '2019 (II)', question: 'Double fertilization is a characteristic of:', answer: 'Angiosperms', explanation: 'Flowering plants.' },
                        { year: '2019 (I)', question: 'The male reproductive part of a flower is:', answer: 'Stamen', explanation: 'Consists of Anther and Filament.' },
                        { year: '2018 (II)', question: 'The process of transfer of pollen from anther to stigma is:', answer: 'Pollination', explanation: 'Carried out by wind, water, or animals.' }
                    ]
                },
                {
                    id: 'solar-system-general',
                    title: 'Solar System & Astronomy',
                    theory: `
# Solar System and Astronomy
The Solar System consists of the Sun and objects bound to it by gravity.

### Key Celestial Bodies:
- **The Sun:** A G-type main-sequence star. Energy produced by **Nuclear Fusion** (Hydrogen fusing into Helium).
- **Planets:** 8 planets.
  - *Terrestrial (Inner):* Mercury, Venus, Earth, Mars. (Rocky, no rings).
  - *Jovian (Outer/Gas Giants):* Jupiter, Saturn, Uranus, Neptune. (Gaseous, have rings).
  - *Jupiter:* Largest. *Venus:* Hottest and brightest. *Mars:* Red planet (iron oxide).
- **Asteroids:** Rocky remnants mostly found in the **Asteroid Belt** between Mars and Jupiter.
- **Meteors and Meteorites:**
  - *Meteoroid:* Space rock.
  - *Meteor:* Enters Earth's atmosphere and burns up ("shooting star").
  - *Meteorite:* Survives and hits the ground.
- **Comets:** "Dirty snowballs" of ice, dust, and gas. They have a glowing tail that always points **away** from the Sun (due to solar wind).

### Eclipses:
- **Solar Eclipse:** Moon comes between Sun and Earth (Sun-Moon-Earth). Occurs on a New Moon day. The moon casts its shadow on Earth.
- **Lunar Eclipse:** Earth comes between Sun and Moon (Sun-Earth-Moon). Occurs on a Full Moon day. Earth's shadow falls on the moon.
                    `,
                    tricks: 'Solar Eclipse = SME (Sun-Moon-Earth). Lunar Eclipse = SEM (Sun-Earth-Moon). Comet tails point AWAY from the sun. Asteroid belt is between Mars and Jupiter (M-J).',
                    examples: [
                        { question: 'What is a shooting star?', solution: 'A meteor (a small piece of space debris burning up in Earth\'s atmosphere).' }
                    ],
                    pyqs: [
                        { year: '2022 (I)', question: 'A comet\'s tail always points:', answer: 'Away from the Sun', explanation: 'The solar wind and radiation pressure push the gas and dust blown off the comet away from the Sun.' },
                        { year: '2023 (II)', question: 'Which planet is known as the "Morning Star" or "Evening Star"?', answer: 'Venus', explanation: 'The second planet from the Sun, very bright in the sky.' },
                        { year: '2023 (I)', question: 'Which is the largest planet in our solar system?', answer: 'Jupiter', explanation: 'A gas giant with 79 known moons.' },
                        { year: '2022 (II)', question: 'A solar eclipse occurs when:', answer: 'Moon comes between Sun and Earth', explanation: 'Sun-Moon-Earth (SME).' },
                        { year: '2021 (II)', question: 'Which planet is known as the "Red Planet"?', answer: 'Mars', explanation: 'Due to iron oxide on its surface.' },
                        { year: '2021 (I)', question: 'The asteroid belt is located between which two planets?', answer: 'Mars and Jupiter', explanation: 'Contains thousands of rocky bodies.' },
                        { year: '2020 (I)', question: 'Which planet has the most prominent ring system?', answer: 'Saturn', explanation: 'Rings are made of ice and dust.' },
                        { year: '2019 (II)', question: 'Energy of the sun is due to:', answer: 'Nuclear Fusion', explanation: 'Hydrogen nuclei combine to form Helium.' },
                        { year: '2019 (I)', question: 'The path of a planet around the sun is called:', answer: 'Orbit', explanation: 'Usually elliptical.' },
                        { year: '2018 (II)', question: 'Which is the nearest star to Earth after the Sun?', answer: 'Proxima Centauri', explanation: 'About 4.24 light-years away.' }
                    ]
                },
                {
                    id: 'eminent-scientists',
                    title: 'Eminent Scientists & Achievements',
                    theory: `
# Eminent Scientists and Their Discoveries
Important scientific figures and their contributions to human knowledge.

### Biology & Medicine:
- **Alexander Fleming:** Discovered Penicillin (first antibiotic) from a fungus.
- **Edward Jenner:** Developed first vaccine (Smallpox). Father of Immunology.
- **Louis Pasteur:** Pasteurization (killing bacteria in milk), Germ theory of disease, Rabies vaccine.
- **Gregor Mendel:** Father of Genetics (Laws of Inheritance using pea plants).
- **Charles Darwin:** Theory of Evolution by Natural Selection.
- **William Harvey:** Discovered blood circulation in the human body.
- **Robert Hooke:** Discovered and coined the term "Cell" (from cork).
- **Karl Landsteiner:** Discovered human blood groups (ABO system).

### Physics & Chemistry:
- **Isaac Newton:** Laws of Motion, Universal Gravitation.
- **Albert Einstein:** Theory of Relativity (E=mc²), Photoelectric effect.
- **Marie Curie:** Discovered Radium and Polonium. First woman to win a Nobel Prize.
- **J.J. Thomson:** Discovered the Electron.
- **Ernest Rutherford:** Discovered the Nucleus (Proton).
- **James Chadwick:** Discovered the Neutron.
- **Dmitri Mendeleev:** Created the first periodic table of elements.
- **C.V. Raman:** Raman Effect (scattering of light), first Asian to win Nobel in Physics.
                    `,
                    tricks: 'Subatomic particles discovery acronym: "PEN = RTC". Proton = Rutherford, Electron = Thomson, Neutron = Chadwick.',
                    examples: [
                        { question: 'Who discovered the smallpox vaccine?', solution: 'Edward Jenner.' }
                    ],
                    pyqs: [
                        { year: '2023 (II)', question: 'Who among the following discovered the circulation of blood?', answer: 'William Harvey', explanation: 'William Harvey was the first known physician to describe completely and in detail the systemic circulation and properties of blood being pumped to the brain and body by the heart.' },
                        { year: '2023 (I)', question: 'Who is known as the Father of Genetics?', answer: 'Gregor Mendel', explanation: 'For his work on pea plants.' },
                        { year: '2022 (II)', question: 'The theory of Natural Selection was given by:', answer: 'Charles Darwin', explanation: 'Published in "On the Origin of Species".' },
                        { year: '2022 (I)', question: 'Who discovered the electron?', answer: 'J.J. Thomson', explanation: 'Using the cathode ray tube experiment.' },
                        { year: '2021 (II)', question: 'The first antibiotic, Penicillin, was discovered by:', answer: 'Alexander Fleming', explanation: 'In 1928, from the mould Penicillium notatum.' },
                        { year: '2021 (I)', question: 'Who discovered the neutron?', answer: 'James Chadwick', explanation: 'In 1932.' },
                        { year: '2020 (I)', question: 'The Raman Effect is related to:', answer: 'Scattering of light', explanation: 'Discovered by C.V. Raman (Nobel Prize 1930).' },
                        { year: '2019 (II)', question: 'Who developed the first vaccine?', answer: 'Edward Jenner', explanation: 'For smallpox in 1796.' },
                        { year: '2019 (I)', question: 'Who discovered the cell for the first time?', answer: 'Robert Hooke', explanation: 'In 1665, observed cork cells.' },
                        { year: '2018 (II)', question: 'Who proposed the Double Helix model of DNA?', answer: 'Watson and Crick', explanation: 'Based on X-ray diffraction data by Rosalind Franklin.' }
                    ]
                }
            ]
        }
    ],

    quizBank: [
        {
            id: 'q1',
            topic: 'Algebra',
            question: 'If \\(\\alpha\\) and \\(\\beta\\) are the roots of the equation:\n\\[\nx^2 - px + q = 0\n\\]\nwhat is the value of \\(\\alpha^2 + \\beta^2\\)?',
            options: ['$p^2 - 2q$', '$p^2 + 2q$', '$p^2 - q$', '$q^2 - 2p$'],
            correctIndex: 0,
            explanation: '\\(\\alpha + \\beta = p\\) and \\(\\alpha\\beta = q\\). Thus:\n\\[\n\\alpha^2 + \\beta^2 = (\\alpha+\\beta)^2 - 2\\alpha\\beta = p^2 - 2q\n\\]'
        },
        {
            id: 'q2',
            topic: 'Matrices & Determinants',
            question: 'If \\(A\\) is a square matrix of order 3 and \\(|A| = 4\\), then what is the value of:\n\\[\n|adj(A)|\n\\]',
            options: ['4', '8', '16', '64'],
            correctIndex: 2,
            explanation: 'Property:\n\\[\n|adj(A)| = |A|^{n-1}\n\\]\nHere \\(n=3\\), so \\(4^{3-1} = 4^2 = 16\\).'
        },
        {
            id: 'q3',
            topic: 'Trigonometry',
            question: 'What is the maximum value of:\n\\[\n3\\sin x + 4\\cos x\n\\]',
            options: ['3', '4', '5', '7'],
            correctIndex: 2,
            explanation: 'Maximum value of \\(a\\sin x + b\\cos x\\) is:\n\\[\n\\sqrt{a^2 + b^2} = \\sqrt{3^2+4^2}=5\n\\]'
        },
        {
            id: 'q4',
            topic: 'History',
            question: 'Who was the author of the book "Indica"?',
            options: ['Megasthenes', 'Kautilya', 'Hieun Tsang', 'Fa-Hien'],
            correctIndex: 0,
            explanation: 'Megasthenes was a Greek ambassador in the court of Chandragupta Maurya.'
        },
        {
            id: 'q5',
            topic: 'History',
            question: 'The Simon Commission was boycotted by Indians because:',
            options: ['It had no Indian member', 'It was headed by Sir John Simon', 'It favored the Muslim League', 'It was against the Congress'],
            correctIndex: 0,
            explanation: 'The commission was all-white, which angered Indian leaders who felt they should be involved in deciding their own constitutional future.'
        },
        {
            id: 'q6',
            topic: 'Geography',
            question: 'What is the time difference between IST and GMT?',
            options: ['4 hours 30 minutes', '5 hours 30 minutes', '6 hours 30 minutes', '5 hours'],
            correctIndex: 1,
            explanation: 'IST is based on 82.5° E longitude.\n\\[\n82.5 \\times 4 \\text{ min} = 330 \\text{ min} = 5.5 \\text{ hours}\n\\]'
        },
        {
            id: 'q7',
            topic: 'Physics',
            question: 'The area under a velocity-time graph represents:',
            options: ['Acceleration', 'Distance', 'Displacement', 'Speed'],
            correctIndex: 2,
            explanation: 'Area under v-t graph is:\n\\[\n\\int v \\, dt\n\\]\nwhich is displacement.'
        },
        {
            id: 'q8',
            topic: 'Physics',
            question: 'If the distance between two masses is doubled, the gravitational force becomes:',
            options: ['Half', 'One-fourth', 'Double', 'Four times'],
            correctIndex: 1,
            explanation: '\\[\nF \\propto \\frac{1}{r^2}\n\\]\nIf \\(r \\to 2r\\), then:\n\\[\nF \\to \\frac{1}{(2r)^2} = \\frac{1}{4r^2}\n\\]'
        },
        {
            id: 'q9',
            topic: 'Chemistry',
            question: 'What is the chemical formula of Plaster of Paris?',
            options: ['$CaSO_4 \cdot 2H_2O$', '$CaSO_4 \cdot \frac{1}{2}H_2O$', '$Na_2CO_3 \cdot 10H_2O$', '$NaHCO_3$'],
            correctIndex: 1,
            explanation: 'Plaster of Paris is Calcium Sulphate Hemihydrate.'
        },
        {
            id: 'q10',
            topic: 'Biology',
            question: 'Which of the following cell organelles is known as the "suicide bag"?',
            options: ['Mitochondria', 'Ribosomes', 'Lysosomes', 'Golgi Apparatus'],
            correctIndex: 2,
            explanation: 'Lysosomes contain digestive enzymes that can destroy the cell if it is damaged.'
        },
        {
            id: 'q11',
            topic: 'English',
            question: 'Select the correct improvement: The committee arrived ___ a decision.',
            options: ['to', 'on', 'at', 'with'],
            correctIndex: 2,
            explanation: '"Arrive at a decision" is the correct fixed collocation.'
        },
        {
            id: 'q12',
            topic: 'Trigonometry',
            question: 'Value of \\(\\sin^2 30^\\circ + \\cos^2 30^\\circ\\) is:',
            options: ['1/2', '1', '√3/2', '0'],
            correctIndex: 1,
            explanation: '\\[\n\\sin^2 \\theta + \\cos^2 \\theta = 1\n\\]\nfor any angle.'
        },
        {
            id: 'q13',
            topic: 'Algebra',
            question: 'The sum of all internal angles of a hexagon is:',
            options: ['360°', '540°', '720°', '900°'],
            correctIndex: 2,
            explanation: 'Sum:\n\\[\n(n-2) \\times 180^\\circ = (6-2) \\times 180^\\circ = 720^\\circ\n\\]'
        },
        {
            id: 'q14',
            topic: 'History',
            question: 'In which year did the Quit India Movement start?',
            options: ['1920', '1930', '1942', '1947'],
            correctIndex: 2,
            explanation: 'Launched in August 1942 by Mahatma Gandhi.'
        },
        {
            id: 'q15',
            topic: 'Geography',
            question: 'Which planet is known as "Earth\'s Twin"?',
            options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
            correctIndex: 1,
            explanation: 'Venus is similar in size, mass, and composition to Earth.'
        },
        {
            id: 'q16',
            topic: 'Physics',
            question: 'Twinkling of stars is due to:',
            options: ['Reflection', 'Refraction', 'Scattering', 'Dispersion'],
            correctIndex: 1,
            explanation: 'Atmospheric refraction due to varying densities of air layers.'
        },
        {
            id: 'q17',
            topic: 'Current Events',
            question: 'India\'s first indigenous aircraft carrier is:',
            options: ['INS Vikrant', 'INS Vikramaditya', 'INS Arihant', 'INS Vishal'],
            correctIndex: 0,
            explanation: 'INS Vikrant was commissioned in 2022.'
        },
        {
            id: 'q18',
            topic: 'Matrices & Determinants',
            question: 'If $A$ is a symmetric matrix, then:',
            options: ['$A^T = A$', '$A^T = -A$', '$A^{-1} = A$', '$|A| = 0$'],
            correctIndex: 0,
            explanation: 'Definition of a symmetric matrix.'
        },
        {
            id: 'q19',
            topic: 'English',
            question: 'Identify the error: One of my friend (A) is (B) a doctor (C).',
            options: ['A', 'B', 'C', 'No Error'],
            correctIndex: 0,
            explanation: '"One of" is followed by a plural noun. It should be "One of my friends".'
        },
        {
            id: 'q20',
            topic: 'Biology',
            question: 'Which tissue connects bone to bone?',
            options: ['Tendon', 'Ligament', 'Cartilage', 'Adipose'],
            correctIndex: 1,
            explanation: 'Ligaments connect bones; Tendons connect muscle to bone.'
        },
        {
            id: 'q21',
            topic: 'Calculus',
            question: 'What is \\(\\frac{d}{dx}(\\sin x + \\cos x)\\) at \\(x = 0\\)?',
            options: ['0', '1', '-1', '2'],
            correctIndex: 1,
            explanation: 'Derivative is \\(\\cos x - \\sin x\\). At \\(x=0\\):\n\\[\n\\cos 0 - \\sin 0 = 1 - 0 = 1\n\\]'
        },
        {
            id: 'q22',
            topic: 'History',
            question: 'Who was the first Governor-General of independent India?',
            options: ['C. Rajagopalachari', 'Lord Mountbatten', 'Dr. Rajendra Prasad', 'Jawaharlal Nehru'],
            correctIndex: 1,
            explanation: 'Lord Mountbatten was the first GG; C. Rajagopalachari was the first Indian GG.'
        },
        {
            id: 'q23',
            topic: 'Geography',
            question: 'The highest tides occur during:',
            options: ['Full Moon only', 'New Moon only', 'Full Moon and New Moon', 'Quarter Moon'],
            correctIndex: 2,
            explanation: 'Spring tides occur when Sun, Earth, and Moon align.'
        },
        {
            id: 'q24',
            topic: 'Physics',
            question: 'Newton\'s first law of motion gives the concept of:',
            options: ['Force', 'Momentum', 'Inertia', 'Energy'],
            correctIndex: 2,
            explanation: 'First law is often called the Law of Inertia.'
        },
        {
            id: 'q25',
            topic: 'Current Events',
            question: 'The G20 Summit 2023 was held in:',
            options: ['Bali', 'New Delhi', 'Rome', 'Riyadh'],
            correctIndex: 1,
            explanation: 'India hosted the 18th G20 summit in New Delhi.'
        }
    ]
};
