// Initialize Lucide Icons
lucide.createIcons();

// --- INTERACTIVE EFFECTS ---

// 3D Tilt effect on hover for .tilt-card elements
document.addEventListener('mousemove', (e) => {
    // Skip on touch devices - touch fires fake mousemove events causing bugs
    if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) return;
    document.querySelectorAll('.tilt-card').forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -4;
            const rotateY = ((x - centerX) / centerX) * 4;
            card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        }
    });
});
document.addEventListener('mouseleave', () => {
    document.querySelectorAll('.tilt-card').forEach(card => {
        card.style.transform = '';
    });
}, true);
document.addEventListener('mouseout', (e) => {
    if (e.target.closest && e.target.closest('.tilt-card')) {
        const card = e.target.closest('.tilt-card');
        if (!card.contains(e.relatedTarget)) {
            card.style.transform = '';
        }
    }
});

// Ripple position tracking on nav buttons
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        btn.style.setProperty('--ripple-x', ((e.clientX - rect.left) / rect.width * 100) + '%');
        btn.style.setProperty('--ripple-y', ((e.clientY - rect.top) / rect.height * 100) + '%');
    });
});

// Confetti burst function
function launchConfetti() {
    const colors = ['#6366f1', '#ec4899', '#f59e0b', '#10b981', '#3b82f6', '#f43f5e'];
    const container = document.body;
    for (let i = 0; i < 60; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.left = Math.random() * 100 + 'vw';
        piece.style.background = colors[Math.floor(Math.random() * colors.length)];
        piece.style.animationDuration = (2 + Math.random() * 2) + 's';
        piece.style.animationDelay = Math.random() * 0.5 + 's';
        piece.style.width = (6 + Math.random() * 8) + 'px';
        piece.style.height = (6 + Math.random() * 8) + 'px';
        piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
        container.appendChild(piece);
        setTimeout(() => piece.remove(), 4000);
    }
}

// State Management
const state = {
    currentView: 'dashboard',
    activeTopic: null,
    quizScore: 0,
    quizzesCompleted: 0,
    quizTimer: null
};

// --- Navigation Logic ---
const navButtons = document.querySelectorAll('.nav-btn');
const views = document.querySelectorAll('.view-section');

function navigateTo(targetView) {
    navButtons.forEach(b => b.classList.remove('active-nav'));
    const activeBtn = document.querySelector(`.nav-btn[data-target="${targetView}"]`);
    if (activeBtn) activeBtn.classList.add('active-nav');
    views.forEach(v => {
        if (v.id === targetView) {
            v.classList.remove('hidden');
            v.classList.add('active');
        } else {
            v.classList.add('hidden');
            v.classList.remove('active');
        }
    });
    if (window.innerWidth < 768) {
        document.querySelector('aside').classList.add('hidden');
    }
    if (targetView === 'dashboard') initCharts();
    if (targetView === 'profile') renderProfilePage();
}

// Simple click handler - touch-action: manipulation in CSS removes 300ms delay
function addTapListener(element, handler) {
    element.addEventListener('click', (e) => {
        e.stopPropagation();
        handler(e);
    });
}

navButtons.forEach(btn => {
    addTapListener(btn, (e) => {
        if (e.currentTarget.closest('aside') && e.currentTarget.dataset.target) {
            navigateTo(e.currentTarget.dataset.target);
        }
    });
});

// Mobile menu toggle
document.getElementById('mobile-menu-btn').addEventListener('click', () => {
    const sidebar = document.querySelector('aside');
    sidebar.classList.toggle('hidden');
    sidebar.classList.toggle('absolute');
    sidebar.classList.toggle('z-50');
    sidebar.classList.toggle('bg-white');
    sidebar.classList.toggle('w-72');
    sidebar.classList.toggle('h-full');
});

// --- Charts ---
let weightageChartInstance = null;
let diffChartInstance = null;
let currentWeightageType = 'mathWeightage';

