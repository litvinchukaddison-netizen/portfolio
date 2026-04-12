import type { HandbookEntry } from './types'

// Add one entry per CTMF. The portfolio requires ≥9 distinct CTMFs total,
// spanning all four strands: Frame · Diverge · Converge · Represent.
// CTMFs can appear in more than one project (list all relevant slugs).
//
// ctmfLinks: for each project this CTMF appears in, provide the ctmfId
// from data/projects.ts so the handbook can link directly to the analysis.

export const handbook: HandbookEntry[] = [
  // ─── FRAME ────────────────────────────────────────────────────────────────
  {
    id: 'secondary-research',
    name: 'Secondary Research (Reference Designs)',
    strand: ['Frame', 'Diverge'],
    definition:
      'Secondary research draws on existing high-authority sources to build an understanding of reference designs, serving a dual purpose: identifying the limitations of current solutions and using their features as inspiration for new concepts.',
    whenToUse: [
      {
        heading: 'Defining requirements',
        items: [
          'Can help set metrics',
          'Communicate what helps designs and what would make a solution not belong in the design space',
        ],
      },
      {
        heading: 'Diverging on approaches',
        items: [
          'Helps create a starting point for design concepts',
        ],
      },
      {
        heading: 'Proxy testing',
        items: [
          'Can prevent the development of numerous prototypes',
        ],
      },
    ],
    whenToAvoid: [
      {
        heading: 'Too distant',
        items: [
          'Ideas that rely on unattainable traits that contradict requirements may not have attributes to feasibly carry over into a unique design',
        ],
      },
      {
        heading: 'Inapplicable standards',
        items: [
          'Standards found for requirements may not be actually applicable to the design problem',
        ],
      },
    ],
    projectSlugs: ['praxis1'],
    ctmfLinks: [{ projectSlug: 'praxis1', ctmfId: 'praxis1-ctmf3' }],
    notes:
      'Be creative!\nHaving a team with broad perspectives helps generate unique connections\nBreak into problem functions, what other designs may fulfill that specific function?',
  },
  {
    id: 'ctmf-frame-2',
    name: 'Human Centred Design',
    strand: 'Frame',
    definition:
      'A framing tool used to ensure engineering designs are grounded in the actual needs, values, and constraints of the people and communities they serve. It involves moving through phases of empathy, definition, and ideation to effect a validated improvement in lived experience.',
    whenToUse: [
      {
        heading: 'Opportunity development',
        items: [
          'Understanding the problem and defining the opportunity',
          'Using stakeholder interests to create requirements that frame the design process to support human centred design',
        ],
      },
      {
        heading: 'Vulnerable communities',
        items: [
          'These communities are often overlooked by traditional engineering processes and metrics, so require the extra effort to ensure their needs are met',
        ],
      },
    ],
    whenToAvoid: [
      {
        heading: 'Limited communication',
        items: [
          'If the stakeholders are not able to communicate what they want, assuming may lead to various consequences down the line',
        ],
      },
      {
        heading: 'Technical work',
        items: [
          'Stakeholders may not understand technical needs or fixes, over involving them will slow the process down and result in more confusion',
        ],
      },
    ],
    projectSlugs: ['praxis2'],
    ctmfLinks: [{ projectSlug: 'praxis2', ctmfId: 'praxis2-ctmf1' }],
    notes:
      'An open line of communication and psychologically safe space must be established\nBe conscious of imposing what you think they need instead of speaking with them to learn\nNot limited to framing — must be incorporated throughout to be effective',
  },
  {
    id: 'reality-theory',
    name: 'Reality and Theory Model',
    strand: 'Represent',
    definition:
      'A model used to represent the discrepancy between the "World as it is" (Reality) and the "World as we dream it" (Theory). It illustrates different parts of the engineering design process and highlights how modelling and building bridge the gap of interpretations and goals to real implementations.',
    whenToUse: [
      {
        heading: 'Continuous checks',
        items: [
          'Try building the unbelievable components of the iteration to see if the design translates to reality as expected',
        ],
      },
      {
        heading: 'External stakeholders',
        items: [
          'It\'s particularly important to make sure the design fits into the lived experience of all affected to be successfully brought to reality as intended',
        ],
      },
    ],
    whenToAvoid: [
      {
        heading: 'Simple checks',
        items: [
          'Detailed models may be overkill for simple mechanisms, choose models with appropriate level of representation',
        ],
      },
      {
        heading: 'Purely theory',
        items: [
          'Some projects are never meant to move past the "world as you dream it" part, the real implications may be ignored to expand possibilities of innovations',
        ],
      },
    ],
    projectSlugs: ['civ102'],
    ctmfLinks: [{ projectSlug: 'civ102', ctmfId: 'civ102-ctmf3' }],
    notes:
      'Consider a variety of perspectives when perceiving\nBalance model detail/accuracy with feasible project scale\nRemember the effects of human error in implementations',
  },

  // ─── DIVERGE ──────────────────────────────────────────────────────────────
  {
    id: 'morph-chart',
    name: 'Morph Chart',
    strand: 'Diverge',
    definition:
      'A systematic diverging tool that deconstructs a design into its essential sub-functions and lists multiple technical solutions for each. Unique concepts are generated by selecting and combining one solution from each functional row.',
    whenToUse: [
      {
        heading: 'Later diverging rounds',
        items: [
          'Use previously generated ideas to develop into full concepts',
          'Have a clear problem but unsure how to integrate parts together',
        ],
      },
      {
        heading: 'Feeling stuck',
        items: [
          'Changing one approach to a function can prevent solution fixation and create new, better approaches',
        ],
      },
    ],
    whenToAvoid: [
      {
        heading: 'Early idea generation',
        items: [
          'Need an understanding of the problem and some potential approaches to avoid vague functions and impossible solutions',
        ],
      },
      {
        heading: 'Simple problems',
        items: [
          'There is not always a need to break problems down into such detail',
        ],
      },
    ],
    projectSlugs: ['praxis1'],
    ctmfLinks: [{ projectSlug: 'praxis1', ctmfId: 'praxis1-ctmf1' }],
    notes:
      'Each sub-function should be as simple as possible\nUse engineering judgment when combining, avoid incompatible approaches to different functions\nTry swapping functions to see if designs can be improved',
  },


  // ─── CONVERGE ─────────────────────────────────────────────────────────────
  {
    id: 'anti-pairwise',
    name: 'Anti-Pairwise Comparison',
    strand: 'Converge',
    definition:
      'A systematic convergence tool used to narrow down a set of design concepts by comparing them in pairs against each other. Unlike a traditional pairwise, the objective is to determine which of two designs is "worse" in relation to specific requirements or evaluation criteria through structured debate and elimination, providing justification for design recommendations.',
    whenToUse: [
      {
        heading: 'Final design selection & justification',
        items: [
          'Helps create an in-depth reasoning as to why some designs are better than others',
          'Need a solid understanding of design space and information about solutions to be effective',
        ],
      },
      {
        heading: 'Highly communicative team',
        items: [
          'Members need to have psychological safety to have impartial and effective debates and votes',
        ],
      },
    ],
    whenToAvoid: [
      {
        heading: 'Large design sets',
        items: [
          'Can be time consuming, limiting the amount of designs needed to be debated',
          'Inherently going to have less supporting evidence for each design if there are more, so arguments are weaker',
        ],
      },
      {
        heading: 'Limited information',
        items: [
          'Need to all understand the goals of the project and how each design has been performing to use as evidence in the debate',
        ],
      },
    ],
    projectSlugs: ['praxis1'],
    ctmfLinks: [{ projectSlug: 'praxis1', ctmfId: 'praxis1-ctmf2' }],
    notes:
      'Focus on why the other design is better and not why the design you are representing is worse\nNever blindly tally — track votes and use engineering judgment\nPrioritize Toulmin structured arguments based off of information pertaining to key requirements, not personal preference',
  },
  {
    id: 'proxy-testing',
    name: 'Proxy Testing',
    strand: 'Converge',
    definition:
      'A hands-on converging tool used to collect relatively accurate data about key aspects of a design. It facilitates verification against requirements and helps evaluate performance across different criteria by systematically testing prototypes through developed protocols.',
    whenToUse: [
      {
        heading: 'Converging between design concepts',
        items: [
          'Easy way to test and determine direction the project should go',
          'Provides data for each design aspect to be compared using other tools like measurement matrices',
        ],
      },
      {
        heading: 'Using prototypes effectively',
        items: [
          'Provides standard, intentional ways to perceive, interpret, and assess prototypes against the key requirements',
        ],
      },
    ],
    whenToAvoid: [
      {
        heading: 'Final verifications',
        items: [
          'Proxy tests with low fidelity prototypes are not fully accurate',
        ],
      },
      {
        heading: 'Unable to accurately represent users',
        items: [
          'Working with vulnerable communities or a range of users that cannot be accurately proxied means tests won\'t be representative of the influence of the design on others\' lived experiences',
        ],
      },
    ],
    projectSlugs: ['praxis2'],
    ctmfLinks: [{ projectSlug: 'praxis2', ctmfId: 'praxis2-ctmf3' }],
    notes:
      'Make tests as accurate as possible\nInclude stakeholders in discussions\nDo not take results at face value — use engineering judgement and discuss with others before making any decisions',
  },
  {
    id: 'triz',
    name: 'TRIZ',
    strand: 'Converge',
    definition:
      'A systematic approach to solving engineering problems by identifying and resolving contradictions. It uses a matrix of 39 parameters and 40 principles to find "inventive" solutions that avoid compromises.',
    whenToUse: [
      {
        heading: 'Contradictions',
        items: [
          'If you want to improve something but know it will come at the cost of another quality you want to maintain',
        ],
      },
      {
        heading: 'Perspective shifts',
        items: [
          'Can let you approach the problem with new information or an entirely new perspective',
        ],
      },
    ],
    whenToAvoid: [
      {
        heading: 'Small design space',
        items: [
          'If there are a lot of strict requirements on the design, principles may not meet them',
        ],
      },
      {
        heading: 'Trade off is worthy',
        items: [
          'Sometimes you don\'t want to maintain something that needs to be reduced for another quality',
          'The compromise is not worth avoiding the contradiction',
        ],
      },
    ],
    projectSlugs: ['civ102'],
    ctmfLinks: [{ projectSlug: 'civ102', ctmfId: 'civ102-ctmf2' }],
    notes:
      'Use early when feeling stuck\nNot all principles will be within the requirements of the opportunity\nTake a look at the root causes independently from the tool as well',
  },

  // ─── REPRESENT ────────────────────────────────────────────────────────────
  {
    id: 'cad-onshape',
    name: 'CAD (OnShape)',
    strand: 'Represent',
    definition:
      'Utilizing computers to create, modify, and analyze designs to improve productivity and communication. It provides a 3D digital prototype that illustrates how individual components function as a complete system.',
    whenToUse: [
      {
        heading: 'Embodiment phase',
        items: [
          'Communicating overall system structure (how parts fit together)',
          'Want specific unique pieces — can be made into a physical prototype with 3D printing',
        ],
      },
      {
        heading: 'Limited resources',
        items: [
          'Benefits sustainability without needing physical prototypes',
        ],
      },
    ],
    whenToAvoid: [
      {
        heading: 'Early diverging',
        items: [
          'Rapid design iterations',
          'Modification may cause cascading problems',
        ],
      },
      {
        heading: 'Time constraints',
        items: [
          'Takes significant effort to reach any beneficial levels of detail',
        ],
      },
    ],
    projectSlugs: ['praxis2'],
    ctmfLinks: [{ projectSlug: 'praxis2', ctmfId: 'praxis2-ctmf2' }],
    notes:
      'Use with intention — CAD is easy to do okay but hard to do to a high quality\nEnsure CAD work is distributed between members who really want to do it',
  },
  {
    id: 'prototypes',
    name: 'Prototypes',
    strand: 'Represent',
    definition:
      'A model designed to generate or communicate information about a design concept. It represents specific characteristics of a design so that its performance can be measured against a particular metric and is not a complete or production-ready version of the design.',
    whenToUse: [
      {
        heading: 'Evidence gathering',
        items: [
          'Allows proxy tests to be performed',
          'Helps develop data for engineering tables and foundations for engineering judgement',
        ],
      },
      {
        heading: 'Communicating ideas',
        items: [
          'Having various representations of a design ensures everyone is on the same page about various aspects',
        ],
      },
    ],
    whenToAvoid: [
      {
        heading: 'High fidelity too early',
        items: [
          'Prototyping is useful early for quick checks but functioning prototypes require a lot of time and resources',
        ],
      },
      {
        heading: 'Inaccurate',
        items: [
          'Trusting prototypes that are not truly representative of the design will render information gathered as useless',
        ],
      },
    ],
    projectSlugs: ['civ102'],
    ctmfLinks: [{ projectSlug: 'civ102', ctmfId: 'civ102-ctmf1' }],
    notes:
      'Be intentional with representation and fidelity choices\nNon-physical are easier to iterate but interacting with physical ones reveals information\nGreat tool for easy communication — utilize to ensure everyone is on the same page',
  },
]
