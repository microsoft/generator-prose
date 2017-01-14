using System;
using Microsoft.ProgramSynthesis;
using Microsoft.ProgramSynthesis.Rules;
using Microsoft.ProgramSynthesis.Learning;
using Microsoft.ProgramSynthesis.Specifications;
using System.Collections.Generic;

namespace <%= name %>.<%= learning %>
{
    public class Witnesses : DomainLearningLogic
    {
        public Witnesses(Grammar grammar) : base(grammar) {}

        // Your witness functions here
    }
}
