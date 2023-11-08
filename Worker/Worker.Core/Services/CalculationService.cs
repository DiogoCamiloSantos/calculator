using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Worker.Domain.Calculation;
using Worker.Persistence.Repositories;

namespace Worker.Core.Services
{
    public class CalculationService
    {
        private CalculationRepository CalculationRepository;
        public CalculationService()
        {
            CalculationRepository = new CalculationRepository();
        }

        public async Task sum(string Id)
        { 
            var calculation = await CalculationRepository.FindBy(Id);

            if (calculation == null || calculation.HasCalculationDone)
                return;
            
            calculation.result = calculation.number1 + calculation.number2;
            calculation.SetCalculationAsDone();

            await CalculationRepository.update(calculation);
        }
    }
}
