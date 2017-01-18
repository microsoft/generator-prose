using System;
using Microsoft.ProgramSynthesis;
using Microsoft.ProgramSynthesis.Rules;
using Microsoft.ProgramSynthesis.Learning;
using Microsoft.ProgramSynthesis.Specifications;
using System.Collections.Generic;

namespace <%= name %>.<%= learning %>
{
    public class <%= domainLearningLogic %> : DomainLearningLogic
    {
        public <%= domainLearningLogic %>(Grammar grammar) : base(grammar) {}

        // Your custom learning logic here (for example, witness functions)
    }
}