function initCharts() {
    const ctxWeightage = document.getElementById('weightage-chart').getContext('2d');
    const ctxDifficulty = document.getElementById('difficulty-chart').getContext('2d');

    Chart.defaults.font.family = "'Inter', sans-serif";
    Chart.defaults.color = '#64748b';

    if (weightageChartInstance) weightageChartInstance.destroy();
    if (diffChartInstance) diffChartInstance.destroy();

    weightageChartInstance = new Chart(ctxWeightage, {
        type: 'doughnut',
        data: {
            labels: ndaData.trends.mathWeightage.labels,
            datasets: [{
                data: ndaData.trends.mathWeightage.data,
                backgroundColor: ['#6366f1','#8b5cf6','#ec4899','#f43f5e','#f59e0b','#10b981'],
                borderWidth: 0,
                hoverOffset: 15
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%',
            plugins: {
                legend: { position: 'right', labels: { usePointStyle: true, padding: 20, font: { size: 12 } } },
                tooltip: {
                    backgroundColor: 'rgba(15, 23, 42, 0.9)',
                    titleFont: { size: 14, family: "'Outfit', sans-serif" },
                    bodyFont: { size: 13 }, padding: 12, cornerRadius: 8,
                    callbacks: { label: function(context) { return ` ${context.label}: ${context.raw} Questions`; } }
                }
            },
            animation: { animateScale: true, animateRotate: true }
        }
    });

    diffChartInstance = new Chart(ctxDifficulty, {
        type: 'line',
        data: {
            labels: ndaData.trends.difficulty.years,
            datasets: [
                {
                    label: 'Math Difficulty Index',
                    data: ndaData.trends.difficulty.mathData,
                    borderColor: '#ef4444', backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    borderWidth: 3, pointBackgroundColor: '#ffffff', pointBorderColor: '#ef4444',
                    pointBorderWidth: 2, pointRadius: 5, pointHoverRadius: 8, fill: true, tension: 0.4
                },
                {
                    label: 'GAT Difficulty Index',
                    data: ndaData.trends.difficulty.gatData,
                    borderColor: '#10b981', backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    borderWidth: 3, pointBackgroundColor: '#ffffff', pointBorderColor: '#10b981',
                    pointBorderWidth: 2, pointRadius: 5, pointHoverRadius: 8, fill: true, tension: 0.4
                }
            ]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            plugins: {
                legend: { display: true, position: 'top' },
                tooltip: {
                    backgroundColor: 'rgba(15, 23, 42, 0.9)',
                    titleFont: { size: 14, family: "'Outfit', sans-serif" },
                    bodyFont: { size: 13 }, padding: 12, cornerRadius: 8,
                    callbacks: { label: function(context) {
                        let label = `Index Score: ${context.raw}`;
                        if(context.label.includes('Proj')) label += ' (Estimated)';
                        return label;
                    }}
                }
            },
            scales: {
                y: { beginAtZero: false, min: 40, max: 100, grid: { color: '#f1f5f9', drawBorder: false }, ticks: { padding: 10 } },
                x: { grid: { display: false, drawBorder: false }, ticks: { padding: 10 } }
            },
            interaction: { intersect: false, mode: 'index' }
        }
    });

    const weightageToggle = document.getElementById('weightage-toggle');
    if (weightageToggle) {
        weightageToggle.addEventListener('change', (e) => {
            const selectedType = e.target.value;
            if (ndaData.trends[selectedType] && weightageChartInstance) {
                weightageChartInstance.data.labels = ndaData.trends[selectedType].labels;
                weightageChartInstance.data.datasets[0].data = ndaData.trends[selectedType].data;
                weightageChartInstance.update();
            }
        });
    }
}

initCharts();

// --- Topics & Theory Logic ---
const topicsListContainer = document.getElementById('topics-list-container');
const theoryContent = document.getElementById('theory-content');

let currentSubjectFilter = 'Mathematics';

function renderTopicsList() {
    topicsListContainer.innerHTML = '';
    const filteredTopics = ndaData.topics.filter(t => t.subject === currentSubjectFilter);

    if (filteredTopics.length === 0) {
        topicsListContainer.innerHTML = '<div class="p-4 text-slate-500 text-sm text-center">No topics available.</div>';
    }

    filteredTopics.forEach((topic, index) => {
        const div = document.createElement('div');
        div.className = `topic-item bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden mb-3`;
        div.dataset.id = topic.id;

        let difficultyColor = 'text-green-600 bg-green-50';
        if(topic.difficulty === 'Medium') difficultyColor = 'text-amber-600 bg-amber-50';
        if(topic.difficulty === 'Hard') difficultyColor = 'text-red-600 bg-red-50';

        const header = document.createElement('div');
        header.className = `p-4 cursor-pointer flex justify-between items-center hover:bg-slate-50 transition-colors topic-header ${index === 0 ? 'bg-indigo-50 border-l-4 border-indigo-500' : ''}`;
        header.innerHTML = `
            <div>
                <div class="flex items-center gap-2 mb-1">
                    <h4 class="font-bold text-slate-800">${topic.title}</h4>
                    <span class="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded ${difficultyColor}">${topic.difficulty}</span>
                </div>
                <p class="text-xs text-slate-500 line-clamp-1">${topic.weightage}</p>
            </div>
            <i data-lucide="${index === 0 ? 'chevron-down' : 'chevron-right'}" class="w-4 h-4 text-slate-400 transition-transform"></i>
        `;

        const subtopicsContainer = document.createElement('div');
        subtopicsContainer.className = `subtopics-container bg-slate-50/50 border-t border-slate-100 ${index === 0 ? 'block' : 'hidden'}`;

        if (topic.subTopics && topic.subTopics.length > 0) {
            topic.subTopics.forEach((sub, sIdx) => {
                const subDiv = document.createElement('div');
                const isSubActive = index === 0 && sIdx === 0;
                subDiv.className = `p-3 pl-5 border-b border-slate-100 last:border-0 text-sm cursor-pointer hover:bg-white hover:text-indigo-600 transition-colors flex items-center gap-2 subtopic-item ${isSubActive ? 'text-indigo-600 font-semibold bg-white' : 'text-slate-600'}`;
                subDiv.dataset.topicId = topic.id;
                subDiv.dataset.subId = sub.id;
                subDiv.innerHTML = `<i data-lucide="${isSubActive ? 'book-open' : 'book'}" class="w-3.5 h-3.5 ${isSubActive ? 'text-indigo-500' : 'text-slate-400'}"></i> <span class="flex-1 truncate">${sub.title}</span>`;

                addTapListener(subDiv, (e) => {
                    document.querySelectorAll('.subtopic-item').forEach(el => {
                        el.classList.remove('text-indigo-600', 'font-semibold', 'bg-white');
                        el.classList.add('text-slate-600');
                        const icon = el.querySelector('i');
                        if (icon) { icon.setAttribute('data-lucide', 'book'); icon.classList.remove('text-indigo-500'); icon.classList.add('text-slate-400'); }
                    });
                    subDiv.classList.add('text-indigo-600', 'font-semibold', 'bg-white');
                    subDiv.classList.remove('text-slate-600');
                    const activeIcon = subDiv.querySelector('i');
                    if(activeIcon) { activeIcon.setAttribute('data-lucide', 'book-open'); activeIcon.classList.add('text-indigo-500'); activeIcon.classList.remove('text-slate-400'); }
                    lucide.createIcons();
                    renderSubTheory(topic.id, sub.id);
                });

                subtopicsContainer.appendChild(subDiv);
            });
        }

        addTapListener(header, () => {
            const isHidden = subtopicsContainer.classList.contains('hidden');
            document.querySelectorAll('.subtopics-container').forEach(c => c.classList.add('hidden'));
            document.querySelectorAll('.topic-header').forEach(h => {
                h.classList.remove('bg-indigo-50', 'border-l-4', 'border-indigo-500');
                const i = h.querySelector('i[data-lucide]');
                if(i) i.setAttribute('data-lucide', 'chevron-right');
            });
            if (isHidden) {
                subtopicsContainer.classList.remove('hidden');
                header.classList.add('bg-indigo-50', 'border-l-4', 'border-indigo-500');
                const i = header.querySelector('i[data-lucide]');
                if(i) i.setAttribute('data-lucide', 'chevron-down');
            }
            lucide.createIcons();
        });

        div.appendChild(header);
        div.appendChild(subtopicsContainer);
        topicsListContainer.appendChild(div);
    });

    if(filteredTopics.length > 0 && filteredTopics[0].subTopics && filteredTopics[0].subTopics.length > 0) {
        renderSubTheory(filteredTopics[0].id, filteredTopics[0].subTopics[0].id);
    } else {
        document.getElementById('theory-title').textContent = 'Select a Topic';
        document.getElementById('theory-weightage').innerHTML = '<i data-lucide="target" class="w-4 h-4 inline mr-1 text-slate-400"></i> Weightage: --';
        document.getElementById('theory-difficulty').innerHTML = '<i data-lucide="activity" class="w-4 h-4 inline mr-1 text-slate-400"></i> Difficulty: --';
        document.getElementById('theory-content').innerHTML = '<div class="h-full flex flex-col items-center justify-center text-slate-400"><i data-lucide="book-open" class="w-16 h-16 mb-4 opacity-50"></i><p>Select a subtopic from the left to read theory.</p></div>';
        lucide.createIcons();
    }
}

const tabMath = document.getElementById('tab-math');
const tabGat = document.getElementById('tab-gat');

if (tabMath && tabGat) {
    function setActiveTab(activeBtn, inactiveBtn, subject) {
        activeBtn.classList.remove('text-slate-500', 'hover:text-slate-700');
        activeBtn.classList.add('bg-white', 'text-indigo-600', 'shadow-sm');
        inactiveBtn.classList.remove('bg-white', 'text-indigo-600', 'shadow-sm');
        inactiveBtn.classList.add('text-slate-500', 'hover:text-slate-700', 'bg-transparent');
        currentSubjectFilter = subject;
        renderTopicsList();
    }
    tabMath.addEventListener('click', () => setActiveTab(tabMath, tabGat, 'Mathematics'));
    tabGat.addEventListener('click', () => setActiveTab(tabGat, tabMath, 'GAT'));
}

function renderSubTheory(topicId, subId) {
    const topic = ndaData.topics.find(t => t.id === topicId);
    if (!topic) return;
    const subTopic = topic.subTopics.find(s => s.id === subId);
    if (!subTopic) return;

    document.getElementById('theory-title').textContent = `${topic.title}`;
    document.getElementById('theory-weightage').innerHTML = `<i data-lucide="target" class="w-4 h-4 inline mr-1 text-slate-400"></i> Sector Weightage: ${topic.weightage}`;
    document.getElementById('theory-difficulty').innerHTML = `<i data-lucide="activity" class="w-4 h-4 inline mr-1 text-slate-400"></i> Difficulty: ${topic.difficulty}`;
    lucide.createIcons();

    let subHtml = `
        <div class="mb-10 pb-10">
            <h2 class="text-2xl font-bold font-heading text-indigo-900 mb-4 flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                    <i data-lucide="book-open" class="w-5 h-5"></i>
                </div>
                ${subTopic.title}
            </h2>
            <div class="prose max-w-none mb-6 text-slate-700">${formatMath(subTopic.theory)}</div>`;

    if (subTopic.tricks) {
        subHtml += `
            <div class="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6 shadow-sm">
                <h4 class="font-bold text-amber-800 flex items-center gap-2 mb-2"><i data-lucide="zap" class="w-5 h-5 text-amber-500"></i> Pro Secret / Shortcut</h4>
                <p class="text-amber-900 text-sm">${formatMath(subTopic.tricks)}</p>
            </div>`;
    }

    if (subTopic.examples && subTopic.examples.length > 0) {
        subHtml += `<h4 class="font-bold text-slate-800 mt-6 mb-3 flex items-center gap-2"><i data-lucide="check-square" class="w-4 h-4 text-emerald-500"></i> Key Examples</h4><div class="space-y-4 mb-6">`;
        subTopic.examples.forEach((ex, eIdx) => {
            subHtml += `
                <div class="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
                    <p class="font-semibold text-slate-700 mb-2">Q${eIdx+1}: ${formatMath(ex.question)}</p>
                    <div class="text-sm text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
                        <strong class="text-slate-800">Solution:</strong> ${formatMath(ex.solution)}
                    </div>
                </div>`;
        });
        subHtml += `</div>`;
    }

    if (subTopic.pyqs && subTopic.pyqs.length > 0) {
        subHtml += `
            <button class="view-pyq-btn mt-2 bg-white border border-indigo-200 text-indigo-700 font-medium px-5 py-2.5 rounded-xl hover:bg-indigo-50 hover:border-indigo-300 transition-colors shadow-sm flex items-center gap-2" data-topic-id="${topic.id}" data-sub-id="${subTopic.id}">
                <i data-lucide="history" class="w-4 h-4"></i> View Past Year Questions (PYQs)
            </button>`;
    }

    subHtml += `</div>`;
    theoryContent.innerHTML = subHtml;
    lucide.createIcons();
    if (window.MathJax) MathJax.typesetPromise([theoryContent]).catch((err) => console.log(err.message));

    document.querySelectorAll('.view-pyq-btn').forEach(btn => {
        addTapListener(btn, (e) => {
            openPyqModal(btn.dataset.topicId, btn.dataset.subId);
        });
    });
}

function formatMath(text) {
    if(!text) return '';
    return text
        .replace(/#(.*)/g, '<h2>$1</h2>')
        .replace(/##(.*)/g, '<h3>$1</h3>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n\n/g, '<br><br>');
}

const pyqModal = document.getElementById('pyq-modal');
const closePyqModal = document.getElementById('close-pyq-modal');

addTapListener(closePyqModal, () => { pyqModal.classList.add('hidden'); });
pyqModal.addEventListener('click', (e) => { if(e.target === pyqModal) pyqModal.classList.add('hidden'); });

function openPyqModal(topicId, subId) {
    const topic = ndaData.topics.find(t => t.id === topicId);
    if (!topic) return;
    const subTopic = topic.subTopics.find(s => s.id === subId);
    if (!subTopic) return;

    document.getElementById('pyq-modal-title').textContent = `${subTopic.title} - PYQs`;
    const contentBox = document.getElementById('pyq-modal-content');
    contentBox.innerHTML = '';

    subTopic.pyqs.forEach((pyq, idx) => {
        contentBox.innerHTML += `
            <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                <div class="flex justify-between items-center mb-3">
                    <span class="text-xs font-bold uppercase tracking-wider bg-indigo-100 text-indigo-700 px-2 py-1 rounded-md">NDA ${pyq.year}</span>
                    <span class="text-slate-400 font-medium text-sm">Q${idx + 1}</span>
                </div>
                <p class="font-semibold text-slate-800 text-lg mb-4">${formatMath(pyq.question)}</p>
                <div class="text-sm bg-emerald-50 border border-emerald-100 p-4 rounded-xl">
                    <p class="font-bold text-emerald-800 mb-2">Answer: <span class="font-mono bg-emerald-100 px-2 py-0.5 rounded">${formatMath(pyq.answer)}</span></p>
                    <p class="text-emerald-700 leading-relaxed"><strong>Explanation:</strong> ${formatMath(pyq.explanation)}</p>
                </div>
            </div>`;
    });

    pyqModal.classList.remove('hidden');
    lucide.createIcons();
    if (window.MathJax) MathJax.typesetPromise([contentBox]).catch((err) => console.log(err.message));
}

renderTopicsList();

// --- Quiz Logic ---
let currentQuizQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];

const setupView = document.getElementById('quiz-setup');
const activeQuizView = document.getElementById('active-quiz');
const startQuizBtn = document.getElementById('start-quiz-btn');

const quizTypeRadios = document.querySelectorAll('input[name="quiz-type"]');
const topicSelectionContainer = document.getElementById('topic-selection-container');

function updateQuizModeUI() {
    quizTypeRadios.forEach(r => {
        const label = r.closest('label');
        const outerCircle = label.querySelector('.outer-circle');
        const innerCircle = label.querySelector('.inner-circle');
        const descText = label.querySelector('.desc-text');
        if (r.checked) {
            label.classList.add('border-indigo-200', 'bg-indigo-50', 'text-indigo-700');
            label.classList.remove('border-slate-200', 'hover:border-slate-300', 'bg-white', 'text-slate-700');
            outerCircle.classList.add('border-indigo-600');
            outerCircle.classList.remove('border-slate-300');
            innerCircle.classList.remove('hidden');
            innerCircle.classList.add('block');
            descText.classList.remove('text-slate-500');
            descText.classList.add('text-indigo-600', 'opacity-80');
            if (r.value === 'topic') { topicSelectionContainer.classList.remove('hidden'); topicSelectionContainer.classList.add('block'); }
            else { topicSelectionContainer.classList.remove('block'); topicSelectionContainer.classList.add('hidden'); }
        } else {
            label.classList.remove('border-indigo-200', 'bg-indigo-50', 'text-indigo-700');
            label.classList.add('border-slate-200', 'hover:border-slate-300', 'bg-white', 'text-slate-700');
            outerCircle.classList.remove('border-indigo-600');
            outerCircle.classList.add('border-slate-300');
            innerCircle.classList.remove('block');
            innerCircle.classList.add('hidden');
            descText.classList.add('text-slate-500');
            descText.classList.remove('text-indigo-600', 'opacity-80');
        }
    });
}

quizTypeRadios.forEach(radio => { radio.addEventListener('change', updateQuizModeUI); });
updateQuizModeUI();

addTapListener(startQuizBtn, () => {
    const quizType = document.querySelector('input[name="quiz-type"]:checked').value;
    state.quizType = quizType;
    const topicSelect = document.getElementById('quiz-topic').value;
    currentQuestionIndex = 0;

    if (quizType === 'topic') {
        let pool = topicSelect === 'all' ? [...ndaData.quizBank] : ndaData.quizBank.filter(q => q.topic === topicSelect);
        if (pool.length === 0) { alert("Not enough questions for this topic yet!"); return; }
        for (let i = pool.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [pool[i], pool[j]] = [pool[j], pool[i]];
        }
        currentQuizQuestions = pool.slice(0, Math.min(20, pool.length));
        document.getElementById('quiz-mode-badge').textContent = 'Practice Mode - ' + (topicSelect === 'all' ? 'Mix' : topicSelect);
        document.getElementById('quiz-mode-badge').className = 'text-xs font-bold uppercase tracking-wider text-indigo-500 bg-indigo-50 px-2 py-1 rounded';
        document.getElementById('quiz-nav-sidebar').classList.remove('hidden');
        document.getElementById('quiz-nav-sidebar').classList.add('lg:block');
        document.getElementById('timer-container').classList.add('hidden');
        document.getElementById('quiz-main-card').classList.remove('mx-auto', 'max-w-3xl');
    } else if (quizType === 'math-mock') {
        const mathTopicsList = ['Algebra','Matrices & Determinants','Trigonometry','Calculus','Statistics & Probability','Analytical Geometry (2D & 3D)','Vector Algebra'];
        const src = ndaData.quizBank.filter(q => mathTopicsList.includes(q.topic));
        currentQuizQuestions = generateMockQuestions(src.length > 0 ? src : ndaData.quizBank, 120);
        document.getElementById('quiz-mode-badge').textContent = 'NDA Math Mock (Paper I)';
        document.getElementById('quiz-mode-badge').className = 'text-xs font-bold uppercase tracking-wider text-blue-500 bg-blue-50 px-2 py-1 rounded';
        setupMockUI(150 * 60);
    } else if (quizType === 'gat-mock') {
        const mathTopicsList = ['Algebra','Matrices & Determinants','Trigonometry','Calculus','Statistics & Probability','Analytical Geometry (2D & 3D)','Vector Algebra'];
        const src = ndaData.quizBank.filter(q => !mathTopicsList.includes(q.topic));
        currentQuizQuestions = generateMockQuestions(src.length > 0 ? src : ndaData.quizBank, 150);
        document.getElementById('quiz-mode-badge').textContent = 'NDA GAT Mock (Paper II)';
        document.getElementById('quiz-mode-badge').className = 'text-xs font-bold uppercase tracking-wider text-rose-500 bg-rose-50 px-2 py-1 rounded';
        setupMockUI(150 * 60);
    }

    userAnswers = new Array(currentQuizQuestions.length).fill(null);
    setupView.classList.add('hidden');
    activeQuizView.classList.remove('hidden');
    renderQuizQuestion();
    renderQuestionGrid();
});

function fisherYatesShuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
}

function generateMockQuestions(sourceArray, count) {
    let result = [];
    while (result.length < count) result = result.concat(fisherYatesShuffle(sourceArray));
    return result.slice(0, count);
}

function setupMockUI(durationInSeconds) {
    document.getElementById('quiz-nav-sidebar').classList.remove('hidden');
    document.getElementById('quiz-nav-sidebar').classList.add('lg:block');
    document.getElementById('timer-container').classList.remove('hidden');
    document.getElementById('timer-container').classList.add('flex');
    document.getElementById('quiz-main-card').classList.remove('mx-auto', 'max-w-3xl');
    startTimer(durationInSeconds);
}

function startTimer(seconds) {
    clearInterval(state.quizTimer);
    state.timeRemaining = seconds;
    updateTimerDisplay();
    state.quizTimer = setInterval(() => {
        state.timeRemaining--;
        updateTimerDisplay();
        if (state.timeRemaining <= 0) { clearInterval(state.quizTimer); finishQuiz(); }
    }, 1000);
}

function updateTimerDisplay() {
    const h = Math.floor(state.timeRemaining / 3600);
    const m = Math.floor((state.timeRemaining % 3600) / 60);
    const s = state.timeRemaining % 60;
    const timerElem = document.getElementById('quiz-timer');
    timerElem.textContent = `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    if (state.timeRemaining < 300) { timerElem.classList.remove('text-emerald-400'); timerElem.classList.add('text-rose-500'); }
    else { timerElem.classList.add('text-emerald-400'); timerElem.classList.remove('text-rose-500'); }
}

function renderQuestionGrid() {
    const grid = document.getElementById('question-grid');
    if (!grid) return;
    grid.innerHTML = '';
    currentQuizQuestions.forEach((_, i) => {
        const btn = document.createElement('button');
        let btnClass = 'w-full aspect-square rounded flex items-center justify-center text-xs font-bold transition-all border ';
        if (i === currentQuestionIndex) btnClass += 'bg-indigo-500 text-white border-indigo-600 shadow-md ring-2 ring-indigo-200 ring-offset-1 scale-105 z-10';
        else if (userAnswers[i] !== null) btnClass += 'bg-emerald-100 text-emerald-700 border-emerald-300 hover:bg-emerald-200';
        else btnClass += 'bg-slate-50 text-slate-500 hover:bg-slate-100 border-slate-200';
        btn.className = btnClass;
        btn.textContent = i + 1;
        addTapListener(btn, () => { currentQuestionIndex = i; renderQuizQuestion(); renderQuestionGrid(); });
        grid.appendChild(btn);
    });
}

function renderQuizQuestion() {
    const q = currentQuizQuestions[currentQuestionIndex];
    const isLast = currentQuestionIndex === currentQuizQuestions.length - 1;
    const progress = ((currentQuestionIndex) / currentQuizQuestions.length) * 100;

    let html = `
        <div class="mb-6">
            <div class="flex justify-between text-sm font-medium text-slate-500 mb-2">
                <span>Question ${currentQuestionIndex + 1} of ${currentQuizQuestions.length}</span>
                <span class="text-indigo-600">${q.topic}</span>
            </div>
            <div class="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-6">
                <div class="bg-indigo-500 h-full transition-all duration-300" style="width: ${progress}%"></div>
            </div>
            <h3 class="text-xl font-bold text-slate-800 mb-8">${q.question}</h3>
            <div class="space-y-3" id="options-container">`;

    q.options.forEach((opt, index) => {
        const isSelected = userAnswers[currentQuestionIndex] === index;
        html += `
            <button class="quiz-option w-full text-left p-4 rounded-xl border transition-all ${isSelected ? 'selected border-indigo-500 bg-indigo-50 shadow-sm' : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'} font-medium" data-index="${index}">
                <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded border flex items-center justify-center shrink-0 ${isSelected ? 'bg-indigo-500 border-indigo-600 text-white' : 'bg-slate-100 border-slate-200 text-slate-500'} font-bold">
                        ${String.fromCharCode(65 + index)}
                    </div>
                    <span class="${isSelected ? 'text-indigo-900' : 'text-slate-700'}">${opt}</span>
                </div>
            </button>`;
    });

    html += `
            </div>
        </div>
        <div class="flex justify-between items-center mt-8 pt-6 border-t border-slate-100">
            <button id="prev-btn" class="px-6 py-2.5 rounded-lg text-slate-600 font-medium hover:bg-slate-100 transition-colors ${currentQuestionIndex === 0 ? 'invisible' : ''}">Previous</button>
            <button id="next-submit-btn" class="px-8 py-2.5 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors shadow-sm flex items-center gap-2">
                ${isLast ? 'Final Submit' : 'Next Question <i data-lucide="arrow-right" class="w-4 h-4"></i>'}
            </button>
        </div>`;

    const questionContainer = document.getElementById('quiz-question-content');
    questionContainer.innerHTML = html;
    if (window.MathJax) MathJax.typesetPromise([questionContainer]).catch((err) => console.log(err.message));
    lucide.createIcons();

    document.querySelectorAll('.quiz-option').forEach(btn => {
        addTapListener(btn, () => {
            document.querySelectorAll('.quiz-option').forEach(el => {
                el.classList.remove('selected', 'border-indigo-500', 'bg-indigo-50', 'shadow-sm');
                el.classList.add('border-slate-200', 'hover:border-slate-300', 'hover:bg-slate-50');
                const badge = el.querySelector('.w-8');
                badge.classList.remove('bg-indigo-500', 'border-indigo-600', 'text-white');
                badge.classList.add('bg-slate-100', 'border-slate-200', 'text-slate-500');
                el.querySelector('span:last-child').classList.remove('text-indigo-900');
                el.querySelector('span:last-child').classList.add('text-slate-700');
            });
            btn.classList.add('selected', 'border-indigo-500', 'bg-indigo-50', 'shadow-sm');
            btn.classList.remove('border-slate-200', 'hover:border-slate-300', 'hover:bg-slate-50');
            const activeBadge = btn.querySelector('.w-8');
            activeBadge.classList.add('bg-indigo-500', 'border-indigo-600', 'text-white');
            activeBadge.classList.remove('bg-slate-100', 'border-slate-200', 'text-slate-500');
            btn.querySelector('span:last-child').classList.add('text-indigo-900');
            btn.querySelector('span:last-child').classList.remove('text-slate-700');
            userAnswers[currentQuestionIndex] = parseInt(btn.dataset.index);
            renderQuestionGrid();
        });
    });

    addTapListener(document.getElementById('prev-btn'), () => {
        if(currentQuestionIndex > 0) { currentQuestionIndex--; renderQuizQuestion(); renderQuestionGrid(); }
    });

    addTapListener(document.getElementById('next-submit-btn'), () => {
        if (state.quizType === 'topic' && userAnswers[currentQuestionIndex] === null) {
            alert("Please select an answer to continue the practice.");
            return;
        }
        if (isLast) {
            if (confirm(state.quizType === 'topic' ? "Finish this practice quiz?" : "Are you sure you want to submit the final exam?")) finishQuiz();
        } else {
            currentQuestionIndex++;
            renderQuizQuestion();
            renderQuestionGrid();
        }
    });

    const endEarlyBtn = document.getElementById('end-test-early-btn');
    if (endEarlyBtn) {
        const newBtn = endEarlyBtn.cloneNode(true);
        endEarlyBtn.parentNode.replaceChild(newBtn, endEarlyBtn);
        addTapListener(newBtn, () => {
            if (confirm("Are you sure you want to completely finish this exam?")) finishQuiz();
        });
    }
}

function finishQuiz() {
    clearInterval(state.quizTimer);
    let score = 0, correctCount = 0, incorrectCount = 0, unattemptedCount = 0;
    let posMarks = 1, negMarks = 0, totalMarks = currentQuizQuestions.length;

    if (state.quizType === 'math-mock') { posMarks = 2.5; negMarks = 0.833; totalMarks = 300; }
    else if (state.quizType === 'gat-mock') { posMarks = 4; negMarks = 1.333; totalMarks = 600; }

    currentQuizQuestions.forEach((q, i) => {
        if (userAnswers[i] === null) unattemptedCount++;
        else if (userAnswers[i] === q.correctIndex) { correctCount++; score += posMarks; }
        else { incorrectCount++; score -= negMarks; }
    });

    const finalScore = score.toFixed(2);
    const percentage = Math.round((Math.max(0, finalScore) / totalMarks) * 100);
    state.quizzesCompleted++;
    document.getElementById('dash-quizzes-done').textContent = state.quizzesCompleted;

    const topicLabel = state.quizType === 'topic' ? (document.getElementById('quiz-topic')?.value || 'Mixed Topics') : null;
    document.dispatchEvent(new CustomEvent('defendx:quizFinished', {
        detail: { score: finalScore, totalMarks, correct: correctCount, incorrect: incorrectCount, unattempted: unattemptedCount, quizType: state.quizType, topic: topicLabel }
    }));

    let message = "Keep Practicing!", color = "text-amber-500", messageIcon = "alert-circle";
    if (percentage > 50) { message = "Excellent Preparation! Safe Score."; color = "text-emerald-500"; messageIcon = "medal"; }
    else if (percentage < 30) { message = "Needs serious review on basics."; color = "text-red-500"; messageIcon = "alert-triangle"; }

    document.getElementById('quiz-main-card').classList.add('mx-auto', 'max-w-3xl');
    document.getElementById('quiz-main-card').classList.remove('w-full');
    document.getElementById('quiz-nav-sidebar').classList.add('hidden');
    document.getElementById('quiz-nav-sidebar').classList.remove('lg:block');

    let html = `
        <div class="text-center py-8 px-4 animate-[fadeIn_0.5s_ease-out]">
            <div class="mb-8">
                <i data-lucide="${messageIcon}" class="w-16 h-16 ${color} mx-auto mb-4"></i>
                <h3 class="text-3xl font-bold font-heading mb-2 ${color}">${message}</h3>
                <p class="text-slate-500 text-lg">Overall Accuracy: ${percentage}%</p>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 max-w-3xl mx-auto">
                <div class="bg-slate-50 rounded-2xl p-4 border border-slate-100 flex flex-col items-center justify-center">
                    <p class="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Total Score</p>
                    <p class="text-3xl font-black text-slate-800 font-heading">${finalScore}<span class="text-lg text-slate-400 font-medium">/${totalMarks}</span></p>
                </div>
                <div class="bg-emerald-50 rounded-2xl p-4 border border-emerald-100 flex flex-col items-center justify-center">
                    <p class="text-sm font-bold text-emerald-600 uppercase tracking-wider mb-1">Correct</p>
                    <p class="text-3xl font-black text-emerald-700 font-heading">${correctCount}</p>
                </div>
                <div class="bg-rose-50 rounded-2xl p-4 border border-rose-100 flex flex-col items-center justify-center">
                    <p class="text-sm font-bold text-rose-600 uppercase tracking-wider mb-1">Incorrect</p>
                    <p class="text-3xl font-black text-rose-700 font-heading">${incorrectCount}</p>
                </div>
                <div class="bg-slate-100 rounded-2xl p-4 border border-slate-200 flex flex-col items-center justify-center">
                    <p class="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Unattempted</p>
                    <p class="text-3xl font-black text-slate-700 font-heading">${unattemptedCount}</p>
                </div>
            </div>
            <div class="space-y-4 text-left max-w-3xl mx-auto mb-8 border-t border-slate-100 pt-8">
                <h4 class="font-bold text-xl mb-6 font-heading flex items-center gap-2"><i data-lucide="check-circle-2" class="text-emerald-500"></i> Detailed Answer Key (Top 10)</h4>`;

    if (currentQuizQuestions.length > 10) html += `<div class="bg-indigo-50 text-indigo-700 p-4 rounded-xl mb-6 text-sm flex items-start gap-3 border border-indigo-100"><i data-lucide="info" class="w-5 h-5 shrink-0"></i><p>Showing detailed review for the first 10 questions.</p></div>`;

    currentQuizQuestions.slice(0, 10).forEach((q, i) => {
        const isCorrect = userAnswers[i] === q.correctIndex;
        const isUnattempted = userAnswers[i] === null;
        let containerClass = 'border-slate-200 bg-slate-50';
        if (isCorrect) containerClass = 'border-emerald-200 bg-emerald-50/30';
        if (!isCorrect && !isUnattempted) containerClass = 'border-rose-200 bg-rose-50/30';
        html += `
            <div class="p-5 rounded-2xl border ${containerClass} shadow-sm">
                <div class="flex gap-3 items-start mb-3">
                    <div class="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold ${isCorrect ? 'bg-emerald-500 text-white' : (isUnattempted ? 'bg-slate-300 text-slate-700' : 'bg-rose-500 text-white')}">
                        ${isCorrect ? '✓' : (isUnattempted ? '-' : '✕')}
                    </div>
                    <div><p class="font-semibold text-slate-800 leading-relaxed"><span class="text-slate-500 font-bold mr-1">Q${i+1}.</span> ${q.question}</p></div>
                </div>
                <div class="ml-9 text-sm space-y-2 mt-3 p-3 rounded-xl bg-white border border-slate-100 shadow-sm">
                    <div class="flex items-center gap-2">
                        <span class="text-slate-500 w-24">Your Answer:</span>
                        <span class="font-medium px-2 py-0.5 rounded ${isCorrect ? 'bg-emerald-100 text-emerald-800' : (isUnattempted ? 'bg-slate-100 text-slate-600' : 'bg-rose-100 text-rose-800')}">
                            ${!isUnattempted ? (q.options[userAnswers[i]] || 'Skipped') : 'Skipped / Unattempted'}
                        </span>
                    </div>
                    ${!isCorrect ? `<div class="flex items-center gap-2"><span class="text-slate-500 w-24">Correct Answer:</span><span class="font-medium bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">${q.options[q.correctIndex]}</span></div>` : ''}
                    <div class="mt-3 pt-3 border-t border-slate-100"><p class="text-indigo-900 leading-relaxed"><strong class="text-indigo-500">Explanation:</strong> ${q.explanation}</p></div>
                </div>
            </div>`;
    });

    html += `
            </div>
            <button id="return-setup-btn" class="px-8 py-4 rounded-xl bg-slate-800 text-white font-bold hover:bg-slate-900 transition-colors flex items-center gap-2 mx-auto">
                <i data-lucide="home" class="w-5 h-5"></i> Return to Quiz Setup
            </button>
        </div>`;

    activeQuizView.innerHTML = html;
    if (window.MathJax) MathJax.typesetPromise([activeQuizView]).catch((err) => console.log(err.message));
    lucide.createIcons();

    addTapListener(document.getElementById('return-setup-btn'), () => {
        activeQuizView.classList.add('hidden');
        setupView.classList.remove('hidden');
        document.getElementById('quiz-main-card').innerHTML = `
            <div class="flex justify-between items-center mb-6 pb-4 border-b border-slate-100">
                <div><span class="text-xs font-bold uppercase tracking-wider text-indigo-500 bg-indigo-50 px-2 py-1 rounded" id="quiz-mode-badge">Practice Mode</span></div>
                <div class="flex items-center gap-2 bg-slate-800 text-white px-4 py-2 rounded-lg shadow-sm hidden" id="timer-container">
                    <i data-lucide="timer" class="w-4 h-4 text-emerald-400"></i>
                    <span class="font-mono font-bold tracking-wider text-xl" id="quiz-timer">00:00:00</span>
                </div>
            </div>
            <div id="quiz-question-content"></div>`;
        lucide.createIcons();
    });
}

// --- AI Chat Logic ---
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');
let chatHistory = [];

async function sendChatMessage() {
    const message = chatInput.value.trim();
    if (!message) return;
    chatInput.value = '';
    appendMessage(message, 'user');
    chatHistory.push({ role: "user", parts: [{ text: message }] });
    const loadingId = 'loading-' + Date.now();
    appendLoadingIndicator(loadingId);
    try {
        const responseText = await fetchGeminiResponse(chatHistory);
        removeLoadingIndicator(loadingId);
        appendMessage(responseText, 'bot');
        chatHistory.push({ role: "model", parts: [{ text: responseText }] });
    } catch (error) {
        removeLoadingIndicator(loadingId);
        if (error.message === 'NO_KEY') appendMessage("⚠️ No API key set. Please refresh and enter your Gemini API key.", 'bot');
        else if (error.message.includes('400') || error.message.includes('403')) { appendMessage("⚠️ API key invalid or expired. Please refresh to re-enter.", 'bot'); localStorage.removeItem('defendx_gemini_key'); }
        else appendMessage("⚠️ Trouble connecting. Check your internet and try again.", 'bot');
        console.error("Gemini API Error:", error);
    }
}

addTapListener(document.querySelector('#chat-form button[type="submit"]'), () => sendChatMessage());

chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); e.stopPropagation(); sendChatMessage(); }
});

chatForm.addEventListener('submit', (e) => { e.preventDefault(); e.stopPropagation(); sendChatMessage(); });

async function fetchGeminiResponse(history) {
    const apiKey = config.GEMINI_API_KEY;
    if (!apiKey) throw new Error("NO_KEY");
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
    const payload = {
        system_instruction: { parts: [{ text: `You are DefendX, an expert AI Mentor for the Indian National Defence Academy (NDA) entrance exam. Help aspirants prepare for Maths and GAT. Be encouraging, concise, and provide short actionable tips.` }] },
        contents: history,
        generationConfig: { temperature: 0.7, maxOutputTokens: 800 }
    };
    const response = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
}

function appendLoadingIndicator(id) {
    const div = document.createElement('div');
    div.id = id;
    div.className = `flex gap-4 animate-[fadeIn_0.3s_ease-out]`;
    div.innerHTML = `
        <div class="w-10 h-10 rounded-full bg-indigo-100 flex-shrink-0 flex items-center justify-center text-indigo-600"><i data-lucide="bot"></i></div>
        <div class="px-5 py-4 rounded-2xl max-w-[80%] shadow-sm bg-slate-50 text-slate-700 border border-slate-100 rounded-tl-none flex items-center gap-1">
            <div class="w-2 h-2 rounded-full bg-indigo-400 animate-bounce" style="animation-delay: 0ms"></div>
            <div class="w-2 h-2 rounded-full bg-indigo-400 animate-bounce" style="animation-delay: 150ms"></div>
            <div class="w-2 h-2 rounded-full bg-indigo-400 animate-bounce" style="animation-delay: 300ms"></div>
        </div>`;
    chatMessages.appendChild(div);
    lucide.createIcons();
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function removeLoadingIndicator(id) { const el = document.getElementById(id); if (el) el.remove(); }

function formatMarkdownToHtml(text) {
    return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/\n/g, '<br>')
        .replace(/```([\s\S]*?)```/g, '<pre class="bg-indigo-50 p-3 rounded-lg mt-2 text-sm overflow-x-auto border border-indigo-100">$1</pre>')
        .replace(/`(.*?)`/g, '<code class="bg-indigo-50 px-1 rounded text-indigo-700">$1</code>');
}

function appendMessage(text, sender) {
    const div = document.createElement('div');
    div.className = `flex gap-4 animate-[fadeIn_0.3s_ease-out] ${sender === 'user' ? 'flex-row-reverse' : ''}`;
    const iconHtml = sender === 'user'
        ? `<img src="https://ui-avatars.com/api/?name=N+S&background=indigo&color=fff&rounded=true" alt="Avatar" class="w-10 h-10 shadow-sm rounded-full">`
        : `<div class="w-10 h-10 rounded-full bg-indigo-100 flex-shrink-0 flex items-center justify-center text-indigo-600"><i data-lucide="bot"></i></div>`;
    const bubbleClass = sender === 'user'
        ? 'bg-indigo-600 text-white rounded-tr-none'
        : 'bg-slate-50 text-slate-800 border border-slate-100 rounded-tl-none prose prose-indigo max-w-none prose-sm sm:prose-base';
    div.innerHTML = `${iconHtml}<div class="px-5 py-4 rounded-2xl max-w-[80%] shadow-sm ${bubbleClass}"><p>${sender === 'bot' ? formatMarkdownToHtml(text) : text}</p></div>`;
    chatMessages.appendChild(div);
    if(sender === 'bot') lucide.createIcons();
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// --- User Profile System ---
const DEFAULT_PROFILE = {
    name: 'NDA Aspirant', attempt: 'April 2026', currentClass: 'Class 12', city: 'India',
    targetMath: 150, targetGat: 300, studyHours: 4, weakAreas: ['Trigonometry', 'Calculus'],
    joinDate: new Date().toISOString()
};

function loadProfile() {
    try { const saved = localStorage.getItem('defendx_profile'); return saved ? { ...DEFAULT_PROFILE, ...JSON.parse(saved) } : { ...DEFAULT_PROFILE }; }
    catch(e) { return { ...DEFAULT_PROFILE }; }
}
function saveProfileToStorage(p) { localStorage.setItem('defendx_profile', JSON.stringify(p)); }
function loadQuizHistory() {
    try { const saved = localStorage.getItem('defendx_quiz_history'); return saved ? JSON.parse(saved) : []; }
    catch(e) { return []; }
}
function saveQuizHistory(h) { localStorage.setItem('defendx_quiz_history', JSON.stringify(h)); }
function getInitials(name) {
    if (!name || !name.trim()) return 'NA';
    const parts = name.trim().split(/\s+/).filter(Boolean);
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

let userProfile = loadProfile();
let quizHistory = loadQuizHistory();

function syncSidebar() {
    const initials = getInitials(userProfile.name);
    const sa = document.getElementById('sidebar-avatar');
    const sn = document.getElementById('sidebar-profile-name');
    const sat = document.getElementById('sidebar-profile-attempt');
    if (sa) sa.textContent = initials;
    if (sn) sn.textContent = userProfile.name;
    if (sat) sat.textContent = userProfile.attempt + ' Attempt';
}
syncSidebar();

const sidebarProfileCard = document.getElementById('sidebar-profile-card');
if (sidebarProfileCard) {
    addTapListener(sidebarProfileCard, () => { navigateTo('profile'); });
}

function renderProfilePage() {
    const initials = getInitials(userProfile.name);
    const avatarLarge = document.getElementById('profile-avatar-large');
    if (avatarLarge) avatarLarge.textContent = initials;
    setText('profile-name-display', userProfile.name);
    const el = (id) => document.getElementById(id);
    if (el('profile-attempt-badge')) el('profile-attempt-badge').innerHTML = `<i data-lucide="calendar" class="w-3.5 h-3.5"></i> ${userProfile.attempt} Attempt`;
    if (el('profile-class-badge')) el('profile-class-badge').innerHTML = `<i data-lucide="graduation-cap" class="w-3.5 h-3.5"></i> ${userProfile.currentClass}`;
    if (el('profile-city-badge')) el('profile-city-badge').innerHTML = `<i data-lucide="map-pin" class="w-3.5 h-3.5"></i> ${userProfile.city || 'India'}`;
    setText('pd-name', userProfile.name);
    setText('pd-attempt', userProfile.attempt);
    setText('pd-class', userProfile.currentClass);
    setText('pd-city', userProfile.city || 'India');
    setText('pd-target-math', `${userProfile.targetMath}+ / 300`);
    setText('pd-target-gat', `${userProfile.targetGat}+ / 600`);
    setText('pd-study-hours', `${userProfile.studyHours} hrs/day`);
    const pdWeakAreas = el('pd-weak-areas');
    if (pdWeakAreas) {
        pdWeakAreas.innerHTML = userProfile.weakAreas && userProfile.weakAreas.length > 0
            ? userProfile.weakAreas.map(area => `<span class="weak-chip"><i data-lucide="alert-triangle" class="w-3 h-3"></i>${area.trim()}</span>`).join('')
            : `<span class="text-sm text-slate-400 italic">None — great!</span>`;
    }
    computeAndRenderStats();
    renderQuizHistorySection();
    lucide.createIcons();
}

function setText(id, value) { const el = document.getElementById(id); if (el) el.textContent = value; }

function computeAndRenderStats() {
    const history = loadQuizHistory();
    setText('profile-stat-quizzes', history.length);
    if (history.length === 0) { setText('profile-stat-accuracy', '0%'); setText('profile-stat-streak', '0'); setText('profile-stat-best', '--'); return; }
    const avg = Math.round(history.reduce((s, q) => s + (q.accuracy || 0), 0) / history.length);
    setText('profile-stat-accuracy', `${avg}%`);
    setText('profile-stat-best', `${Math.max(...history.map(q => q.accuracy || 0))}%`);
    const today = new Date(); today.setHours(0,0,0,0);
    const activeDays = new Set(history.map(q => { const d = new Date(q.date); d.setHours(0,0,0,0); return d.getTime(); }));
    let streak = 0, day = today.getTime();
    while (activeDays.has(day)) { streak++; day -= 86400000; }
    setText('profile-stat-streak', streak);
}

function renderQuizHistorySection() {
    const container = document.getElementById('profile-quiz-history');
    if (!container) return;
    const history = loadQuizHistory();
    if (history.length === 0) {
        container.innerHTML = `<div class="text-center text-slate-400 py-8 flex flex-col items-center gap-3"><i data-lucide="clipboard-list" class="w-12 h-12 opacity-40"></i><p class="text-sm">No quizzes completed yet. Start practising!</p></div>`;
        lucide.createIcons(); return;
    }
    container.innerHTML = [...history].reverse().slice(0, 5).map(q => {
        let scoreColor = 'text-amber-600 bg-amber-50 border-amber-200', icon = 'minus-circle';
        if (q.accuracy >= 60) { scoreColor = 'text-emerald-700 bg-emerald-50 border-emerald-200'; icon = 'check-circle-2'; }
        if (q.accuracy < 30) { scoreColor = 'text-rose-700 bg-rose-50 border-rose-200'; icon = 'x-circle'; }
        const typeLabel = { topic: 'Practice', 'math-mock': 'Math Mock', 'gat-mock': 'GAT Mock' }[q.type] || 'Practice';
        const typeBadge = { topic: 'bg-indigo-50 text-indigo-700 border-indigo-200', 'math-mock': 'bg-blue-50 text-blue-700 border-blue-200', 'gat-mock': 'bg-rose-50 text-rose-700 border-rose-200' }[q.type] || 'bg-indigo-50 text-indigo-700 border-indigo-200';
        const dateStr = new Date(q.date).toLocaleDateString('en-IN', { day:'numeric', month:'short', year:'numeric' });
        return `<div class="quiz-history-row">
            <div class="w-9 h-9 rounded-xl ${scoreColor} border flex items-center justify-center shrink-0"><i data-lucide="${icon}" class="w-5 h-5"></i></div>
            <div class="flex-1 min-w-0"><p class="font-semibold text-slate-800 text-sm truncate">${q.topic && q.topic !== 'all' ? q.topic : 'Mixed Topics'}</p><p class="text-xs text-slate-400 mt-0.5">${dateStr}</p></div>
            <div class="flex items-center gap-2 shrink-0">
                <span class="text-xs font-semibold border px-2 py-0.5 rounded-full ${typeBadge}">${typeLabel}</span>
                <span class="text-sm font-bold ${q.accuracy >= 60 ? 'text-emerald-600' : q.accuracy < 30 ? 'text-rose-600' : 'text-amber-600'}">${q.accuracy}%</span>
            </div>
        </div>`;
    }).join('');
    lucide.createIcons();
}

// --- Edit Profile Modal ---
const editProfileModal = document.getElementById('edit-profile-modal');
const openEditProfileBtn = document.getElementById('open-edit-profile-btn');
const closeEditProfileBtn = document.getElementById('close-edit-profile-modal');
const cancelEditBtn = document.getElementById('cancel-edit-profile');
const saveProfileBtn = document.getElementById('save-profile-btn');

function openEditModal() {
    document.getElementById('edit-name').value = userProfile.name;
    document.getElementById('edit-attempt').value = userProfile.attempt;
    document.getElementById('edit-class').value = userProfile.currentClass;
    document.getElementById('edit-city').value = userProfile.city || '';
    document.getElementById('edit-target-math').value = userProfile.targetMath;
    document.getElementById('edit-target-gat').value = userProfile.targetGat;
    document.getElementById('edit-study-hours').value = userProfile.studyHours;
    document.getElementById('edit-weak-areas').value = (userProfile.weakAreas || []).join(', ');
    editProfileModal.classList.remove('hidden');
    lucide.createIcons();
}
function closeEditModal() { editProfileModal.classList.add('hidden'); }

if (openEditProfileBtn) addTapListener(openEditProfileBtn, () => openEditModal());
if (closeEditProfileBtn) addTapListener(closeEditProfileBtn, () => closeEditModal());
if (cancelEditBtn) addTapListener(cancelEditBtn, () => closeEditModal());
if (editProfileModal) editProfileModal.addEventListener('click', e => { if (e.target === editProfileModal) closeEditModal(); });

if (saveProfileBtn) {
    addTapListener(saveProfileBtn, () => {
        userProfile = {
            ...userProfile,
            name: document.getElementById('edit-name').value.trim() || 'NDA Aspirant',
            attempt: document.getElementById('edit-attempt').value,
            currentClass: document.getElementById('edit-class').value,
            city: document.getElementById('edit-city').value.trim() || 'India',
            targetMath: Math.min(300, Math.max(0, parseInt(document.getElementById('edit-target-math').value) || 0)),
            targetGat: Math.min(600, Math.max(0, parseInt(document.getElementById('edit-target-gat').value) || 0)),
            studyHours: Math.min(16, Math.max(1, parseInt(document.getElementById('edit-study-hours').value) || 4)),
            weakAreas: document.getElementById('edit-weak-areas').value.split(',').map(s => s.trim()).filter(Boolean)
        };
        saveProfileToStorage(userProfile);
        syncSidebar();
        renderProfilePage();
        closeEditModal();
        const orig = saveProfileBtn.innerHTML;
        saveProfileBtn.innerHTML = `<i data-lucide="check" class="w-4 h-4"></i> Saved!`;
        saveProfileBtn.classList.replace('bg-indigo-600', 'bg-emerald-600');
        lucide.createIcons();
        setTimeout(() => { saveProfileBtn.innerHTML = orig; saveProfileBtn.classList.replace('bg-emerald-600', 'bg-indigo-600'); lucide.createIcons(); }, 1800);
    });
}

document.addEventListener('defendx:quizFinished', (e) => {
    const { score, totalMarks, correct, incorrect, unattempted, quizType, topic } = e.detail;
    const attempted = correct + incorrect;
    const accuracy = attempted > 0 ? Math.round((correct / (attempted + unattempted)) * 100) : 0;
    quizHistory = loadQuizHistory();
    quizHistory.push({ date: new Date().toISOString(), type: quizType, topic: topic || 'Mixed Topics', score: parseFloat(score), totalMarks, correct, incorrect, unattempted, accuracy });
    saveQuizHistory(quizHistory);
    setText('dash-quizzes-done', quizHistory.length);
    launchConfetti();
});
