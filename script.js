// Mixed messages script by FollowSnow/AshTears

// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

// Factory function to create multiple objects
function pAequorFactory(num, base){
	let organism = {
		specimenNum: num,
		dna: base,
		
		// Simulates the organism's high rate of mutation
		mutate: function(){
			let randNum = Math.floor(Math.random() * 4)
			let randBase = ''
			do {
				randBase = returnRandBase()
			} while (randBase === this.dna[randNum])
				
			this.dna[randNum] = randBase
		},
		
		// Compares the DNA of two organisms
		compareDNA: function(pAequor){
			let count = 0
			for (let i = 0; i < 15; i++){
				if (this.dna[i] === pAequor.dna[i])
					count++
			}
			let percentage = Math.round((count / 15) * 100)
			return `Specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${percentage}% DNA in common.`
		},
		
		// Determines the survival rate of said organism
		willLikelySurvive: function(){
			let count = 0;
			for (let i = 0; i < 15; i++){
				if (this.dna[i] === 'C' || this.dna[i] === 'G')
					count++
			}
			let percentage = (count / 15) * 100
			return percentage >= 60.0 ? true : false
		}		
	}
    return organism
}

let organisms = []
let organismCount = 1

while (organisms.length < 30){
	let goodOrganism = pAequorFactory(organismCount, mockUpStrand())
	if (goodOrganism.willLikelySurvive())
		organisms.push(goodOrganism)
	organismCount++
}

console.log(organisms)









